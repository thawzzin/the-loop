import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import style from "./style.module.css";

interface UpcomingCardsProps {
  event: {
    date: string;
    title: string;
    stadium: string;
    imageUrl: string;
  };
}

const UpcomingCards = ({ event }: UpcomingCardsProps) => {
  return (
    <div className={`${style.card} grid grid-cols-3 text-3xl py-5 cursor-pointer`}>
      <p className="text-secondary">{event.date}</p>
      <div>
        <p>{event.title}</p>
        <p className="text-secondary">Venue : {event.stadium}</p>
        <div className={`${style.arrowtext} flex items-center mt-5`}>
          <ArrowRightIcon size={24} />
          <p className="font-sans text-base font-medium">Read More</p>
        </div>
      </div>
      <div className="h-[215px]">
        <Image
          src={event.imageUrl}
          alt="poster"
          width={200}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default UpcomingCards;
