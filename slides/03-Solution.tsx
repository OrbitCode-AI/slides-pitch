import { Slide } from '../Slide';

interface SolutionSlideProps {
  isNested?: boolean;
}

function SolutionSlide({ isNested }: SolutionSlideProps) {
  return (
    <Slide isNested={isNested}>
      <section data-background-color="#0f3460">
        <h2 className="section-label">The Solution</h2>
        <h3 className="solution-headline">AI-powered collaboration hub that unifies your team's knowledge</h3>
        <div className="solution-features">
          <div className="solution-feature fragment">
            <div className="feature-icon">🔗</div>
            <h4>Unified Workspace</h4>
            <p>All your tools in one place</p>
          </div>
          <div className="solution-feature fragment">
            <div className="feature-icon">🤖</div>
            <h4>Smart Assistant</h4>
            <p>AI surfaces relevant context</p>
          </div>
          <div className="solution-feature fragment">
            <div className="feature-icon">⚡</div>
            <h4>Instant Insights</h4>
            <p>Real-time team analytics</p>
          </div>
        </div>
      </section>
    </Slide>
  );
}

export default function SolutionSlidePreview() {
  return <SolutionSlide />;
}

export { SolutionSlide };
