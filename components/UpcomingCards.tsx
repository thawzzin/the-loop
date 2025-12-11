import Image from "next/image";

interface UpcomingCardsProps {
  event: {
    date: string;
    title: string;
    stadium: string;
    imageUrl: string;
  };
}

const UpcomingCards = ({event}: UpcomingCardsProps) => {
  return (
    <div className="flex justify-between text-3xl py-5">
      <p>{event.date}</p>
      <div>
        <p>{event.title}</p>
        <p className="text-secondary">Venue : {event.stadium}</p>
      </div>
      <div className="w-[30%] h-[215px]">
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
