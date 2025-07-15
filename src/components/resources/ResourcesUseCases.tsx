"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function ResourcesUseCases() {
  const useCases = [
    {
      icon: "🏥",
      industry: "Healthcare",
      title: "Patient Appointment Automation",
      problem: "Managing 500+ daily appointment calls with limited staff",
      solution: "AI agents handle scheduling, confirmations, and rescheduling automatically",
      metrics: {
        efficiency: "90% reduction in wait times",
        cost: "$50K monthly savings",
        satisfaction: "95% patient satisfaction"
      },
      implementation: [
        "Connect AI agent to appointment booking system",
        "Train on common scheduling scenarios and policies",
        "Set up automatic confirmation and reminder flows",
        "Integrate with patient records for personalized service"
      ]
    },
    {
      icon: "🏠",
      industry: "Real Estate",
      title: "Lead Qualification & Follow-up",
      problem: "Missing hot leads due to delayed response times",
      solution: "Instant lead qualification and automated follow-up sequences",
      metrics: {
        response: "400% faster lead response",
        conversion: "60% more qualified appointments",
        revenue: "45% increase in property sales"
      },
      implementation: [
        "Set up lead scoring criteria and qualification questions",
        "Create automated follow-up sequences for different lead types",
        "Integrate with CRM for seamless handoff to agents",
        "Configure appointment scheduling with viewing preferences"
      ]
    },
    {
      icon: "💰",
      industry: "Financial Services",
      title: "Loan Application Processing",
      problem: "Slow loan application process affecting customer experience",
      solution: "AI-powered pre-qualification and application assistance",
      metrics: {
        processing: "80% faster loan processing",
        applications: "150% increase in applications",
        accuracy: "95% pre-qualification accuracy"
      },
      implementation: [
        "Build qualification workflows based on lending criteria",
        "Integrate with credit checking and verification systems",
        "Set up document collection and validation processes",
        "Create automated status updates and communication flows"
      ]
    },
    {
      icon: "🛒",
      industry: "E-commerce",
      title: "Customer Support Automation",
      problem: "24/7 support needed for global customer base",
      solution: "Multilingual AI support for orders, returns, and inquiries",
      metrics: {
        availability: "24/7 support in 12 languages",
        response: "70% faster response times",
        satisfaction: "40% increase in CSAT scores"
      },
      implementation: [
        "Train AI on product catalog and common issues",
        "Set up order tracking and return processing workflows",
        "Configure multilingual support for global markets",
        "Integrate with inventory and shipping systems"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Implementation Blueprints
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Detailed use cases showing exactly how to implement AI agents in your industry
          </p>
        </div>

        <div className="space-y-12">
          {useCases.map((useCase, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white rounded-3xl overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Left Column - Content */}
                  <div className="p-12 space-y-8">
                    <div className="flex items-center gap-4">
                      <span className="text-4xl">{useCase.icon}</span>
                      <div>
                        <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
                          {useCase.industry}
                        </span>
                        <h3 className="text-2xl font-semibold text-gray-900 mt-1">
                          {useCase.title}
                        </h3>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                        <p className="text-gray-600">{useCase.problem}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                        <p className="text-gray-600">{useCase.solution}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Implementation Steps</h4>
                        <ol className="space-y-2">
                          {useCase.implementation.map((step, stepIndex) => (
                            <li key={stepIndex} className="flex items-start gap-3">
                              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                                {stepIndex + 1}
                              </span>
                              <span className="text-gray-600 text-sm">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Metrics */}
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-12 flex items-center">
                    <div className="w-full">
                      <h4 className="font-semibold text-gray-900 mb-8 text-xl">Results Achieved</h4>
                      <div className="space-y-6">
                        {Object.entries(useCase.metrics).map(([key, value], metricIndex) => (
                          <div key={metricIndex} className="bg-white rounded-2xl p-6 shadow-sm">
                            <div className="text-3xl font-bold text-blue-600 mb-2">
                              {value.split(' ')[0]}
                            </div>
                            <div className="text-gray-600 text-sm">
                              {value.split(' ').slice(1).join(' ')}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
