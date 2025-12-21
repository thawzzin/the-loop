import { Event } from "@/types/event";
import Image from "next/image";
import Link from "next/link";
import slugify from "react-slugify";

interface EventCardProps {
  event: Event;
  isSmall: boolean;
}

const EventCard = ({ event, isSmall }: EventCardProps) => {
  return (
    <div
      className={`${
        isSmall ? "col-span-2 md:col-span-1" : "col-span-3 md:col-span-2"
      } ${
        event.id === 4 ? "order-3 col-start-2" : event.id === 3 ? "order-4" : ""
      } ${
        event.id === 2 ? "md:col-start-3" : ""
      } md:order-0 flex flex-col uppercase space-y-2`}
    >
      <Link href={`/events/${slugify(event.title)}`}>
        <div className={`relative w-full aspect-square`}>
          <Image
            src={event.imageUrl}
            alt="poster"
            fill
            className="object-cover object-top hover:grayscale"
          />
        </div>
        <div className={isSmall ? "" : "flex justify-between"}>
          <h3 className="text-3xl leading-none">{event.title}</h3>
          <h3 className="text-3xl leading-none text-secondary">{event.date}</h3>
        </div>
      </Link>
    </div>
  );
};

export default EventCard;
