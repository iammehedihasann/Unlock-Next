"use client";
import React, { useState, useMemo } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from "@/data/music_courses.json";
import Image from "next/image";
import { motion } from "framer-motion";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");
  const [sortBy, setSortBy] = useState("title");

  // Filter and sort courses
  const filteredCourses = useMemo(() => {
    let filtered = courseData.courses.filter((course: Course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Price filter
    if (priceFilter !== "all") {
      switch (priceFilter) {
        case "free":
          filtered = filtered.filter((course: Course) => course.price === 0);
          break;
        case "under50":
          filtered = filtered.filter((course: Course) => course.price < 50);
          break;
        case "50to100":
          filtered = filtered.filter((course: Course) => course.price >= 50 && course.price <= 100);
          break;
        case "over100":
          filtered = filtered.filter((course: Course) => course.price > 100);
          break;
      }
    }

    // Sort
    filtered.sort((a: Course, b: Course) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "title":
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, priceFilter, sortBy]);

  const categories = [
    "All Courses",
    "Guitar",
    "Piano", 
    "Drums",
    "Theory",
    "Production"
  ];

  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            All Courses
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Explore our comprehensive collection of music courses designed for every skill level
          </p>
          <div className="mt-6 text-teal-400 font-semibold">
            {filteredCourses.length} courses available
          </div>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Search Courses
                </label>
                <input
                  type="text"
                  placeholder="Search by title, description, or instructor..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              {/* Price Filter */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Price Range
                </label>
                <select
                  value={priceFilter}
                  onChange={(e) => setPriceFilter(e.target.value)}
                  className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="all">All Prices</option>
                  <option value="free">Free</option>
                  <option value="under50">Under $50</option>
                  <option value="50to100">$50 - $100</option>
                  <option value="over100">Over $100</option>
                </select>
              </div>

              {/* Sort */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="title">Title (A-Z)</option>
                  <option value="price-low">Price (Low to High)</option>
                  <option value="price-high">Price (High to Low)</option>
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Course Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-neutral-700 text-neutral-300 hover:border-teal-500 hover:text-teal-400 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course: Course, index: number) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                  {/* Featured Badge */}
                  {course.isFeatured && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-teal-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                  )}

                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {course.title}
                  </CardItem>
                  
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {course.description}
                  </CardItem>

                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      height={1000}
                      width={1000}
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={course.title}
                    />
                  </CardItem>

                  {/* Course Info */}
                  <div className="flex justify-between items-center mt-6">
                    <CardItem
                      translateZ={20}
                      className="text-sm text-neutral-500 dark:text-neutral-400"
                    >
                      Instructor: {course.instructor}
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      className="text-lg font-bold text-teal-400"
                    >
                      ${course.price}
                    </CardItem>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-between items-center mt-6">
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white border border-neutral-600 hover:bg-neutral-800 transition-colors"
                    >
                      Preview
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-teal-600 text-white text-xs font-bold hover:bg-teal-700 transition-colors"
                    >
                      Enroll Now
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🎵</div>
            <h3 className="text-2xl font-bold text-white mb-2">No courses found</h3>
            <p className="text-neutral-400">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default CoursesPage;
