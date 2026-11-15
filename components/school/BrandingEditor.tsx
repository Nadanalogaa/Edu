import React, { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';
import api from '../../services/api';
import { Button, Alert, Spinner, apiError } from '../common/ui';
import { applyBrand, BRAND_PRESETS, isBrandColor } from '../../utils/brand';

// School branding: logo, main colour (with a live preview) and the school's
// own sign-in link with a QR code. Used by the school admin (their school) and
// by the owner (any school: pass schoolId).

interface Branding { _id: string; name: string; code: string; logoUrl: string | null; brandColor: string | null }

const BrandingEditor: React.FC<{ schoolId?: string; onSaved?: (b: Branding) => void; previewWholeApp?: boolean }> = ({ schoolId, onSaved, previewWholeApp }) => {
  const base = schoolId ? `/owner/schools/${schoolId}` : '/school/branding';
  const logoPath = schoolId ? `/owner/schools/${schoolId}/logo` : '/school/branding/logo';
  const brandingPath = schoolId ? `${base}/branding` : base;
  const [data, setData] = useState<Branding | null>(null);
  const [color, setColor] = useState('#4f46e5');
  const [qr, setQr] = useState('');
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [busy, setBusy] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const link = data ? `${window.location.origin}/s/${data.code}` : '';

  useEffect(() => {
    api.get(brandingPath).then((res) => {
      setData(res.data.data);
      setColor(res.data.data.brandColor || '#4f46e5');
    }).catch((err) => setError(apiError(err, 'Could not load branding')));
  }, [brandingPath]);

  useEffect(() => {
    if (link) QRCode.toDataURL(link, { width: 320, margin: 1 }).then(setQr).catch(() => setQr(''));
  }, [link]);

  // The admin sees the whole app in the chosen colour while picking
  useEffect(() => {
    if (previewWholeApp && isBrandColor(color)) applyBrand(color);
  }, [color, previewWholeApp]);

  if (error && !data) return <Alert>{error}</Alert>;
  if (!data) return <Spinner />;

  const saved = (b: Branding, message: string) => {
    setData(b);
    setNotice(message);
    setError('');
    onSaved?.(b);
  };

  const saveColor = async (value: string | null) => {
    setBusy(true);
    try {
      const res = await api.put(brandingPath, { brandColor: value });
      if (!value) setColor('#4f46e5');
      saved(res.data.data, value ? 'Colour saved' : 'Back to the EduCore colours');
    } catch (err) {
      setError(apiError(err));
    } finally {
      setBusy(false);
    }
  };

  const uploadLogo = async (file: File) => {
    if (file.size > 1024 * 1024) return setError('The logo must be 1 MB or smaller');
    setBusy(true);
    try {
      const form = new FormData();
      form.append('logo', file);
      const res = await api.post(logoPath, form, { headers: { 'Content-Type': 'multipart/form-data' } });
      saved(res.data.data, 'Logo saved');
    } catch (err) {
      setError(apiError(err));
    } finally {
      setBusy(false);
      if (fileRef.current) fileRef.current.value = '';
    }
  };

  const removeLogo = async () => {
    setBusy(true);
    try {
      const res = await api.delete(logoPath);
      saved(res.data.data, 'Logo removed');
    } catch (err) {
      setError(apiError(err));
    } finally {
      setBusy(false);
    }
  };

  const changed = (data.brandColor || '#4f46e5') !== color;

  return (
    <div className="space-y-5">
      {notice && <Alert tone="success" onClose={() => setNotice('')}>{notice}</Alert>}
      {error && <Alert onClose={() => setError('')}>{error}</Alert>}

      <section>
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200">Logo</h3>
        <div className="mt-2 flex flex-wrap items-center gap-4">
          {data.logoUrl ? (
            <img src={data.logoUrl} alt="School logo" className="h-20 w-20 rounded-2xl object-contain bg-white p-1.5 ring-1 ring-slate-200 dark:ring-slate-700" />
          ) : (
            <div className="h-20 w-20 rounded-2xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-xs text-slate-500 text-center px-2">No logo yet</div>
          )}
          <div className="space-y-1.5">
            <input ref={fileRef} type="file" accept="image/png,image/jpeg,image/webp" className="hidden" onChange={(e) => e.target.files?.[0] && uploadLogo(e.target.files[0])} />
            <div className="flex gap-2">
              <Button size="sm" disabled={busy} onClick={() => fileRef.current?.click()}>{data.logoUrl ? 'Change logo' : 'Upload logo'}</Button>
              {data.logoUrl && <Button size="sm" variant="ghost" disabled={busy} onClick={removeLogo}>Remove</Button>}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">PNG, JPG or WebP, up to 1 MB. A square logo looks best.</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200">Main colour</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {BRAND_PRESETS.map((p) => (
            <button key={p.hex} type="button" title={p.name} aria-label={p.name} aria-pressed={color.toLowerCase() === p.hex} onClick={() => setColor(p.hex)}
              className={`h-9 w-9 rounded-full ring-offset-2 ring-offset-white dark:ring-offset-slate-800 ${color.toLowerCase() === p.hex ? 'ring-2 ring-slate-800 dark:ring-white' : ''}`}
              style={{ background: p.hex }} />
          ))}
          <label className="flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-600 pl-1 pr-3 text-xs text-slate-600 dark:text-slate-300">
            <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="h-7 w-7 cursor-pointer rounded-full border-0 bg-transparent p-0" aria-label="Pick any colour" />
            Any colour
          </label>
        </div>

        {/* Preview of the main pieces in the chosen colour */}
        <div className="mt-3 rounded-2xl border border-slate-200 dark:border-slate-700 p-3" style={{ ['--p' as any]: color }}>
          <p className="text-xs text-slate-500 mb-2">Preview</p>
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-2">
              {data.logoUrl ? <img src={data.logoUrl} alt="" className="h-8 w-8 rounded-lg object-contain bg-white" /> : <span className="h-8 w-8 rounded-lg text-white font-bold flex items-center justify-center" style={{ background: color }}>{data.name.charAt(0)}</span>}
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">{data.name}</span>
            </span>
            <span className="px-3 py-1.5 rounded-lg text-sm font-semibold text-white" style={{ background: color }}>Start practice</span>
            <span className="px-3 py-1.5 rounded-lg text-sm font-semibold" style={{ color, background: `${color}1a` }}>Selected menu</span>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          <Button disabled={busy || !changed || !isBrandColor(color)} onClick={() => saveColor(color.toLowerCase())}>Save colour</Button>
          {data.brandColor && <Button variant="ghost" disabled={busy} onClick={() => saveColor(null)}>Use EduCore colours</Button>}
        </div>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Very light colours are darkened a little so white text on buttons stays readable.</p>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200">School sign-in link</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">Opens with your logo and colours, and the school code already filled in. Share it or print the QR code for notice boards and ID cards.</p>
        <div className="mt-2 flex flex-wrap items-center gap-4">
          {qr && <img src={qr} alt={`QR code for ${link}`} className="h-32 w-32 rounded-lg bg-white p-1 ring-1 ring-slate-200" />}
          <div className="space-y-2">
            <p className="font-mono text-sm text-slate-800 dark:text-slate-100 break-all">{link}</p>
            <div className="flex flex-wrap gap-2">
              <Button size="sm" variant="secondary" onClick={() => navigator.clipboard?.writeText(link).then(() => setNotice('Link copied'))}>Copy link</Button>
              {qr && (
                <a href={qr} download={`${data.code}-sign-in-qr.png`} className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200">Download QR</a>
              )}
              <a href={link} target="_blank" rel="noreferrer" className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium rounded-lg text-indigo-700 dark:text-indigo-300">Open ↗</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandingEditor;
