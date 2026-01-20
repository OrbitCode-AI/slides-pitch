import { useEffect, useRef, useState } from 'preact/hooks';
import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import './styles.css';

import { TitleSlide } from './slides/01-Title';
import { ProblemSlide } from './slides/02-Problem';
import { SolutionSlide } from './slides/03-Solution';
import { MarketSlide } from './slides/04-Market';
import { TractionSlide } from './slides/05-Traction';
import { TeamSlide } from './slides/06-Team';
import { AskSlide } from './slides/07-Ask';

export default function App() {
  const deckRef = useRef<HTMLDivElement>(null);
  const [slideState, setSlideState] = useState({ h: 0, v: 0, f: -1 });

  useEffect(() => {
    if (!deckRef.current) return;

    const deck = new Reveal(deckRef.current, {
      controls: true,
      progress: true,
      hash: false,
      embedded: true,
      transition: 'slide',
      backgroundTransition: 'fade',
    });

    deck.on('slidechanged', () => {
      const indices = deck.getIndices();
      setSlideState({ h: indices.h, v: indices.v, f: indices.f ?? -1 });
    });

    deck.initialize();

    const resizeObserver = new ResizeObserver(() => {
      if (deck.isReady()) (deck as any).layout();
    });
    resizeObserver.observe(deckRef.current);

    return () => {
      resizeObserver.disconnect();
      try { deck.destroy(); } catch {}
    };
  }, []);

  return (
    <div className="reveal" ref={deckRef} style={{ position: 'fixed', inset: 0 }}>
      <div className="slides">
        <TitleSlide isNested />
        <ProblemSlide isNested />
        <SolutionSlide isNested />
        <MarketSlide isNested />
        <TractionSlide isNested />
        <TeamSlide isNested />
        <AskSlide isNested />
      </div>
    </div>
  );
}
