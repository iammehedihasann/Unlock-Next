"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    id: 1,
    question: "What skill level are your courses designed for?",
    answer: "Our courses cater to all skill levels, from complete beginners to advanced musicians. Each course clearly indicates its difficulty level, and we provide learning paths to help you progress systematically."
  },
  {
    id: 2,
    question: "Do I need to own an instrument to take these courses?",
    answer: "While having access to an instrument enhances your learning experience, many of our theory courses can be taken without one. For instrument-specific courses, we provide guidance on purchasing or renting instruments."
  },
  {
    id: 3,
    question: "How long do courses typically take to complete?",
    answer: "Course duration varies from 4-12 weeks depending on complexity and depth. However, you can learn at your own pace with lifetime access to course materials, allowing you to take as much time as you need."
  },
  {
    id: 4,
    question: "Are there live sessions with instructors?",
    answer: "Yes! Pro and Master plan subscribers get access to live Q&A sessions, workshops, and one-on-one mentoring sessions with our expert instructors. These are scheduled regularly throughout the month."
  },
  {
    id: 5,
    question: "Can I get a certificate after completing a course?",
    answer: "Absolutely! Upon successful completion of any course, you'll receive a digital certificate that you can share on social media, add to your resume, or use for continuing education credits."
  },
  {
    id: 6,
    question: "What if I don't have time to practice regularly?",
    answer: "We understand busy schedules! Our courses are designed with flexible learning in mind. You can pause, rewind, and revisit lessons anytime. We also provide practice tips for busy learners."
  },
  {
    id: 7,
    question: "Do you offer refunds if I'm not satisfied?",
    answer: "Yes, we offer a 7-day money-back guarantee for all paid subscriptions. If you're not completely satisfied with your experience, contact us within 7 days for a full refund."
  },
  {
    id: 8,
    question: "Can I access courses on mobile devices?",
    answer: "Definitely! Our platform is fully responsive and works seamlessly on all devices. We also have dedicated mobile apps for iOS and Android for the best learning experience on the go."
  }
];

function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="py-20 bg-neutral-950">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase mb-2">
            FAQ
          </h2>
          <p className="text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl mb-4">
            Frequently Asked Questions
          </p>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Find answers to common questions about our music courses and platform
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-inset"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {item.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openItems.includes(item.id) ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <svg
                      className="w-6 h-6 text-teal-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </motion.div>
                </div>
              </button>
              
              <AnimatePresence>
                {openItems.includes(item.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5">
                      <p className="text-neutral-300 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-2xl p-8 border border-neutral-800">
            <h3 className="text-xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-neutral-400 mb-6">
              Can&apos;t find the answer you&apos;re looking for? Our support team is here to help you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 rounded-lg bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors">
                Contact Support
              </button>
              <button className="px-6 py-3 rounded-lg border border-neutral-600 text-white font-semibold hover:bg-neutral-800 transition-colors">
                Schedule a Call
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default FAQ; 