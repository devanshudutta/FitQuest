import React, { useState } from 'react'

function Faqs() {

    type FAQItem = {
        question: string;
        answer: string;
      };

      const faqs : FAQItem[] = [

        {
            question: "What is FitQuest?",
            answer: "FitQuest is a gamified fitness and habit-tracking app that turns your daily health goals into an adventure.",
          },
          {
            question: "Is FitQuest free to use?",
            answer: "Yes, the core features are free. The entire project is open-source and available on GitHub.",
          },
          {
            question: "Can I use FitQuest without internet?",
            answer: "No, FitQuest requires an internet connection to sync your progress and access challenges. Future Android users can use it offline, but some features may be limited.",
          },
          {
            question: "How do challenges work?",
            answer: "Challenges are daily or weekly tasks tailored to your fitness level. Completing them earns you XP, levels, and badges.",
          },

      ]

      const [openIndex, setOpenIndex] = useState<number | null>(null)

        const toggle = (index: number) => {
            setOpenIndex(openIndex === index ? null : index);
        };

  return (
    <section id="faq" className="bg-black py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-purple-800 mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg shadow-md p-6 cursor-pointer hover:bg-purple-900 text-purple-400 hover:text-white transition-all duration-300"
              onClick={() => toggle(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <span className="text-2xl">{openIndex === index ? "−" : "+"}</span>
              </div>

              <div
                className={`transition-all duration-400 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-40 opacity-100 mt-4 min-h-10" : "max-h-0 min-h-0 opacity-0"
                }`}
              >
              {openIndex === index && (
                <p className="mt-4 text-sm">{faq.answer}</p>
              )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  )
}

export default Faqs