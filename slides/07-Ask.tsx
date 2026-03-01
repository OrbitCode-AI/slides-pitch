import { Slide } from '../Slide'

interface AskSlideProps {
  isNested?: boolean
  amount?: string
  use?: string[]
}

const defaultUse = [
  'Engineering expansion (40%)',
  'Go-to-market (35%)',
  'Product development (25%)',
]

function AskSlide({ isNested, amount = '$15M Series A', use = defaultUse }: AskSlideProps) {
  return (
    <Slide isNested={isNested}>
      <section
        className="ask-slide"
        data-background-gradient="linear-gradient(135deg, #16213e 0%, #0f3460 100%)">
        <h2 className="section-label">The Ask</h2>
        <div className="ask-amount">{amount}</div>
        <div className="use-of-funds">
          <h4>Use of Funds:</h4>
          {use.map((item, i) => (
            <div key={i} className="fund-item fragment">
              <span className="fund-bar" style={{ width: `${100 - i * 20}%` }} />
              <span className="fund-label">{item}</span>
            </div>
          ))}
        </div>
        <div className="contact fragment">
          <p>Let's build the future of work together</p>
          <p className="email">investor@startupco.com</p>
        </div>
      </section>
    </Slide>
  )
}

export default function AskSlidePreview() {
  return <AskSlide />
}

export { AskSlide }
