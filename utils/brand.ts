// A school's brand colour applied to the whole app: the indigo and violet
// palettes are CSS variables (tailwind.config + index.css). Shade 600 is the
// school's colour itself (darkened if too light for white text); lighter
// shades mix it with white, darker ones with black. Violet and fuchsia (used in
// gradients) become a lighter, richer version of the same colour.

const SHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
// How far each shade is mixed towards white (+) or black (-) from shade 600
const MIX: Record<number, number> = { 50: 0.95, 100: 0.88, 200: 0.76, 300: 0.58, 400: 0.36, 500: 0.16, 600: 0, 700: -0.15, 800: -0.32, 900: -0.45, 950: -0.62 };

type RGB = [number, number, number];
const fromHex = (hex: string): RGB => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16)) as RGB;
const mix = (c: RGB, t: number): RGB => c.map((v) => Math.round(t >= 0 ? v + (255 - v) * t : v * (1 + t))) as RGB;
const luminance = ([r, g, b]: RGB) => {
  const f = (v: number) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
};

const toHsl = ([r, g, b]: RGB): [number, number, number] => {
  const [R, G, B] = [r / 255, g / 255, b / 255];
  const max = Math.max(R, G, B), min = Math.min(R, G, B);
  const l = (max + min) / 2;
  if (max === min) return [0, 0, l];
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  const h = max === R ? (G - B) / d + (G < B ? 6 : 0) : max === G ? (B - R) / d + 2 : (R - G) / d + 4;
  return [h * 60, s, l];
};
const fromHsl = ([h, s, l]: [number, number, number]): RGB => {
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [f(0), f(8), f(4)].map((v) => Math.round(v * 255)) as RGB;
};

/** Darkens a colour until white text on it is readable (contrast about 4.5:1). */
const readable = (c: RGB): RGB => {
  let out = c;
  for (let i = 0; i < 20 && luminance(out) > 0.18; i++) out = mix(out, -0.08);
  return out;
};

const setPalette = (name: string, base: RGB | null) => {
  const root = document.documentElement.style;
  for (const n of SHADES) {
    if (base) root.setProperty(`--${name}-${n}`, mix(base, MIX[n]).join(' '));
    else root.removeProperty(`--${name}-${n}`);
  }
};

export const isBrandColor = (hex?: string | null): hex is string => !!hex && /^#[0-9a-fA-F]{6}$/.test(hex);

/** Applies a school's colour (#rrggbb), or goes back to the EduCore colours with null. */
export const applyBrand = (hex?: string | null) => {
  if (typeof document === 'undefined') return;
  if (!isBrandColor(hex)) {
    for (const name of ['brand', 'accent', 'pop']) setPalette(name, null);
    return;
  }
  const base = readable(fromHex(hex));
  const [h, s, l] = toHsl(base);
  setPalette('brand', base);
  // Same hue, a little lighter and more vivid, so gradients stay in the school's colour
  const accent = readable(fromHsl([h, Math.min(1, s * 1.15 + 0.05), Math.min(0.62, l + 0.1)]));
  setPalette('accent', accent);
  setPalette('pop', accent);
};

/** Ready-made colours for the branding page. */
export const BRAND_PRESETS = [
  { name: 'EduCore indigo', hex: '#4f46e5' },
  { name: 'Royal blue', hex: '#1d4ed8' },
  { name: 'Teal', hex: '#0f766e' },
  { name: 'Green', hex: '#15803d' },
  { name: 'Maroon', hex: '#8b1e3f' },
  { name: 'Red', hex: '#b91c1c' },
  { name: 'Orange', hex: '#c2410c' },
  { name: 'Purple', hex: '#7e22ce' },
  { name: 'Navy', hex: '#1e3a8a' },
];
