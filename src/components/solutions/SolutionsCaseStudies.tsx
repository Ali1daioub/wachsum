"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function SolutionsCaseStudies() {
  const caseStudies = [
    {
      industry: "Healthcare",
      company: "MedCare Clinics",
      challenge: "Managing 500+ daily appointment calls",
      solution: "AI agents handle scheduling, reminders, and basic inquiries",
      results: [
        "90% reduction in wait times",
        "300% increase in appointment bookings",
        "85% of calls handled without human intervention",
        "$50K monthly savings on staff costs"
      ],
      icon: "🏥"
    },
    {
      industry: "Real Estate",
      company: "Premier Properties",
      challenge: "Following up with leads quickly",
      solution: "Outbound AI agents qualify leads and schedule viewings",
      results: [
        "400% increase in lead response speed",
        "60% more qualified appointments",
        "45% boost in property sales",
        "25 hours saved per agent weekly"
      ],
      icon: "🏠"
    },
    {
      industry: "E-commerce",
      company: "StyleHub Fashion",
      challenge: "24/7 customer support for global customers",
      solution: "Multilingual AI agents handle orders and returns",
      results: [
        "24/7 support in 12 languages",
        "70% reduction in response time",
        "40% increase in customer satisfaction",
        "200% growth in international sales"
      ],
      icon: "🛒"
    },
    {
      industry: "Financial Services",
      company: "SecureBank Credit Union",
      challenge: "Handling loan inquiries and applications",
      solution: "AI agents pre-qualify applicants and schedule meetings",
      results: [
        "80% faster loan processing",
        "150% increase in applications",
        "95% accuracy in pre-qualification",
        "$75K monthly operational savings"
      ],
      icon: "🏦"
    },
    {
      industry: "Legal Services",
      company: "Justice & Associates",
      challenge: "Initial client consultations and case intake",
      solution: "AI agents screen cases and book consultations",
      results: [
        "500% more consultation requests",
        "60% better case qualification",
        "30% increase in client retention",
        "20 hours saved per attorney weekly"
      ],
      icon: "⚖️"
    },
    {
      industry: "Automotive",
      company: "AutoMax Dealership",
      challenge: "Converting website visitors to showroom visits",
      solution: "AI agents engage visitors and schedule test drives",
      results: [
        "300% increase in test drive bookings",
        "50% higher conversion rate",
        "24/7 lead capture",
        "$2M additional monthly revenue"
      ],
      icon: "🚗"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Real Results from Real Businesses
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how companies across industries have transformed their operations
            and accelerated growth with Wachsum AI agents.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{study.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{study.industry}</h3>
                    <p className="text-sm text-gray-600">{study.company}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                  <p className="text-sm text-gray-600">{study.challenge}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                  <p className="text-sm text-gray-600">{study.solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-start">
                        <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-gray-700 font-medium">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
