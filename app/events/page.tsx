import UpcomingCards from "@/components/UpcomingCards";
import { events } from "@/constants/event";

const Events = () => {
  return (
    <div className="p-5 overflow-hidden">
      <h1 className="text-[120px] md:text-[18.9vw] font-medium mb-5 leading-[0.8]">
        Upcoming shows
      </h1>
      <div className="md:divide-y divide-secondary/50 md:border-t md:border-b border-secondary/50">
        {events.map((event, index) => (
          <UpcomingCards key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
