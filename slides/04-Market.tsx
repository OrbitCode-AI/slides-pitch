import { Slide } from '../Slide'

interface MarketSlideProps {
  isNested?: boolean
}

function MarketSlide({ isNested }: MarketSlideProps) {
  return (
    <Slide isNested={isNested}>
      <section data-background-color="#16213e">
        <h2 className="section-label">Market Opportunity</h2>
        <div className="market-size">
          <div className="market-circle tam">
            <span className="market-value">$180B</span>
            <span className="market-label">TAM</span>
          </div>
          <div className="market-circle sam">
            <span className="market-value">$45B</span>
            <span className="market-label">SAM</span>
          </div>
          <div className="market-circle som fragment highlight-in">
            <span className="market-value">$2B</span>
            <span className="market-label">SOM</span>
          </div>
        </div>
        <p className="market-note fragment">Enterprise collaboration market growing 15% YoY</p>
      </section>
    </Slide>
  )
}

export default function MarketSlidePreview() {
  return <MarketSlide />
}

export { MarketSlide }
