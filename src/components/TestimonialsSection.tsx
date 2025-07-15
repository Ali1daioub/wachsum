"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Wachsum.app transformed our customer support overnight. We went from missing 40% of calls to handling 100% with AI agents that sound incredibly natural. Our response time went from hours to seconds.",
      author: "Sarah Martinez",
      role: "VP of Customer Experience",
      avatar: "SM",
      company: "TechFlow Solutions",
      industry: "SaaS"
    },
    {
      quote: "The ROI is incredible. Our AI agents handle qualification calls 24/7, book meetings automatically, and hand off warm leads to our sales team. We've seen a 300% increase in qualified leads.",
      author: "Michael Chen",
      role: "Head of Sales Operations",
      avatar: "MC",
      company: "CloudVenture Corp",
      industry: "Technology"
    },
    {
      quote: "As a growing e-commerce business, we needed something that could scale with us. Wachsum's AI agents handle customer inquiries, process orders, and even upsell products. It's like having a full customer service team.",
      author: "Jennifer Thompson",
      role: "Operations Director",
      avatar: "JT",
      company: "EcoMarket Plus",
      industry: "E-commerce"
    },
    {
      quote: "The multilingual support is game-changing for our global operations. Our AI agents seamlessly switch between English, Spanish, and French, maintaining the same quality across all languages.",
      author: "Roberto Silva",
      role: "International Business Manager",
      avatar: "RS",
      company: "GlobalReach Consulting",
      industry: "Consulting"
    },
    {
      quote: "Implementation was surprisingly easy. Within 24 hours, we had AI agents answering calls for our dental practice, booking appointments, and handling insurance questions. Patients love the instant responses.",
      author: "Dr. Amanda Foster",
      role: "Practice Owner",
      avatar: "AF",
      company: "Foster Family Dental",
      industry: "Healthcare"
    },
    {
      quote: "The analytics and insights are phenomenal. We can see exactly how AI agents are performing, what customers are asking, and optimize our responses. It's like having a crystal ball for customer behavior.",
      author: "David Park",
      role: "Chief Marketing Officer",
      avatar: "DP",
      company: "InnovateLabs",
      industry: "Marketing"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-400 font-medium mb-2">Testimonials</p>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Why Customers Love Us
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 text-white">
              <CardContent className="p-6">
                <div className="mb-4">
                  <svg className="w-8 h-8 text-blue-400 mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.5 2.5C6.5 1.11929 7.61929 0 9 0C10.3807 0 11.5 1.11929 11.5 2.5V7.5C11.5 8.88071 10.3807 10 9 10C7.61929 10 6.5 8.88071 6.5 7.5V2.5Z"/>
                    <path d="M13.5 2.5C13.5 1.11929 14.6193 0 16 0C17.3807 0 18.5 1.11929 18.5 2.5V7.5C18.5 8.88071 17.3807 10 16 10C14.6193 10 13.5 8.88071 13.5 7.5V2.5Z"/>
                  </svg>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {testimonial.quote}
                  </p>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role} {testimonial.company && `@ ${testimonial.company}`}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
