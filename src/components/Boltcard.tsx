import { CheckIcon, CircleStackIcon } from "@heroicons/react/24/outline";
import Bolt from "./Bolt";
import { useRef, useState } from "react";

const BoltCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [mouseOnCard, setMouseOnCard] = useState(false);
  const mouseMoveHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (cardRef.current !== null) {
      const rect = cardRef?.current?.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setCursor({
        x: x,
        y: y,
      });
    }
  };
  return (
    <section className="">
      <div
        className="card"
        ref={cardRef}
        onMouseMove={(e) => mouseMoveHandler(e)}
        onMouseEnter={() => setMouseOnCard(true)}
        onMouseLeave={() => setMouseOnCard(false)}>
        <div className="flex flex-col w-2/5 justify-between">
          <div className="flex flex-col gap-5">
            <CircleStackIcon className="w-14 rounded-lg bg-neutral-950/70 stroke-[#f4f430] p-2 shadow-inner" />
            <h1 className="font-poppins text-neutral-200 tracking-wide text-2xl">
              SuperFast
            </h1>
            <p className="-mt-2 font-poppins text-neutral-500 tracking-wide">
              Every project is a full Postgres database, the world's most
              fastest database.
            </p>
          </div>
          <div className="flex flex-col font-poppins text-neutral-200 tracking-wide">
            <span className="flex flex-row gap-2">
              <CheckIcon className="w-5" />
              <p>100% portable</p>
            </span>
            <span className="flex flex-row gap-2">
              <CheckIcon className="w-5" />
              <p>Built-in Auth with RLS</p>
            </span>
            <span className="flex flex-row gap-2">
              <CheckIcon className="w-5" />
              <p>Easy to extend</p>
            </span>
          </div>
        </div>
        <div className="w-3/5 flex flex-col place-items-center">
          {/* SVG Here */}
          {/* <Flame cursor={cursor} cardRef={cardsRef} mouseOnCard={mouseOnCard} /> */}
          <Bolt cursor={cursor} cardRef={cardRef} mouseOnCard={mouseOnCard} />
        </div>
      </div>
    </section>
  );
};

export default BoltCard;
