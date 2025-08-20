import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12  items-center">
      <div className="  items-center max-w-6xl max-auto grid gris-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        {/* About Us */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="text-sm leading-6">
            Harmony Music School is dedicated to nurturing musical talents of
            all ages. Our mission is to inspire creativity, confidence, and
            lifelong love for music.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-yellow-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Webinars
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="text-xl font-bold mb-4">Programs</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-yellow-400">
                Piano Lessons
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Guitar Classes
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Vocal Training
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Violin Program
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Music Composition
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-sm">📍 123 Harmony Street, Dhaka, Bangladesh</p>
          <p className="text-sm">📞 +880 123 456 789</p>
          <p className="text-sm">✉️ info@harmonymusic.com</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-yellow-400">
              Instagram
            </a>
            <a href="#" className="hover:text-yellow-400">
              facebook
            </a>
            <a href="#" className="hover:text-yellow-400">
              youtube
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-neutral-700 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Harmony Music School. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
