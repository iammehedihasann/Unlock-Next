// src/app/courses/advanced-composition/page.tsx

"use client";
import React from "react";
import Link from "next/link";

export default function AdvancedCompositionPage() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* ✅ Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-teal-600 text-white py-20 text-center">
        <h1 className="text-5xl font-bold">Compose Music That Inspires</h1>
        <p className="mt-4 text-lg">
          Take your composition skills to the next level with harmony,
          orchestration, and creativity.
        </p>
        <Link
          href="#enroll"
          className="mt-6 inline-block bg-white text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200"
        >
          Enroll Today
        </Link>
      </section>

      {/* ✅ Course Overview */}
      <section className="max-w-4xl mx-auto py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Course Overview</h2>
        <p className="text-lg leading-relaxed">
          This course is designed for musicians who already know the basics of
          music theory. You’ll dive deeper into advanced harmony, counterpoint,
          orchestration, and learn how to write professional-level compositions
          for different genres.
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
              🎵 Advanced chord progressions
            </li>
            <li className="bg-gray-100 p-4 rounded-xl shadow">
              🎻 Orchestration & arranging
            </li>
            <li className="bg-gray-100 p-4 rounded-xl shadow">
              🎼 Counterpoint & polyphony
            </li>
            <li className="bg-gray-100 p-4 rounded-xl shadow">
              🎬 Writing for film & games
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
            <p className="text-gray-700">Advanced Harmony</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <h3 className="font-bold text-xl">Lesson 2</h3>
            <p className="text-gray-700">Writing Counterpoint</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <h3 className="font-bold text-xl">Lesson 3</h3>
            <p className="text-gray-700">Orchestration Basics</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <h3 className="font-bold text-xl">Lesson 4</h3>
            <p className="text-gray-700">Film Score Composition</p>
          </div>
        </div>
      </section>

      {/* ✅ Media Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">Watch a Preview</h2>
          <div className="aspect-video w-full bg-black rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Rk6_hdRtJOE"
              title="Advanced Composition Basics"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* ✅ Call to Action */}
      <section
        id="enroll"
        className="py-16 bg-green-600 text-center text-white"
      >
        <h2 className="text-4xl font-bold mb-4">
          Take Your Compositions to the Next Level
        </h2>
        <p className="text-lg mb-6">
          Enroll today and start writing professional music.
        </p>
        <Link
          href="/signup"
          className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-200"
        >
          Enroll Now
        </Link>
      </section>
    </div>
  );
}
