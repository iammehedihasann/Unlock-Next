"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
  {
    title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
    description:
      "Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Discover your sound
      </div>
    ),
  },
  {
    title: "Unlock Your Potential Through Music",
    description:
      "Whether you’re a beginner or an experienced musician, our structured programs help you unlock your full potential. With expert guidance, state-of-the-art facilities, and a nurturing environment, you’ll find the perfect rhythm to grow your talent.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Unlock your Music
      </div>
    ),
  },
  {
    title: "Learn from Masters, Perform with Confidence",
    description:
      "Our instructors are seasoned performers and educators who guide you with passion and precision. Gain confidence through regular recitals, workshops, and live performances that shape you into a skilled and expressive artist.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Learn from Masters
      </div>
    ),
  },
  {
    title: "A Place Where Creativity Meets Community",
    description:
      "Join a vibrant community of music lovers where collaboration, innovation, and inspiration flourish. From group classes to jam sessions, our school is more than just learning—it’s belonging to a family of creatives.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Meets Comunity
      </div>
    ),
  },
  {
    title: "Transform Your Passion into Performance",
    description:
      "From the first note to the stage spotlight, we support your journey every step of the way. With programs designed for all ages and skill levels, you can transform your passion for music into unforgettable performances.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Transform performance
      </div>
    ),
  },
];

function whyChooseUs() {
  return (
    <div>
      <StickyScroll content={musicSchoolContent} />
    </div>
  );
}

export default whyChooseUs;
