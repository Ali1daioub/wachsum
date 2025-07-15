"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PricingPlans() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "Perfect for testing and small projects",
      features: [
        "1 AI Agent",
        "100 minutes/month",
        "Basic integrations",
        "Email support",
        "Standard response time"
      ],
      buttonText: "Get Started Free",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Starter",
      price: "$97",
      period: "/month",
      description: "Ideal for small businesses getting started",
      features: [
        "3 AI Agents",
        "1,000 minutes/month",
        "All integrations",
        "Priority support",
        "Advanced analytics",
        "Custom voice cloning",
        "Lead qualification"
      ],
      buttonText: "Start 14-Day Trial",
      buttonVariant: "default" as const,
      popular: false
    },
    {
      name: "Limitless",
      price: "$297",
      period: "/month",
      description: "Most popular for growing companies",
      features: [
        "10 AI Agents",
        "Unlimited minutes",
        "Premium integrations",
        "24/7 priority support",
        "Advanced AI training",
        "Multi-language support",
        "Custom workflows",
        "API access",
        "White-label options"
      ],
      buttonText: "Start 14-Day Trial",
      buttonVariant: "default" as const,
      popular: true
    },
    {
      name: "Pro",
      price: "$597",
      period: "/month",
      description: "Enterprise solution for large organizations",
      features: [
        "Unlimited AI Agents",
        "Unlimited everything",
        "Custom integrations",
        "Dedicated account manager",
        "Custom AI model training",
        "Advanced security",
        "SLA guarantee",
        "On-premise deployment",
        "Custom contracts"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "default" as const,
      popular: false
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Plan
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            All plans include access to our powerful AI agents for both inbound and outbound automation.
            Scale your customer support and lead generation effortlessly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative border-0 shadow-xl ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                  Most Popular
                </Badge>
              )}

              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.buttonVariant}
                  className={`w-full ${plan.buttonVariant === 'default' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need a custom solution? We offer enterprise plans tailored to your specific requirements.
          </p>
          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
            Contact Our Sales Team
          </Button>
        </div>
      </div>
    </section>
  );
}
