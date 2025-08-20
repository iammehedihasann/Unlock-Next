"use client";
import { cn } from "@/utilis/cn";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

function MovingCards() {
  return (
    <section className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black overflow-hidden">
      {/* Grid background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Radial mask overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_25%,black)] dark:bg-black"></div>

      <div className="relative z-20 flex flex-col items-center gap-10 px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-neutral-800 to-neutral-500 dark:from-neutral-200 dark:to-neutral-400 bg-clip-text text-transparent tracking-tight">
          Hear our Harmony: Voices of Success
        </h2>

        {/* Cards */}
        <div className="w-full max-w-5xl">
          <div className=" rounded-md flex flex-col items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MovingCards;

const testimonials = [
  {
    quote:
      "Joining this music school was the best decision I’ve ever made. The teachers are not only talented but also deeply passionate about helping students grow.",
    name: "Ariana Gomes",
    title: "Piano Student",
  },
  {
    quote:
      "As a parent, I’ve seen a huge change in my child’s confidence since starting guitar lessons here. The supportive environment makes all the difference.",
    name: "David Rahman",
    title: "Parent of a Guitar Student",
  },
  {
    quote:
      "The vocal training sessions are outstanding. I went from being nervous about singing to performing on stage with confidence.",
    name: "Sadia Noor",
    title: "Vocal Student",
  },
  {
    quote:
      "This school doesn’t just teach notes and scales — it inspires creativity. I’ve learned how to compose my own music with proper guidance.",
    name: "Tareq Hossain",
    title: "Music Composition Student",
  },
  {
    quote:
      "The community here feels like family. Practicing with fellow musicians keeps me motivated and always excited to learn more.",
    name: "Maria Alam",
    title: "Violin Student",
  },
];
