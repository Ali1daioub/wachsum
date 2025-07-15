"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function SolutionsOverview() {
  const solutions = [
    {
      icon: "💼",
      title: "Lead Generation",
      description: "AI agents proactively reach out to prospects, qualify leads, and book appointments automatically. Increase your sales pipeline without manual effort.",
      features: [
        "Automated prospect outreach",
        "Lead qualification scoring",
        "Appointment scheduling",
        "Follow-up sequences",
        "CRM integration"
      ],
      cta: "Learn More"
    },
    {
      icon: "🎧",
      title: "Customer Support",
      description: "24/7 AI-powered support that handles inquiries instantly, escalates complex issues, and ensures no customer is left waiting.",
      features: [
        "24/7 instant responses",
        "Multi-language support",
        "Ticket routing",
        "Knowledge base integration",
        "Sentiment analysis"
      ],
      cta: "Learn More"
    },
    {
      icon: "👥",
      title: "Human Resources",
      description: "Streamline HR processes with AI agents that handle employee inquiries, assist with onboarding, and manage routine HR tasks.",
      features: [
        "Employee self-service",
        "Onboarding automation",
        "Policy Q&A",
        "Leave management",
        "Internal communications"
      ],
      cta: "Learn More"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Discover what you can do with <span className="text-blue-600">Wachsum</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Enhance engagement and reduce response time by 50% to 90% or more, by automating
            responses to common customer inquiries with 24/7 availability.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>

                <ul className="text-left space-y-2 mb-8">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                  {solution.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Transform Your Business Communication
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Upgrade your communication strategy with AI agents that work around the clock
            to support your customers and generate new business opportunities.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100">
            Get Started Now
          </Button>
        </div>
      </div>
    </section>
  );
}
