"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function UseCasesSection() {
  const industries = [
    {
      id: "healthcare",
      name: "Healthcare",
      icon: "🏥",
      color: "bg-green-500",
      features: [
        "Schedule appointments, answer patient FAQs, and monitor treatments.",
        "Telehealth check-ins ensuring better patient care."
      ]
    },
    {
      id: "finance",
      name: "Finance & Insurance",
      icon: "💰",
      color: "bg-blue-500",
      features: [
        "Assist with claims, policy inquiries, and general support.",
        "Offer seamless banking and insurance solutions."
      ]
    },
    {
      id: "realestate",
      name: "Real Estate",
      icon: "🏠",
      color: "bg-purple-500",
      features: [
        "Handle property inquiries and schedule viewings.",
        "Automate realtor office interactions with AI."
      ]
    },
    {
      id: "hospitality",
      name: "Hospitality & Restaurants",
      icon: "🍽️",
      color: "bg-pink-500",
      features: [
        "Manage reservations, provide menu details, and handle bookings.",
        "Improve customer experience with AI-powered automation."
      ]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-medium mb-2">Use Cases</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            From Pain Points to Solutions. One Platform
          </h2>
        </div>

        <Tabs defaultValue="inbound" className="mb-16">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger
              value="inbound"
              className="bg-blue-600 text-white data-[state=active]:bg-blue-700"
              id="inbound-tab"
            >
              Inbound Support
            </TabsTrigger>
            <TabsTrigger
              value="outbound"
              className="text-blue-600 data-[state=active]:bg-blue-50"
              id="outbound-tab"
            >
              Outbound Engagement
            </TabsTrigger>
          </TabsList>

          <TabsContent value="inbound">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry) => (
                <Card key={industry.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 ${industry.color} rounded-lg flex items-center justify-center text-white text-xl mb-4`}>
                      {industry.icon}
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {industry.name}
                    </h3>

                    <ul className="space-y-2 text-sm text-gray-600">
                      {industry.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2 mt-0.5">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="outbound">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry) => (
                <Card key={industry.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 ${industry.color} rounded-lg flex items-center justify-center text-white text-xl mb-4`}>
                      {industry.icon}
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {industry.name}
                    </h3>

                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-0.5">•</span>
                        Proactive outreach and follow-ups
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-0.5">•</span>
                        Lead qualification and nurturing
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
