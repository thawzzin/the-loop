import Image from "next/image";

interface EventCardProps {
  event: {
    title: string;
    date: string;
    imageUrl: string;
  };
  isSmall: boolean;
}

const EventCard = ({ event, isSmall }: EventCardProps) => {
  return (
    <div className="h-[90vh] flex flex-col uppercase space-y-2">
      <div
        className={`relative ${
          isSmall ? "w-1/2 aspect-square" : "flex-1 w-full"
        }`}
      >
        <Image
          src={event.imageUrl}
          alt="poster"
          fill
          className="object-cover object-top hover:grayscale"
          unoptimized
        />
      </div>
      <div className={isSmall ? "space-y-2" : "flex justify-between"}>
        <h3 className="text-3xl">{event.title}</h3>
        <h3 className="text-3xl text-secondary">{event.date}</h3>
      </div>
    </div>
  );
};

export default EventCard;
