import { Slide } from '../Slide'

interface TeamSlideProps {
  isNested?: boolean
}

function TeamSlide({ isNested }: TeamSlideProps) {
  const team = [
    { name: 'Jane Smith', role: 'CEO', bg: 'Ex-Google, Stanford MBA' },
    { name: 'John Doe', role: 'CTO', bg: 'Ex-Meta, 15yr engineering' },
    { name: 'Sarah Lee', role: 'VP Sales', bg: 'Ex-Salesforce, $50M quota' },
  ]

  return (
    <Slide isNested={isNested}>
      <section data-background-color="#0f3460">
        <h2 className="section-label">The Team</h2>
        <div className="team-grid">
          {team.map((member, i) => (
            <div key={i} className="team-member fragment">
              <div className="member-photo">👤</div>
              <h4 className="member-name">{member.name}</h4>
              <p className="member-role">{member.role}</p>
              <p className="member-bg">{member.bg}</p>
            </div>
          ))}
        </div>
        <p className="team-note fragment">35 team members across SF, NYC, London</p>
      </section>
    </Slide>
  )
}

export default function TeamSlidePreview() {
  return <TeamSlide />
}

export { TeamSlide }
