import Header from "@/components/common/Header";
import EventCard from "@/components/EventCard";
import { events } from "@/constants/event";

export default function Home() {
  return (
    <div className="p-5 min-h-screen">
      <Header />
      <div className="flex justify-between mt-5">
        <h1 className="text-[210px] font-medium leading-[0.8] tracking-tight">
          The Loop <br />– Bangkok
        </h1>
        <p className="font-sans text-2xl w-[30%]">
          Your city’s stage for everything live — music, art, and culture
          brought together in one place. Stay connected.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-x-2 gap-y-6 my-6">
        {events.map((event, index) => (
          <EventCard key={index} event={event} isSmall={index % 3 === 0} />
        ))}
      </div>
    </div>
  );
}
