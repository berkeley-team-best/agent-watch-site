import { ReactNode } from 'react';

interface CaseCardProps {
  year: string;
  rating?: 'amber' | 'red';
  headline: string;
  body: string;
  children?: ReactNode;
}

export function CaseCard({ year, rating, headline, body, children }: CaseCardProps) {
  return (
    <div className={`case-card ${rating || ''} reveal`}>
      <div className="case-tag">
        <span>{year}</span>
      </div>
      <h3 className="case-headline">{headline}</h3>
      <p className="case-body">{body}</p>
      {children}
    </div>
  );
}
