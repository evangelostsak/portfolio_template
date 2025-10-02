"use client";

import { useEffect, useState } from 'react';

type EmailLinkProps = {
  user: string; // local part
  domain: string; // domain part
  className?: string;
  obfuscate?: boolean;
  layout?: 'inline' | 'stack' | 'stack-top' | 'inline-icon' | 'stack-icon-above' | 'stack-icon-below'; // additional vertical icon layouts
};

export function EmailLink({ user, domain, className = '', obfuscate = true, layout = 'inline' }: EmailLinkProps) {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = `${user}@${domain}`;

  // Reveal email after mount to avoid simple static scraping (basic obfuscation only)
  useEffect(() => {
    if (obfuscate) {
      const t = setTimeout(() => setRevealed(true), 50);
      return () => clearTimeout(t);
    } else {
      setRevealed(true);
    }
  }, [obfuscate]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: create a temporary textarea
      const textarea = document.createElement('textarea');
      textarea.value = email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const masked = `${user.replace(/./g, '•')}@${domain.split('.')[0]}…`;
  const content = (
    <a
      href={revealed ? `mailto:${email}` : undefined}
      onClick={(e) => { if (!revealed) { e.preventDefault(); } }}
      className="text-brand hover:underline break-all"
      aria-label={revealed ? `Send email to ${email}` : 'Reveal email'}
    >
      {revealed ? email : masked}
    </a>
  );

  if (layout === 'stack') {
    return (
      <span className={`inline-flex flex-col items-start ${className}`}>
        {content}
        <button
          type="button"
          onClick={handleCopy}
          className="mt-1 text-[10px] tracking-wide uppercase px-2 py-0.5 rounded border border-neutral-300/60 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          aria-live="polite"
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </span>
    );
  }

  if (layout === 'stack-top') {
    return (
      <span className={`inline-flex flex-col items-start ${className}`}>
        <button
          type="button"
          onClick={handleCopy}
          className="mb-1 text-[10px] tracking-wide uppercase px-2 py-0.5 rounded border border-neutral-300/60 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          aria-live="polite"
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
        {content}
      </span>
    );
  }

  if (layout === 'inline-icon') {
    return (
      <span className={`inline-flex items-center gap-1 ${className}`}>
        {content}
        <button
          type="button"
          onClick={handleCopy}
          className="p-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-transparent hover:border-neutral-200 dark:hover:border-neutral-700 transition-colors text-neutral-600 dark:text-neutral-300"
          aria-label={copied ? 'Email copied' : 'Copy email to clipboard'}
        >
          {copied ? (
            <svg className="w-4 h-4 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
          ) : (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
          )}
        </button>
      </span>
    );
  }

  if (layout === 'stack-icon-above' || layout === 'stack-icon-below') {
    const iconButton = (
      <button
        type="button"
        onClick={handleCopy}
        className="p-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-transparent hover:border-neutral-200 dark:hover:border-neutral-700 transition-colors text-neutral-600 dark:text-neutral-300"
        aria-label={copied ? 'Email copied' : 'Copy email to clipboard'}
      >
        {copied ? (
          <svg className="w-4 h-4 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
        ) : (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
        )}
      </button>
    );
    return (
      <span className={`inline-flex flex-col items-start gap-1 ${className}`}>
        {layout === 'stack-icon-above' && iconButton}
        {content}
        {layout === 'stack-icon-below' && iconButton}
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      {content}
      <button
        type="button"
        onClick={handleCopy}
        className="text-xs px-2 py-1 rounded border border-neutral-300/60 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
        aria-live="polite"
      >
        {copied ? 'Copied' : 'Copy'}
      </button>
    </span>
  );
}
