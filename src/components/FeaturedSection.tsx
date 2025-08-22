"use client";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
import coursesData from "../data/music_courses.json";

interface Courses {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  //   image: "/courses/guitar.jpg"
}

function FeaturedSection() {
  const featuredCourses = coursesData.courses.filter(
    (courses: Courses) => courses.isFeatured
  );

  return (
    <div className="py-12 bg-gray-900 ">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl ">
            Learn With the best Platform
          </p>
        </div>
      </div>

      <div className="mt-10 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((courses: Courses) => (
            <div className="flex justify-center" key={courses.id}>
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-blue-950 dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {courses.title}
                  </p>
                  <p className="p-4 sm:p-6 flex flex-col items-center ">
                    {courses.description}
                  </p>
                  <Link
                    href={`/courses${courses.slug}`}
                    className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-black hover:text-white transition duration-200"
                  >
                    Learn More
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center ">
        <Link
          href={"/courses"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-black hover:text-white transition duration-200"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedSection;
