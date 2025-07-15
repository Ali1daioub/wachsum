"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function PricingFAQ() {
  const faqs = [
    {
      question: "Can I start with the free plan?",
      answer: "Yes! Our free plan includes 1 AI agent and 100 minutes per month, perfect for testing our platform and seeing how Wachsum.app can benefit your business."
    },
    {
      question: "What happens when I exceed my plan limits?",
      answer: "You'll receive notifications as you approach your limits. You can either upgrade your plan or purchase additional minutes/agents as needed. We never cut off service unexpectedly."
    },
    {
      question: "Can I change plans anytime?",
      answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle, and we'll prorate any differences."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee on all paid plans. If you're not satisfied, we'll provide a full refund within the first 30 days."
    },
    {
      question: "What integrations are included?",
      answer: "All paid plans include integrations with popular CRMs (HubSpot, Salesforce, Zoho), calendars (Google, Outlook), and communication tools (Slack, Teams). Enterprise plans include custom integrations."
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees! All plans are ready to use immediately. Our team provides free onboarding support to help you get started quickly."
    },
    {
      question: "Can I get a custom quote for my enterprise?",
      answer: "Yes! For organizations with specific requirements, we offer custom enterprise solutions with dedicated support, custom integrations, and flexible pricing. Contact our sales team for a personalized quote."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about our pricing and plans.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-50 rounded-lg border border-gray-200 px-6"
              >
                <AccordionTrigger className="text-left font-medium text-gray-900 hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
