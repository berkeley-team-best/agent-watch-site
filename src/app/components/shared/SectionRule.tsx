import { CSSProperties } from 'react';

interface SectionRuleProps {
  label: string;
  labelStyle?: CSSProperties;
}

export function SectionRule({ label, labelStyle }: SectionRuleProps) {
  return (
    <div className="section-rule">
      <div className="section-rule-line"></div>
      <span className="section-rule-label" style={labelStyle}>{label}</span>
      <div className="section-rule-line"></div>
    </div>
  );
}
