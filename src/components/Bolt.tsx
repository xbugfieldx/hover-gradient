import { type RefObject, useEffect, useState } from "react";

interface Props {
  cursor: { x: number; y: number };
  cardRef: RefObject<HTMLElement>;
  mouseOnCard: boolean;
}

const Bolt = ({ cursor, cardRef, mouseOnCard }: Props) => {
  const [gradientCenter, setGrdientCenter] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (cardRef.current !== null && cursor.x !== null && cursor.y !== null) {
      const cardRect = cardRef.current.getBoundingClientRect();
      const cxPercent = (cursor.x / cardRect.width) * 100 - 24;
      const cyPercent = (cursor.y / cardRect.height) * 100;
      setGrdientCenter({
        cx: `${cxPercent}%`,
        cy: `${cyPercent}%`,
      });
    }
  }, [cursor, cardRef]);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-96 h-96 duration-200 transition-all">
      <defs>
        <radialGradient
          id="boltGradient"
          gradientUnits="userSpaceOnUse"
          r="35%"
          cx={gradientCenter.cx}
          cy={gradientCenter.cy}>
          {mouseOnCard && <stop stopColor="#f4f430" />}
          <stop offset={1} stopColor="#404040" />
        </radialGradient>
      </defs>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        className="fill-neutral-950/50"
        stroke="url(#boltGradient)"
        d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
      />
    </svg>
  );
};

export default Bolt;
