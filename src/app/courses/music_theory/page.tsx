// src/app/courses/basic-music-theory/page.tsx

"use client";
import React from "react";
import Link from "next/link";

export default function BasicMusicTheoryPage() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* ✅ Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 text-center">
        <h1 className="text-5xl font-bold">Master the Language of Music</h1>
        <p className="mt-4 text-lg">
          Learn the foundations of music theory step by step.
        </p>
        <Link
          href="#enroll"
          className="mt-6 inline-block bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200"
        >
          Start Learning Now
        </Link>
      </section>

      {/* ✅ Course Overview */}
      <section className="max-w-4xl mx-auto py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Course Overview</h2>
        <p className="text-lg leading-relaxed">
          This course introduces you to the building blocks of music, including
          scales, chords, rhythm, and notation. Perfect for beginners who want
          to start reading, understanding, and creating music.
        </p>
      </section>

      {/* ✅ What You'll Learn */}
      <section className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            What You’ll Learn
          </h2>
          <ul className="grid md:grid-cols-2 gap-6 text-lg">
            <li className="bg-gray-100 p-4 rounded-xl shadow">
              🎼 Reading sheet music
            </li>
            <li className="bg-gray-100 p-4 rounded-xl shadow">
              🎹 Understanding scales & keys
            </li>
            <li className="bg-gray-100 p-4 rounded-xl shadow">
              ⏱ Basic rhythm & timing
            </li>
            <li className="bg-gray-100 p-4 rounded-xl shadow">
              🎶 Building simple melodies & harmonies
            </li>
          </ul>
        </div>
      </section>

      {/* ✅ Lesson Previews */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Lesson Previews
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <h3 className="font-bold text-xl">Lesson 1</h3>
            <p className="text-gray-700">Notes & Staff</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <h3 className="font-bold text-xl">Lesson 2</h3>
            <p className="text-gray-700">Intervals</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <h3 className="font-bold text-xl">Lesson 3</h3>
            <p className="text-gray-700">Major & Minor Scales</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <h3 className="font-bold text-xl">Lesson 4</h3>
            <p className="text-gray-700">Building Chords</p>
          </div>
        </div>
      </section>

      {/* ✅ Media Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">Watch a Preview</h2>
          <div className="aspect-video w-full bg-black rounded-xl overflow-hidden shadow-lg">
            {/* Example YouTube Embed */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/5Y01jIorpeA"
              title="Music Theory Basics"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* ✅ Call to Action */}
      <section
        id="enroll"
        className="py-16 bg-indigo-600 text-center text-white"
      >
        <h2 className="text-4xl font-bold mb-4">
          Ready to Begin Your Music Journey?
        </h2>
        <p className="text-lg mb-6">
          Start learning today and master the basics of music theory.
        </p>
        <Link
          href="/signup"
          className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-200"
        >
          Enroll Today
        </Link>
      </section>
    </div>
  );
}
