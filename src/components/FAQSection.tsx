"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function FAQSection() {
  const faqs = [
    {
      question: "What is Wachsum AI?",
      answer: "Wachsum AI is an advanced AI Phone Agent Platform that automate customer conversations through AI-powered phone calls and chat, reducing wait times and improving business communications."
    },
    {
      question: "How does Wachsum work?",
      answer: "Wachsum works by training AI agents on your data, setting up automated workflows, integrating with your existing tools, and handling customer interactions 24/7."
    },
    {
      question: "Can Wachsum AI make and receive phone calls?",
      answer: "Yes, Wachsum AI can both make outbound calls and receive inbound calls, providing seamless voice communication with your customers."
    },
    {
      question: "Does Wachsum support multiple languages?",
      answer: "Yes, Wachsum supports over 50 languages and can seamlessly handle conversations in multiple languages with natural speech recognition."
    },
    {
      question: "Can Wachsum AI integrate with my existing CRM?",
      answer: "Absolutely! Wachsum easily integrates with popular CRMs like HubSpot, Salesforce, Zoho, and many others without requiring complex coding."
    },
    {
      question: "Is the AI customizable to match my brand?",
      answer: "Yes, the AI can be fully customized to match your brand voice, personality, and specific business requirements."
    },
    {
      question: "Does Wachsum also offer chat along with AI phone calls?",
      answer: "Yes, Wachsum provides both AI phone calls and chat capabilities, offering a unified communication experience across multiple channels."
    },
    {
      question: "How does the Wachsum ROI calculator work?",
      answer: "The ROI calculator helps you understand potential savings by comparing human agent costs with AI agent costs based on your call volume and current expenses."
    },
    {
      question: "How is Wachsum AI priced?",
      answer: "Wachsum offers flexible pay-as-you-go pricing, so you only pay for what you use, making it cost-effective for businesses of all sizes."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Content */}
          <div>
            <p className="text-blue-600 font-medium mb-2">FAQ's</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Frequently asked questions
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Explore our frequently asked questions to learn more about Wachsum AI's features,
              security, integration capabilities, and more
            </p>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Join Our Discord
            </Button>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-lg border border-gray-200 px-6"
                >
                  <AccordionTrigger className="text-left font-medium text-gray-900 hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
