"use client";

import VideoIntroduction from "./VideoIntroduction";

export default function VideoIntroductionSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
              See How{" "}
              <span className="font-medium bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Wachsum AI
              </span>
              {" "}Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Watch our 2-minute introduction to discover how AI agents can transform your business operations and customer interactions.
            </p>
          </div>

          {/* Video Introduction */}
          <div className="flex justify-center">
            <div className="relative">
              <VideoIntroduction />
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-500 rounded-full opacity-30 animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Call-to-action below video */}
          <div className="pt-8">
            <p className="text-gray-600 mb-6">Ready to get started?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => window.open('https://app.wachsum.app', '_blank')}
              >
                Start Free Trial
              </button>
              <button
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg font-medium rounded-xl transition-all duration-300"
                onClick={() => window.open('https://api.leadconnectorhq.com/widget/booking/sjHvld0GhtDNlZV8wG3b', '_blank')}
              >
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
