import AnimatedButton from "@/components/reusable/AnimatedButton";
import { events } from "@/constants/event";
import type { Event } from "@/types/event";
import Image from "next/image";
import Link from "next/link";

const Event = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const event: Event | undefined = events.find((e) => e.slug === slug);

  const nextEventIndex = event
    ? (events.indexOf(event) + 1) % events.length
    : null;
  const nextEvent: Event | null =
    nextEventIndex !== null ? events[nextEventIndex] : null;

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="p-4 md:p-5">
      <div className="space-y-4">
        <Image
          src={event.imageUrl}
          alt="poster"
          width={2000}
          height={2000}
          className="w-full md:h-screen aspect-square object-cover"
          loading="eager"
          unoptimized
        />
        <div className="md:grid grid-cols-2">
          <div className="space-y-4">
            <div className="text-3xl md:text-4xl leading-[0.8] mt-10">
              <h2>{event.title}</h2>
              <h2 className="text-secondary">{event.stadium}</h2>
            </div>
            <div className="font-sans text-sm md:text-base font-semibold uppercase">
              <p>
                <span className="text-secondary">Time:</span> {event.time}
              </p>
              <p>
                <span className="text-secondary">Date:</span> {event.date}
              </p>
              <p>
                <span className="text-secondary">Price:</span> {event.price}
              </p>
            </div>
            <Link
              href={event.ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AnimatedButton className="w-full md:w-auto">
                But Tickets
              </AnimatedButton>
            </Link>
          </div>
          <p className="font-sans mt-10 text-lg">{event.description}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-12">
        <Image
          src={event.image1}
          alt="poster"
          width={2000}
          height={2000}
          className="w-full aspect-square object-cover col-span-1"
          loading="eager"
        />
        <Image
          src={event.image2}
          alt="poster"
          width={2000}
          height={2000}
          className="w-full aspect-square object-cover col-span-2 md:col-start-3"
          loading="eager"
        />
        <Image
          src={event.image3}
          alt="poster"
          width={2000}
          height={2000}
          className="w-full aspect-square object-cover col-span-2"
          loading="eager"
        />
      </div>
      <Link
        href={`/events/${nextEvent?.slug}`}
        className="font-semibold font-sans uppercase text-sm mt-10 text-right md:flex gap-x-1 justify-end"
      >
        <p className="text-secondary">Next:</p>
        <p>{nextEvent?.title}</p>
      </Link>
    </div>
  );
};

export default Event;
