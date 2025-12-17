import AnimatedButton from "@/components/reusable/AnimatedButton";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="p-4 md:p-5 space-y-16">
      <h1 className="text-[104px] md:text-[210px] font-medium leading-[0.8] tracking-tight">
        About <br /> The Loop
      </h1>
      <div>
        <Image
          src={"/images/oneOKrock.jpg"}
          alt="poster"
          width={300}
          height={450}
          className="w-full"
        />
        <div className="font-sans mt-10 tracking-[-0.01em] leading-[1.2em] spac">
          <p>
            Tucked away in the heart of Bangkok, The Loop is a space built for
            live sound, creative energy, and shared experiences. Once a quiet
            urban corner, it’s now home to an evolving lineup of concerts, club
            nights, and cultural events.
          </p>
          <p>
            What started as a few local shows has grown into a hub for artists,
            fans, and community — a place where emerging talent is discovered,
            and established names play their most intimate sets.
          </p>
          <p>
            Whether it’s a packed Friday night show or a laid-back Sunday
            session, The Loop is where stories unfold — one event at a time.
          </p>
        </div>
      </div>
      <section className="grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-6 my-6">
        <Image
          src={"/images/oneOKrock.jpg"}
          alt="poster"
          width={300}
          height={450}
          className="aspect-square object-cover w-full col-span-1"
        />
        <Image
          src={"/images/oneOKrock.jpg"}
          alt="poster"
          width={300}
          height={450}
          className="aspect-square object-cover w-full col-span-2"
        />
        <Image
          src={"/images/oneOKrock.jpg"}
          alt="poster"
          width={300}
          height={450}
          className="aspect-square object-cover w-full col-span-1"
        />
        <div className="relative aspect-square w-full col-span-2">
          <Image
            src={"/images/oneOKrock.jpg"}
            alt="poster"
            width={300}
            height={450}
            className="object-cover w-full"
          />
          <div className="bg-[rgba(31,31,31,0.1)] absolute inset-0 w-full h-full backdrop-blur-sm z-1" />
          <div className="absolute inset-0 z-2 flex flex-col justify-center items-center space-y-4">
            <h5 className="text-white text-3xl">See All Upcoming Shows</h5>
            <AnimatedButton>See All Events</AnimatedButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
