import UpcomingCards from "@/components/UpcomingCards";
import { upcomingShows } from "@/constants/event";

const Events = () => {
  return (
    <div className="px-5">
      <h1 className="text-[18.9vw] font-medium mb-5 leading-[0.8] mt-10">Upcoming shows</h1>
      <div className="divide-y divide-secondary/50 border-t border-b border-secondary/50">
        {upcomingShows.map((event, index) => (
          <UpcomingCards key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
