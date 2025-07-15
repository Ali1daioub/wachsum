"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Train Your AI on Your Data - Accurate and Effortless",
      description: "Upload your knowledge base, FAQs, and company information to train your AI agent.",
      icon: "📊"
    },
    {
      number: "2",
      title: "Set Up Your AI Agent - No Coding Needed",
      description: "Configure your AI's personality, response style, and business rules in minutes.",
      icon: "⚙️"
    },
    {
      number: "3",
      title: "Integrate Seamlessly with Your Tool and Data source",
      description: "Connect with your existing CRM, calendar, and communication tools effortlessly.",
      icon: "🔗"
    },
    {
      number: "4",
      title: "Automate Customer Interactions & Workflows",
      description: "Let your AI handle routine inquiries, support tasks, and workflow automation while your team focuses on high-priority work.",
      icon: "🤖"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Steps */}
          <div>
            <p className="text-blue-400 font-medium mb-2">How it works</p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-12">
              How Wachsum works
            </h2>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-300 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white">
              Get started →
            </Button>
          </div>

          {/* Right Column - Video Demo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-60 bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
                {/* Video Player Interface */}
                <div className="h-full flex flex-col">
                  {/* Video Controls */}
                  <div className="bg-gray-700 px-4 py-2 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-xs text-gray-300">Demo Bot - Demo</span>
                  </div>

                  {/* Video Content Area */}
                  <div className="flex-1 bg-gray-900 flex items-center justify-center relative">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-white text-sm">Welcome to Your Engine</p>
                      <p className="text-gray-400 text-xs mt-1">Click to play demo</p>
                    </div>

                    {/* Progress Bar */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-gray-700 h-1 rounded-full">
                        <div className="bg-blue-500 h-1 rounded-full w-1/3"></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>0:01</span>
                        <span>0:19</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
