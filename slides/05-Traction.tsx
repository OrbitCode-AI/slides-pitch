import { Slide } from '../Slide'

interface TractionSlideProps {
  isNested?: boolean
}

function TractionSlide({ isNested }: TractionSlideProps) {
  const metrics = [
    { value: '$2.4M', label: 'ARR', growth: '+180% YoY' },
    { value: '500+', label: 'Customers', growth: '+120% YoY' },
    { value: '94%', label: 'Retention', growth: 'Industry avg: 85%' },
    { value: '4.8★', label: 'G2 Rating', growth: 'Top 10 in category' },
  ]

  return (
    <Slide isNested={isNested}>
      <section data-background-color="#1a1a2e">
        <h2 className="section-label">Traction</h2>
        <div className="traction-grid">
          {metrics.map((metric, i) => (
            <div key={i} className="traction-metric fragment fade-up">
              <span className="metric-value">{metric.value}</span>
              <span className="metric-label">{metric.label}</span>
              <span className="metric-growth">{metric.growth}</span>
            </div>
          ))}
        </div>
        <div className="logos-strip fragment">
          <span className="logo-text">Trusted by:</span>
          <span className="logo-placeholder">◇ Company A</span>
          <span className="logo-placeholder">◇ Company B</span>
          <span className="logo-placeholder">◇ Company C</span>
        </div>
      </section>
    </Slide>
  )
}

export default function TractionSlidePreview() {
  return <TractionSlide />
}

export { TractionSlide }
