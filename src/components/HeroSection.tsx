"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { analytics } from "@/lib/analytics";

export default function HeroSection() {
  // Initialize analytics
  useEffect(() => {
    analytics.init();
  }, []);

  const handleBookDemo = () => {
    analytics.trackButtonClick('Book Demo', 'Homepage Hero Section', 'Calendar Widget');
    analytics.trackCalendarOpen('Hero CTA Button');
    window.open('https://api.leadconnectorhq.com/widget/booking/sjHvld0GhtDNlZV8wG3b', '_blank');
  };

  const handleStartTrial = () => {
    analytics.trackButtonClick('Start Free Trial', 'Homepage Hero Section', 'App Registration');
    window.open('https://app.wachsum.app', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-200 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-light text-gray-900 leading-tight tracking-tight">
                Transform Your Business with{" "}
                <span className="font-medium bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Intelligent AI
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl font-light">
                Automate customer conversations, qualify leads instantly, and scale your business 24/7
                with AI agents that understand, respond, and deliver results.
              </p>
            </div>



            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={handleStartTrial}
              >
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-medium rounded-xl transition-all duration-300"
                onClick={handleBookDemo}
              >
                Book Demo
              </Button>
            </div>

            {/* GoHighLevel Embedded Form */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100/50 max-w-2xl w-full">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Your Free Demo</h3>
                <p className="text-base text-gray-600 lg:text-[1px]"></p>
              </div>

              {/* GHL Form Container */}
              <div className="relative w-full h-[431px] sm:h-[450px] rounded-xl overflow-hidden bg-white shadow-inner">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/BNZKnH3JiP1PqJyYwRxo"
                  style={{width:"100%",height:"100%",border:"none",borderRadius:"3px"}}
                  id="inline-BNZKnH3JiP1PqJyYwRxo"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Form 3"
                  data-height="431"
                  data-layout-iframe-id="inline-BNZKnH3JiP1PqJyYwRxo"
                  data-form-id="BNZKnH3JiP1PqJyYwRxo"
                  title="Form 3"
                />
              </div>

              <p className="text-sm text-gray-500 text-center mt-4">
                15-minute personalized demo • No commitment required
              </p>
            </div>

            <div className="flex items-center gap-6 pt-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Setup in 5 minutes</span>
              </div>
            </div>
          </div>

          {/* Right Column - Elegant Device Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="transform transition-all duration-700 group-hover:scale-105 group-hover:rotate-1">
                <div className="w-80 h-[480px] bg-gradient-to-b from-gray-900 to-black rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    {/* Status Bar */}
                    <div className="bg-black text-white text-xs px-6 py-2 flex justify-between items-center rounded-t-[2.5rem]">
                      <span className="font-medium">9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="flex gap-1">
                          <div className="w-4 h-2 bg-white rounded-sm opacity-60"></div>
                          <div className="w-4 h-2 bg-white rounded-sm opacity-80"></div>
                          <div className="w-4 h-2 bg-white rounded-sm"></div>
                        </div>
                        <div className="w-6 h-3 border border-white rounded-sm">
                          <div className="w-4 h-2 bg-white rounded-sm m-0.5"></div>
                        </div>
                      </div>
                    </div>

                    <div className="p-8 bg-gradient-to-b from-blue-50 to-white h-full">
                      <div className="flex justify-center mb-8">
                        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
                          </div>
                        </div>
                      </div>

                      <div className="text-center space-y-6">
                        <h3 className="text-2xl font-semibold text-gray-900">AI Assistant</h3>

                        <div className="space-y-4">
                          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                            <p className="text-gray-600 text-sm">Hello! I'm your AI assistant. How can I help you today?</p>
                          </div>

                          <div className="flex justify-end">
                            <div className="bg-blue-600 rounded-2xl p-4 shadow-sm max-w-xs">
                              <p className="text-white text-sm">I'd like to book a consultation</p>
                            </div>
                          </div>

                          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                            <p className="text-gray-600 text-sm">Perfect! I can schedule that for you right now...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-white text-sm font-bold">✓</span>
              </div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-500">
                <span className="text-white text-sm font-bold">📞</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
