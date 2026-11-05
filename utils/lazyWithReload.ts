import { lazy, ComponentType } from 'react';

// Screens load on demand. After a new version is deployed, an open app may ask
// for screen files that no longer exist. Reload once to get the new version
// instead of showing an error; if it still fails, let the error show.

const KEY = 'educore-reloaded-for-update';

export const isUpdateError = (error: unknown) =>
  /dynamically imported module|Importing a module script failed|Loading chunk|ChunkLoadError|MIME type/i.test(String((error as any)?.message || error));

export const reloadForUpdate = () => {
  const last = Number(sessionStorage.getItem(KEY) || 0);
  if (Date.now() - last < 30000) return false; // already tried just now
  sessionStorage.setItem(KEY, String(Date.now()));
  window.location.reload();
  return true;
};

export const lazyWithReload = <T extends ComponentType<any>>(load: () => Promise<{ default: T }>) =>
  lazy(() =>
    load().catch((error) => {
      if (isUpdateError(error) && reloadForUpdate()) return new Promise<{ default: T }>(() => undefined);
      throw error;
    })
  );
