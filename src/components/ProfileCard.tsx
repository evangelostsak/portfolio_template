import { profile } from '../data/profile';
import Image from 'next/image';
import { certifications } from '../data/certifications';

export function ProfileCard() {
  return (
    <div className="mt-4 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Location card */}
        <div className="card p-4 flex flex-col">
          <p className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">Location</p>
          <p className="mt-1 font-medium">{profile.location}</p>
        </div>
        {/* Email */}
        <div className="card p-4">
          <p className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">Email</p>
            <a className="mt-1 font-medium text-brand" href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
        {/* Looking For */}
        <div className="card p-4">
          <p className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">Looking for</p>
          <p className="mt-1 font-medium">{profile.lookingFor}</p>
        </div>
      </div>
      <div className="card p-4">
        <div className="flex items-center justify-between gap-2">
          <p className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">Certifications</p>
        </div>
        <div className="mt-3 flex flex-wrap gap-4">
          {certifications.map(cert => (
            <a
              key={cert.title}
              href={cert.href}
              target="_blank"
              rel="noreferrer noopener"
              className="group w-[90px] sm:w-[110px] flex flex-col items-center text-center"
            >
              <div className="relative w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] rounded-md overflow-hidden ring-1 ring-neutral-200/50 dark:ring-neutral-700/50 bg-neutral-50 dark:bg-neutral-900">
                <Image
                  src={cert.image}
                  alt={cert.alt || cert.title}
                  fill
                  sizes="80px"
                  className="object-contain p-1 transition-transform group-hover:scale-105"
                />
              </div>
              <span className="mt-1.5 line-clamp-2 text-[10px] leading-tight font-medium text-neutral-600 dark:text-neutral-300">
                {cert.title}
              </span>
              {cert.status === 'in-progress' && (
                <span className="mt-0.5 text-[10px] px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300">
                  In Progress
                </span>
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}


