import AnimatedButton from "@/components/reusable/AnimatedButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Event = () => {
  return (
    <div className="p-4 md:p-5">
      <div className="space-y-4">
        <Image
          src={"/images/oneOKrock.jpg"}
          alt="poster"
          width={300}
          height={450}
          className="w-full md:h-screen aspect-square object-cover"
        />
        <div className="md:grid grid-cols-2">
          <div className="space-y-4">
            <div className="text-3xl md:text-4xl leading-[0.8] mt-10">
              <h2>One Ok Rock Detox</h2>
              <h2 className="text-secondary">Impact Arena</h2>
            </div>
            <div className="font-sans text-sm md:text-base font-semibold uppercase">
              <p>
                <span className="text-secondary">Time:</span> 19:00
              </p>
              <p>
                <span className="text-secondary">Date:</span> 2025-11-09
              </p>
              <p>
                <span className="text-secondary">Price:</span> 20$
              </p>
            </div>
            <Link href={"/"}>
              <AnimatedButton className="w-full md:w-auto">
                But Tickets
              </AnimatedButton>
            </Link>
          </div>
          <p className="font-sans mt-10 text-lg">
            An evening of cinematic indie pop and shimmering synth textures.
            Aurora Nights return to the stage with their long-awaited debut
            album Mirrors in Motion — a collection of lush, emotionally charged
            tracks blending analog warmth with digital precision. Expect a live
            experience that moves from quiet introspection to euphoric
            crescendos, framed by immersive visuals and lighting design.
            Supporting them is The Glasslines, a Bristol-based trio known for
            their haunting harmonies and nostalgic dream pop. Together, they set
            the tone for a night that feels both intimate and expansive — a
            soundscape you’ll want to get lost in.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-12">
        <Image
          src={"/images/oneOKrock.jpg"}
          alt="poster"
          width={300}
          height={450}
          className="w-full aspect-square object-cover col-span-1"
        />
        <Image
          src={"/images/oneOKrock.jpg"}
          alt="poster"
          width={300}
          height={450}
          className="w-full aspect-square object-cover col-span-2 md:col-start-3"
        />
        <Image
          src={"/images/oneOKrock.jpg"}
          alt="poster"
          width={300}
          height={450}
          className="w-full aspect-square object-cover col-span-2"
        />
      </div>
      <div className="font-semibold font-sans uppercase text-sm mt-10 text-right md:flex gap-x-1 justify-end">
        <p className="text-secondary">Next:</p>
        <p>One Ok Rock Detox</p>
      </div>
    </div>
  );
};

export default Event;
