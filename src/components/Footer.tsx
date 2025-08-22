"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const socialLinks = [
    {
      name: "Instagram",
      icon: "📷",
      url: "#",
      hover: "hover:text-pink-400"
    },
    {
      name: "Facebook", 
      icon: "📘",
      url: "#",
      hover: "hover:text-blue-400"
    },
    {
      name: "YouTube",
      icon: "📺", 
      url: "#",
      hover: "hover:text-red-400"
    },
    {
      name: "Twitter",
      icon: "🐦",
      url: "#", 
      hover: "hover:text-sky-400"
    },
    {
      name: "TikTok",
      icon: "🎵",
      url: "#",
      hover: "hover:text-purple-400"
    }
  ];

  return (
    <footer className="bg-gradient-to-t from-neutral-950 to-black text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center mb-4">
              <div className="text-3xl mr-3">🎼</div>
              <h3 className="text-2xl font-bold text-white">Music Peace</h3>
            </div>
            <p className="text-sm leading-6 mb-6">
              Empowering musicians worldwide with comprehensive online courses. 
              Learn from industry experts and transform your musical journey with us.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className={`text-2xl transition-colors duration-300 ${social.hover}`}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-teal-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-teal-400 transition-colors">
                  All Courses
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#pricing" className="hover:text-teal-400 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-teal-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Courses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Popular Courses</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Guitar Fundamentals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Piano for Beginners
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Music Theory Basics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Electronic Production
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Advanced Drumming
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Stay Updated</h3>
            <p className="text-sm mb-4">
              Get the latest music tips, course updates, and exclusive offers.
            </p>
            
            {subscribed ? (
              <div className="bg-green-500/10 border border-green-500 rounded-lg p-4">
                <p className="text-green-400 text-sm font-semibold">✅ Subscribed!</p>
                <p className="text-green-300 text-xs">Welcome to our community!</p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                  required
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors text-sm"
                >
                  Subscribe
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-neutral-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-neutral-500">
              © {new Date().getFullYear()} Music Peace. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-teal-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                Cookie Policy
              </a>
            </div>

            {/* Contact Info */}
            <div className="text-sm text-neutral-500">
              📧 hello@musicpeace.com | 📞 +1 (555) 123-4567
            </div>
          </div>

          {/* Achievement Bar */}
          <div className="mt-8 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-lg p-4 border border-neutral-800">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-teal-400">10K+</div>
                <div className="text-xs text-neutral-400">Happy Students</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400">50+</div>
                <div className="text-xs text-neutral-400">Expert Instructors</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">100+</div>
                <div className="text-xs text-neutral-400">Courses Available</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400">98%</div>
                <div className="text-xs text-neutral-400">Success Rate</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
