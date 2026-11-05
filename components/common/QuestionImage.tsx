import React, { useState } from 'react';

/** A question's diagram (if any). Tap to see it full size. */
const QuestionImage: React.FC<{ src?: string | null; alt?: string }> = ({ src, alt = 'Diagram for this question' }) => {
  const [zoom, setZoom] = useState(false);
  if (!src) return null;
  return (
    <>
      <button type="button" onClick={() => setZoom(true)} className="my-3 block rounded-lg border border-slate-200 dark:border-slate-700 bg-white p-2" aria-label="Show diagram larger">
        <img src={src} alt={alt} loading="lazy" className="max-h-64 w-auto max-w-full object-contain" />
      </button>
      {zoom && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 p-4" onClick={() => setZoom(false)} role="dialog" aria-label={alt}>
          <img src={src} alt={alt} className="max-h-full max-w-full rounded-lg bg-white p-2" />
        </div>
      )}
    </>
  );
};

export default QuestionImage;
