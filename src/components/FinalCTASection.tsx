"use client";

import { Button } from "@/components/ui/button";

export default function FinalCTASection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Your Business, Our AI, Tailored Solutions Await!
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Harness the power of AI built to fit your unique needs. From automating conversations
              to streamlining workflows, we help you deliver smarter, faster customer interactions.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                onClick={() => window.open('https://app.wachsum.app', '_blank')}
              >
                Get started →
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3"
                onClick={() => window.open('https://api.leadconnectorhq.com/widget/booking/sjHvld0GhtDNlZV8wG3b', '_blank')}
              >
                Book Demo
              </Button>
            </div>
          </div>

          {/* Right Column - Robot Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Robot Illustration */}
              <div className="w-80 h-80 relative">
                {/* Main Robot Body */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Speech Bubble */}
                    <div className="absolute -top-16 -left-8 bg-white rounded-2xl p-4 shadow-lg border border-gray-200">
                      <p className="text-sm text-gray-700">💬 ...</p>
                      <div className="absolute bottom-0 left-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white transform translate-y-full"></div>
                    </div>

                    {/* Robot Head */}
                    <div className="w-32 h-32 bg-white rounded-3xl border-4 border-gray-200 shadow-xl relative mb-4">
                      {/* Eyes */}
                      <div className="absolute top-8 left-6 w-4 h-4 bg-blue-500 rounded-full"></div>
                      <div className="absolute top-8 right-6 w-4 h-4 bg-blue-500 rounded-full"></div>

                      {/* Mouth */}
                      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-gray-300 rounded-full"></div>
                    </div>

                    {/* Robot Body */}
                    <div className="w-40 h-40 bg-blue-100 rounded-2xl border-4 border-gray-200 shadow-xl relative">
                      {/* Control Panel */}
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-1"></div>
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      </div>

                      {/* Gear Icon */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                      </div>

                      {/* Arms */}
                      <div className="absolute top-1/2 -left-6 w-12 h-4 bg-blue-100 border-2 border-gray-200 rounded-full transform -translate-y-1/2"></div>
                      <div className="absolute top-1/2 -right-6 w-12 h-4 bg-blue-100 border-2 border-gray-200 rounded-full transform -translate-y-1/2"></div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-16 right-16 w-6 h-6 bg-blue-400 rounded-full animate-bounce"></div>
                <div className="absolute bottom-20 left-12 w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
                <div className="absolute top-32 left-8 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
