"use client";

import { Button } from "@/components/ui/button";

export default function SolutionsCTA() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Ready to Scale Your Business with AI?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Whether you need to automate customer support, generate more leads, or streamline operations,
          our AI agents are ready to transform your business today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
            Start Free Trial
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg">
            Schedule Demo
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center max-w-3xl mx-auto">
          <div>
            <div className="text-2xl font-bold text-blue-400 mb-2">Free 14-Day Trial</div>
            <p className="text-gray-300 text-sm">No credit card required</p>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-400 mb-2">Setup in Minutes</div>
            <p className="text-gray-300 text-sm">No technical expertise needed</p>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-400 mb-2">24/7 Support</div>
            <p className="text-gray-300 text-sm">We're here to help you succeed</p>
          </div>
        </div>
      </div>
    </section>
  );
}
