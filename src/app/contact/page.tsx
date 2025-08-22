"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    courseInterest: ""
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        courseInterest: ""
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email Us",
      content: "hello@musicpeace.com",
      description: "Send us an email anytime"
    },
    {
      icon: "📞",
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: "📍",
      title: "Visit Us",
      content: "123 Music Street, Harmony City",
      description: "Our main campus"
    },
    {
      icon: "💬",
      title: "Live Chat",
      content: "Available 24/7",
      description: "Instant support online"
    }
  ];

  const faqs = [
    {
      question: "How do I get started with courses?",
      answer: "Simply sign up for a free account, browse our course catalog, and enroll in any course that interests you. Most courses offer a free preview lesson."
    },
    {
      question: "Can I switch between different courses?",
      answer: "Yes! With our Pro and Master plans, you can access multiple courses and switch between them at any time. Starter plan users can access up to 3 courses."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 7-day money-back guarantee for all paid plans. If you're not satisfied, contact us within 7 days for a full refund."
    },
    {
      question: "Are the instructors qualified?",
      answer: "All our instructors are professional musicians with years of teaching experience and relevant certifications in their respective instruments."
    }
  ];

  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Get in Touch
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Have questions about our courses? Need help getting started? We&apos;re here to help you on your musical journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
            
            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500 rounded-lg">
                <p className="text-green-400 font-semibold">✅ Message sent successfully!</p>
                <p className="text-green-300 text-sm">We&apos;ll get back to you within 24 hours.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-neutral-800 border rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                      errors.name ? "border-red-500" : "border-neutral-700"
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-neutral-800 border rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                      errors.email ? "border-red-500" : "border-neutral-700"
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Course Interest
                </label>
                <select
                  name="courseInterest"
                  value={formData.courseInterest}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="">Select a course (optional)</option>
                  <option value="guitar">Guitar Courses</option>
                  <option value="piano">Piano Courses</option>
                  <option value="drums">Drum Courses</option>
                  <option value="theory">Music Theory</option>
                  <option value="production">Music Production</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-neutral-800 border rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                    errors.subject ? "border-red-500" : "border-neutral-700"
                  }`}
                  placeholder="What is your message about?"
                />
                {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className={`w-full px-4 py-3 bg-neutral-800 border rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none ${
                    errors.message ? "border-red-500" : "border-neutral-700"
                  }`}
                  placeholder="Tell us more about your question or how we can help..."
                />
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>

          {/* Contact Info & FAQ */}
          <div className="space-y-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-2xl">{info.icon}</div>
                    <div>
                      <h3 className="text-white font-semibold">{info.title}</h3>
                      <p className="text-teal-400 font-medium">{info.content}</p>
                      <p className="text-neutral-400 text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details key={index} className="group">
                    <summary className="cursor-pointer text-white font-medium py-2 list-none">
                      <div className="flex justify-between items-center">
                        <span>{faq.question}</span>
                        <span className="text-teal-400 group-open:rotate-45 transition-transform">+</span>
                      </div>
                    </summary>
                    <p className="text-neutral-400 text-sm mt-2 pb-4 border-b border-neutral-800">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
