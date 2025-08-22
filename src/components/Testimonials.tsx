"use client";
import React from "react";
import Image from "next/image";
import testimonialData from "@/data/testimonials.json";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
  course: string;
}

function Testimonials() {
  const testimonials = testimonialData.testimonials;

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-yellow-400" : "text-gray-600"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Student Success Stories
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            What Our Students Say
          </p>
          <p className="mt-4 max-w-2xl text-xl text-neutral-400 mx-auto">
            Join thousands of students who have transformed their musical journey with our courses
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial: Testimonial) => (
            <div
              key={testimonial.id}
              className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800 hover:border-neutral-700 transition-colors duration-300"
            >
              {/* Rating */}
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Content */}
              <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Student Info */}
              <div className="flex items-center space-x-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-neutral-400 text-xs">{testimonial.role}</p>
                  <p className="text-teal-400 text-xs mt-1">{testimonial.course}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-2xl p-8 border border-neutral-800">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Musical Journey?
            </h3>
            <p className="text-neutral-400 mb-6 max-w-2xl mx-auto">
              Join our community of passionate musicians and start learning today. 
              With expert instructors and a proven curriculum, your musical dreams are within reach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 rounded-lg bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors">
                Start Free Trial
              </button>
              <button className="px-8 py-3 rounded-lg border border-neutral-600 text-white font-semibold hover:bg-neutral-800 transition-colors">
                View All Courses
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials; 