import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "How do I post a task?",
    answer:
      "Simply click the 'Post a Task' button, fill out the form with details about your project, set your budget, and submit. You'll start receiving bids from freelancers shortly after.",
  },
  {
    question: "Are the freelancers vetted?",
    answer:
      "Yes! All freelancers go through our verification process to ensure quality and reliability. You can also view their ratings, reviews, and portfolios before hiring.",
  },
  {
    question: "What payment methods are supported?",
    answer:
      "We support multiple payment options including credit/debit cards, PayPal, and major cryptocurrencies. Secure payments processed directly through our platform.",
  },
  {
    question: "Can I cancel or edit my task after posting?",
    answer:
      "Yes, you can edit your task at any time. Cancellation policies vary depending on whether a freelancer has been hired or not. Please review our terms for more details.",
  },
  {
    question: "How are disputes resolved?",
    answer:
      "Our platform has a built-in dispute resolution system. If an issue arises between client and freelancer, both parties can submit evidence and our team will mediate a fair outcome.",
  },
];

const FaqSection = () => {
  const sectionRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".faq-item"),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-white text-gray-900 dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-white transition-colors duration-500"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Everything you need to know before getting started. Can’t find what you’re looking for?
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item bg-gray-100 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-indigo-500/10 transition-shadow duration-300"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-lg md:text-xl font-semibold">
                  {faq.question}
                </span>
                <span
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-indigo-500 dark:text-indigo-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                }`}
                aria-hidden={openIndex !== index}
              >
                <div className="px-6 text-gray-700 dark:text-gray-300">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
