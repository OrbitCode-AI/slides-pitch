import { Slide } from '../Slide'

interface ProblemSlideProps {
  isNested?: boolean
}

function ProblemSlide({ isNested }: ProblemSlideProps) {
  return (
    <Slide isNested={isNested}>
      <section data-background-color="#1a1a2e">
        <h2 className="section-label">The Problem</h2>
        <h3 className="statement">$50B is lost annually due to poor team communication</h3>
        <div className="pain-points">
          <div className="pain-point fragment">
            <span className="pain-icon">😤</span>
            <span>Information silos across tools</span>
          </div>
          <div className="pain-point fragment">
            <span className="pain-icon">⏰</span>
            <span>Hours wasted searching for context</span>
          </div>
          <div className="pain-point fragment">
            <span className="pain-icon">📉</span>
            <span>Decisions made without key data</span>
          </div>
        </div>
      </section>
    </Slide>
  )
}

export default function ProblemSlidePreview() {
  return <ProblemSlide />
}

export { ProblemSlide }
