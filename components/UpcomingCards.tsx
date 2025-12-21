import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import style from "./style.module.css";
import Link from "next/link";
import slugify from "react-slugify";

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
    <Link href={`/events/${slugify(event.title)}`}>
      <div
        className={`${style.card} flex flex-col-reverse md:flex-row gap-2 text-3xl py-5 cursor-pointer`}
      >
        <p className="hidden md:block flex-1 text-secondary">{event.date}</p>
        <div className="flex-1">
          <p className="leading-[0.8]">{event.title}</p>
          <p className="text-secondary">Venue : {event.stadium}</p>
          <div
            className={`${style.arrowtext} md:opacity-0 flex items-center mt-5`}
          >
            <ArrowRightIcon size={24} />
            <p className="font-sans text-base font-medium">Read More</p>
          </div>
        </div>
        <p className="md:hidden text-secondary">{event.date}</p>
        <div className="md:flex-1 h-[250px] order-1">
          <Image
            src={event.imageUrl}
            alt="poster"
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Link>
  );
};

export default UpcomingCards;
