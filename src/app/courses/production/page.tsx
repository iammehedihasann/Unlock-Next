// src/app/courses/music-production/page.tsx

"use client";
import React from "react";
import Link from "next/link";

export default function MusicProductionPage() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* ✅ Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-600 to-red-600 text-white py-20 text-center">
        <h1 className="text-5xl font-bold">Turn Your Ideas Into Tracks</h1>
        <p className="mt-4 text-lg">
          Learn how to record, mix, and master your music like a pro.
        </p>
        <Link
          href="#enroll"
          className="mt-6 inline-block bg-white text-pink-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200"
        >
          Start Producing Today
        </Link>
      </section>

      {/* ✅ Course Overview */}
      <section className="max-w-4xl mx-auto py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Course Overview</h2>
        <p className="text-lg leading-relaxed">
          This course covers the essentials of music production, including
          working with Digital Audio Workstations (DAWs), recording techniques,
          mixing, and mastering. Whether you want to produce beats, electronic
          tracks, or full songs, this course has you covered.
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
              🎚 Using Digital Audio Workstations (DAWs)
            </li>
            <li className="bg-gray-100 p-4 rounded-xl shadow">
              🎤 Recording vocals & instruments
            </li>
            <li className="bg-gray-100 p-4 rounded-xl shadow">
              🎛 Mixing techniques (EQ, compression, reverb)
            </li>
            <li className="bg-gray-100 p-4 rounded-xl shadow">
              📀 Mastering for streaming platforms
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
            <p className="text-gray-700">Introduction to DAWs</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <h3 className="font-bold text-xl">Lesson 2</h3>
            <p className="text-gray-700">Recording Techniques</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <h3 className="font-bold text-xl">Lesson 3</h3>
            <p className="text-gray-700">Mixing Essentials</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <h3 className="font-bold text-xl">Lesson 4</h3>
            <p className="text-gray-700">Mastering Tracks</p>
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
              src="https://www.youtube.com/embed/2Vv-BfVoq4g"
              title="Music Production Basics"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* ✅ Call to Action */}
      <section id="enroll" className="py-16 bg-pink-600 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">
          Start Producing Your Own Music
        </h2>
        <p className="text-lg mb-6">
          Learn the tools and techniques to bring your ideas to life.
        </p>
        <Link
          href="/signup"
          className="bg-white text-pink-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-200"
        >
          Enroll Now
        </Link>
      </section>
    </div>
  );
}
