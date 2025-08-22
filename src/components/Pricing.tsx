"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/moving-border";

const pricingPlans = [
  {
    name: "Starter",
    price: 29,
    description: "Perfect for beginners who want to explore music",
    features: [
      "Access to 3 beginner courses",
      "Basic learning materials",
      "Community forum access",
      "Mobile app access",
      "Email support"
    ],
    popular: false,
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Pro",
    price: 79,
    description: "Best for serious learners and intermediate musicians",
    features: [
      "Access to all 10+ courses",
      "Premium learning materials",
      "1-on-1 instructor sessions (2/month)",
      "Advanced practice tools",
      "Priority support",
      "Certificate of completion",
      "Download offline content"
    ],
    popular: true,
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Master",
    price: 149,
    description: "For professional musicians and music teachers",
    features: [
      "Everything in Pro",
      "Unlimited 1-on-1 sessions",
      "Custom learning path",
      "Master classes access",
      "Industry networking events",
      "Commercial license",
      "Dedicated account manager",
      "Early access to new courses"
    ],
    popular: false,
    color: "from-orange-500 to-red-500"
  }
];

function Pricing() {
  return (
    <div className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Pricing Plans
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Choose Your Learning Journey
          </p>
          <p className="mt-4 max-w-2xl text-xl text-neutral-400 mx-auto">
            Start with our free trial, then choose the plan that fits your musical goals
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-neutral-900 rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? "border-purple-500 shadow-lg shadow-purple-500/20" 
                  : "border-neutral-800 hover:border-neutral-700"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-neutral-400 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-extrabold text-white">${plan.price}</span>
                  <span className="text-neutral-400 ml-2">/month</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-neutral-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className="text-center">
                <Button
                  borderRadius="1rem"
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                      : "bg-neutral-800 text-white hover:bg-neutral-700"
                  }`}
                  borderClassName={`bg-gradient-to-r ${plan.color}`}
                >
                  {plan.popular ? "Start Free Trial" : "Get Started"}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">
              🎁 Special Launch Offer
            </h3>
            <p className="text-neutral-300 mb-6">
              Get 30% off your first 3 months with code <span className="text-teal-400 font-bold">MUSIC30</span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-green-400">7-Day</div>
                <div className="text-neutral-400 text-sm">Free Trial</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400">Cancel</div>
                <div className="text-neutral-400 text-sm">Anytime</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">24/7</div>
                <div className="text-neutral-400 text-sm">Support</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Pricing; 