import Image from "next/image";

interface EventCardProps {
  event: {
    id: number;
    title: string;
    date: string;
    imageUrl: string;
  };
  isSmall: boolean;
}

const EventCard = ({ event, isSmall }: EventCardProps) => {
  return (
    <div
      className={`${
        isSmall ? "col-span-2 md:col-span-1" : "col-span-3 md:col-span-2"
      } ${event.id === 4 ? "order-3 col-start-2" : event.id === 3 ? "order-4" : ""} ${
        event.id === 2 ? "md:col-start-3" : ""
      } md:order-0 flex flex-col uppercase space-y-2`}
    >
      <div className={`relative w-full aspect-square`}>
        <Image
          src={event.imageUrl}
          alt="poster"
          fill
          className="object-cover object-top hover:grayscale"
          unoptimized
        />
      </div>
      <div className={isSmall ? "" : "flex justify-between"}>
        <h3 className="text-3xl">{event.title}</h3>
        <h3 className="text-3xl text-secondary">{event.date}</h3>
      </div>
    </div>
  );
};

export default EventCard;
