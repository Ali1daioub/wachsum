"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ResourcesContent() {
  const resources = [
    {
      category: "Implementation Guide",
      title: "How to Deploy AI Customer Service in 7 Days",
      description: "A comprehensive guide to implementing AI-powered customer service that reduces response times by 90% and increases satisfaction scores.",
      readTime: "15 min read",
      badge: "Popular",
      link: "#",
      image: "📘"
    },
    {
      category: "Case Study",
      title: "How TechCorp Increased Lead Conversion by 400%",
      description: "Discover how TechCorp used AI agents for outbound lead qualification, resulting in 400% more qualified appointments and $2M additional revenue.",
      readTime: "8 min read",
      badge: "New",
      link: "#",
      image: "📈"
    },
    {
      category: "Best Practices",
      title: "AI Agent Training: Complete Optimization Guide",
      description: "Learn expert techniques to train your AI agents for better accuracy, context understanding, and customer satisfaction.",
      readTime: "12 min read",
      badge: "",
      link: "#",
      image: "🎯"
    },
    {
      category: "ROI Calculator",
      title: "AI Automation ROI Calculator & Analysis",
      description: "Calculate your potential savings and ROI from implementing AI agents with our comprehensive calculator and industry benchmarks.",
      readTime: "5 min read",
      badge: "Tool",
      link: "#",
      image: "🧮"
    },
    {
      category: "Industry Report",
      title: "State of AI Customer Service 2024",
      description: "Latest trends, statistics, and predictions for AI in customer service based on data from 10,000+ businesses worldwide.",
      readTime: "20 min read",
      badge: "Report",
      link: "#",
      image: "📊"
    },
    {
      category: "Integration Guide",
      title: "CRM Integration: Connect AI to Your Sales Pipeline",
      description: "Step-by-step instructions to integrate AI agents with HubSpot, Salesforce, and other popular CRM systems for seamless lead management.",
      readTime: "10 min read",
      badge: "",
      link: "#",
      image: "🔗"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Knowledge Base
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Everything you need to successfully implement and optimize AI agents in your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <Card key={index} className="group border-0 shadow-sm hover:shadow-xl transition-all duration-500 bg-white rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  {/* Image placeholder */}
                  <div className="h-48 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                    <span className="text-6xl opacity-80">{resource.image}</span>
                  </div>

                  {/* Badge */}
                  {resource.badge && (
                    <Badge className="absolute top-4 right-4 bg-blue-600 text-white">
                      {resource.badge}
                    </Badge>
                  )}
                </div>

                <div className="p-8 space-y-4">
                  <div className="space-y-3">
                    <Badge variant="outline" className="text-xs font-medium text-blue-600 border-blue-200">
                      {resource.category}
                    </Badge>

                    <h3 className="text-xl font-semibold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                      {resource.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed text-sm">
                      {resource.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-500 font-medium">
                      {resource.readTime}
                    </span>

                    <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0 h-auto font-medium">
                      Read More →
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            View All Resources
          </Button>
        </div>
      </div>
    </section>
  );
}
