"use client";
import Link from "next/link";
import React from "react";

import { HoverEffect } from "./ui/card-hover-effect";

function UpComingWebinars() {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBNINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
          <div className="max-w-5xl mx-auto px-8">
            <HoverEffect
              items={FeaturesWebinars.map((webinar) => ({
                title: webinar.title,
                description: webinar.description,
                link: "/",
                speaker: webinar.speaker,
              }))}
            />
          </div>
        </div>
        <div className="mt-10 text-center">
          <Link
            href={"/courses"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-500 hover:text-white transition duration-200"
          >
            View All Webinar
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpComingWebinars;

export const FeaturesWebinars = [
  {
    title: "Mastering Piano Basics",
    description:
      "Learn the fundamentals of piano playing with simple techniques that build a strong foundation.",
    speaker: "Prof. Elena Smith",
    date: "March 10, 2025",
  },
  {
    title: "Unlock Your Vocal Power",
    description:
      "Discover vocal warm-ups, breathing control, and performance tips to improve your singing voice.",
    speaker: "Sadia Noor (Vocal Coach)",
    date: "March 18, 2025",
  },
  {
    title: "Guitar Techniques for Beginners",
    description:
      "Start your guitar journey with easy chords, strumming patterns, and practice methods.",
    speaker: "David Rahman",
    date: "March 24, 2025",
  },
  {
    title: "The Art of Music Composition",
    description:
      "Learn how to create original melodies, harmonies, and rhythms using creative approaches.",
    speaker: "Tareq Hossain",
    date: "April 2, 2025",
  },
  {
    title: "Stage Performance & Confidence",
    description:
      "Practical strategies to overcome stage fright and shine in live performances.",
    speaker: "Maria Alam",
    date: "April 10, 2025",
  },
];
