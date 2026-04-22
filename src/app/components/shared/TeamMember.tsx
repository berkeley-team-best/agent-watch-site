interface TeamMemberProps {
  initials: string;
  name: string;
  title: string;
  affiliation: string;
}

export function TeamMember({ initials, name, title, affiliation }: TeamMemberProps) {
  return (
    <div className="team-member">
      <div className="team-avatar">{initials}</div>
      <div className="team-name">{name}</div>
      <div className="team-title">{title}</div>
      <div className="team-affiliation">{affiliation}</div>
    </div>
  );
}
