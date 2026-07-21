interface SlideNumberProps {
  number: string;
}

export function SlideNumber({ number }: SlideNumberProps) {
  return <div className="slide-number">Slide {number}</div>;
}
