import React, { useEffect, useState } from 'react';

// 🔊 Reads a question (and its options) aloud with the device's own voices:
// Tamil (ta-IN) when the app is in Tamil, otherwise Indian English. Hidden when
// the device has no voice for that language.

const pickVoice = (lang: 'ta' | 'en') => {
  const voices = window.speechSynthesis?.getVoices() || [];
  return lang === 'ta'
    ? voices.find((v) => v.lang.toLowerCase().startsWith('ta'))
    : voices.find((v) => v.lang === 'en-IN') || voices.find((v) => v.lang.toLowerCase().startsWith('en'));
};

const ReadAloud: React.FC<{ text: string; lang: 'ta' | 'en'; label?: string; className?: string }> = ({ text, lang, label, className = '' }) => {
  const [voice, setVoice] = useState<SpeechSynthesisVoice | undefined>(() => (typeof window !== 'undefined' && 'speechSynthesis' in window ? pickVoice(lang) : undefined));
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    if (!('speechSynthesis' in window)) return;
    const update = () => setVoice(pickVoice(lang));
    update();
    window.speechSynthesis.addEventListener?.('voiceschanged', update);
    return () => {
      window.speechSynthesis.removeEventListener?.('voiceschanged', update);
      window.speechSynthesis.cancel();
    };
  }, [lang]);

  // Stop when the text changes (next question)
  useEffect(() => {
    window.speechSynthesis?.cancel();
    setSpeaking(false);
  }, [text]);

  if (!voice) return null;

  const toggle = () => {
    const synth = window.speechSynthesis;
    if (speaking) {
      synth.cancel();
      setSpeaking(false);
      return;
    }
    synth.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.voice = voice;
    u.lang = voice.lang;
    u.rate = 0.9;
    u.onend = () => setSpeaking(false);
    u.onerror = () => setSpeaking(false);
    synth.speak(u);
    setSpeaking(true);
  };

  return (
    <button type="button" onClick={toggle} aria-pressed={speaking}
      aria-label={label || (lang === 'ta' ? 'உரக்கப் படி' : 'Read aloud')}
      title={label || (lang === 'ta' ? 'உரக்கப் படி' : 'Read aloud')}
      className={`inline-flex items-center justify-center w-9 h-9 rounded-full text-lg ${speaking ? 'bg-indigo-600 text-white animate-pulse' : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-slate-600'} ${className}`}>
      {speaking ? '⏹' : '🔊'}
    </button>
  );
};

/** The words to read for a question: the question, then "A ..., B ...". */
export const spokenQuestion = (question: string, options: string[]) =>
  `${question}. ${options.map((o, i) => `${['A', 'B', 'C', 'D'][i]}. ${o}`).join('. ')}`;

export default ReadAloud;
