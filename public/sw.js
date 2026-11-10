// EduCore service worker: makes the app installable and quick to open.
// - App pages: network first, falling back to the cached app shell offline.
// - Built files (/assets, hashed names), icons, diagrams: cache first.
// - Textbook page pictures: cached as they are opened (kept to the newest 300).
// - API calls are never cached (marks, answers and tests must always be live).
// - Evening practice reminders arrive as push messages; tapping one opens practice.
const VERSION = 'educore-v5';
const SHELL = `${VERSION}-shell`;
const STATIC = `${VERSION}-static`;
const PAGES = `${VERSION}-textbook`;
const SHELL_FILES = ['/', '/index.html', '/manifest.webmanifest', '/icons/icon-192.png', '/icons/apple-touch-icon.png'];

// The built JS/CSS files have hashed names, so read them from the app page itself
const cacheAppFiles = async (html) => {
  const files = [...new Set((html.match(/\/assets\/[^"' )]+/g) || []))];
  if (files.length) await (await caches.open(STATIC)).addAll(files).catch(() => undefined);
};

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(SHELL);
      await cache.addAll(SHELL_FILES);
      const page = await cache.match('/index.html');
      if (page) await cacheAppFiles(await page.text());
      await self.skipWaiting();
    })()
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => !k.startsWith(VERSION)).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

const trim = async (name, max) => {
  const cache = await caches.open(name);
  const keys = await cache.keys();
  for (let i = 0; i < keys.length - max; i++) await cache.delete(keys[i]);
};

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin || url.pathname.startsWith('/api/')) return;

  // Pages of the app: always try the network so updates show at once
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((res) => {
          const copy = res.clone();
          copy.text().then((html) => {
            caches.open(SHELL).then((c) => c.put('/index.html', new Response(html, { headers: { 'Content-Type': 'text/html' } })));
            cacheAppFiles(html);
          });
          return res;
        })
        .catch(() => caches.match('/index.html', { ignoreVary: true }))
    );
    return;
  }

  const cacheFirst = (name, after) =>
    // ignoreVary: the server varies on Origin, which module scripts send and the cache copies lack
    caches.match(request, { ignoreVary: true }).then(
      (hit) =>
        hit ||
        fetch(request).then((res) => {
          // Only real files: never keep an HTML page in place of a script or picture
          const type = res.headers.get('Content-Type') || '';
          if (res.ok && !type.includes('text/html')) {
            const copy = res.clone();
            caches.open(name).then((c) => c.put(request, copy)).then(() => after && after());
          }
          return res;
        })
    );

  if (url.pathname.startsWith('/textbook/')) {
    event.respondWith(cacheFirst(PAGES, () => trim(PAGES, 300)));
    return;
  }
  if (url.pathname.startsWith('/assets/') || url.pathname.startsWith('/icons/') || url.pathname.startsWith('/content/') || /\.(png|svg|jpg|jpeg|webp|woff2?)$/.test(url.pathname)) {
    event.respondWith(cacheFirst(STATIC));
  }
});

// Practice reminders from the server: { title, body, url, tag }
self.addEventListener('push', (event) => {
  let data = {};
  try {
    data = event.data ? event.data.json() : {};
  } catch {
    data = { title: 'EduCore', body: event.data ? event.data.text() : '' };
  }
  event.waitUntil(
    self.registration.showNotification(data.title || 'EduCore', {
      body: data.body || '',
      icon: '/icons/icon-192.png',
      badge: '/icons/icon-192.png',
      tag: data.tag || 'educore',
      data: { url: data.url || '/dashboard' },
    })
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const url = (event.notification.data && event.notification.data.url) || '/dashboard';
  event.waitUntil(
    (async () => {
      const windows = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
      const open = windows.find((w) => new URL(w.url).origin === self.location.origin);
      if (open) {
        await open.focus();
        return open.navigate(url);
      }
      return self.clients.openWindow(url);
    })()
  );
});
