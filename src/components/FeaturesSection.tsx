"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Multi-Channel Feature */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            One AI Agent,{" "}
            <span className="text-blue-600">Multiple Channels</span>,{" "}
            <br />
            Unified Experience.
          </h2>

          {/* Demo Interface */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs">IG</span>
                </div>
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs">M</span>
                </div>
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs">📞</span>
                </div>
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs">WA</span>
                </div>
                <div className="w-12 h-12 bg-gray-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs">🌐</span>
                </div>
              </div>

              <div className="bg-blue-600 rounded-lg p-4 text-white">
                <p className="text-sm mb-2">🎧 Listening...</p>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                  <div>
                    <p className="text-xs">Hi! This is DentalCare.</p>
                    <p className="text-xs">We hope your appointment went well!</p>
                  </div>
                </div>
                <div className="mt-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xs">📞</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* CRM Integration Card */}
          <Card className="p-8 bg-white border-0 shadow-lg">
            <CardContent className="p-0">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Effortless Setup, Seamless CRM Integration
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Forget complex tech. Easily integrate with your existing CRM—HubSpot, Zoho, Salesforce, and more—to streamline workflows and enhance customer engagement from day one.
                  </p>
                  <Button variant="link" className="p-0 text-blue-600">
                    Learn More →
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Multi-Language Card */}
          <div className="bg-blue-900 rounded-lg p-8 text-white">
            <h3 className="text-xl font-semibold mb-6">
              Smart, Scalable, and Seamlessly Connected
            </h3>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-medium mb-2">AI That Speaks Your Customer's Language</h4>
                <p className="text-blue-100 text-sm">
                  Engage users in over 50 languages while seamlessly mixing text, voice, and images to create a dynamic user experience.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">A Voice That Listens, Learns, and Adapts</h4>
                <p className="text-blue-100 text-sm">
                  Experience natural conversations as our AI voice agent learns and adapts over time—accurately processing diverse accents, dialects, and speech patterns.
                </p>
              </div>
            </div>

            {/* Language Flags */}
            <div className="grid grid-cols-8 gap-2 mb-6">
              {['🇩🇪', '🇪🇸', '🇮🇳', '🇸🇦', '🇬🇧', '🇨🇳', '🇮🇹', '🇷🇴', '🇩🇰', '🇹🇭', '🇮🇩', '🇷🇺', '🇯🇵', '🇰🇷', '🇮🇹', '🇵🇹'].map((flag, index) => (
                <div key={index} className="w-8 h-6 bg-white rounded flex items-center justify-center text-sm">
                  {flag}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Instant Setup, Infinite Reach</h4>
                <p className="text-blue-100 text-sm">
                  Launch quickly and scale effortlessly with AI Phone Agents. Provide 24/7 AI Phone calls and support across all channels.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Plug, Play, and Power Up Your Workflow</h4>
                <p className="text-blue-100 text-sm">
                  Integrate effortlessly with your favorite services—connect with Google Calendar, GoHighLevel, HubSpot, Zoho, and more without any complex coding.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
            Get started for free →
          </Button>
        </div>
      </div>
    </section>
  );
}
