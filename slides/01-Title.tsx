import { Slide } from '../Slide';

interface TitleSlideProps {
  isNested?: boolean;
  companyName?: string;
  tagline?: string;
  round?: string;
}

function TitleSlide({
  isNested,
  companyName = 'StartupCo',
  tagline = 'Revolutionizing How Teams Collaborate',
  round = 'Series A',
}: TitleSlideProps) {
  return (
    <Slide isNested={isNested}>
      <section className="title-slide" data-background-gradient="linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)">
        <div className="company-logo">◆</div>
        <h1>{companyName}</h1>
        <p className="tagline">{tagline}</p>
        <div className="round-badge">{round}</div>
      </section>
    </Slide>
  );
}

export default function TitleSlidePreview() {
  return <TitleSlide />;
}

export { TitleSlide };
