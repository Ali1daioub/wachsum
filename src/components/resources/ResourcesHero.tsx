"use client";

export default function ResourcesHero() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <div className="space-y-6">
            <h1 className="text-6xl lg:text-7xl font-light text-gray-900 leading-tight tracking-tight">
              Resources for{" "}
              <span className="font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Success
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">
              Discover how leading businesses are transforming their operations with AI agents.
              Get insights, guides, and proven strategies to accelerate your automation journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="font-semibold text-gray-900 mb-2">Implementation Guides</h3>
              <p className="text-gray-600 text-sm">Step-by-step guides to deploy AI agents in your business</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="font-semibold text-gray-900 mb-2">Success Stories</h3>
              <p className="text-gray-600 text-sm">Real results from companies using AI automation</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="font-semibold text-gray-900 mb-2">Best Practices</h3>
              <p className="text-gray-600 text-sm">Expert tips to maximize your AI agent performance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
