import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import EventCard from "@/components/EventCard";
import AnimatedButton from "@/components/reusable/AnimatedButton";
import UpcomingCards from "@/components/UpcomingCards";
import { events, upcomingShows } from "@/constants/event";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="p-5">

        <section className="flex justify-between mt-5">
          <h1 className="text-[210px] font-medium leading-[0.8] tracking-tight">
            The Loop <br />– Bangkok
          </h1>
          <p className="font-sans text-2xl w-[30%]">
            Your city’s stage for everything live — music, art, and culture
            brought together in one place. Stay connected.
          </p>
        </section>

        {/* Feature events  */}
        <section className="grid grid-cols-2 gap-x-2 gap-y-6 my-6">
          {events.map((event, index) => (
            <EventCard key={index} event={event} isSmall={index % 3 === 0} />
          ))}
        </section>

        {/* Upcoming shows */}
        <section className="mt-40">
          <h1 className="text-[18.9vw] font-medium mb-5">Upcoming shows</h1>
          <div className="divide-y divide-secondary/50 border-t border-b border-secondary/50">
            {upcomingShows.slice(0, 4).map((event, index) => (
              <UpcomingCards key={index} event={event} />
            ))}
          </div>
          <Link href={"/events"} className="block mx-auto">
            <AnimatedButton>See All Events</AnimatedButton>
          </Link>
        </section>
      </div>

    </>
  );
}
