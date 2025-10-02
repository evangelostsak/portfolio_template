"use client";

export function ResumeDownloadButton() {
  return (
    <a
      href="/files/resume.pdf"
      download
      className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 bg-brand text-white hover:bg-brand-dark active:opacity-90 transition-colors text-sm"
      aria-label="Download resume PDF"
    >
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
      <span>Download PDF</span>
    </a>
  );
}
