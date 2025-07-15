"use client";

import { Button } from "@/components/ui/button";

export default function ResourcesCTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-600 to-blue-800">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of businesses already using Wachsum.app to automate customer interactions,
            generate leads, and scale their operations effortlessly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
              onClick={() => window.open('https://app.wachsum.app', '_blank')}
            >
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 text-lg"
              onClick={() => window.open('https://api.leadconnectorhq.com/widget/booking/sjHvld0GhtDNlZV8wG3b', '_blank')}
            >
              Book a Demo
            </Button>
          </div>
          <p className="text-blue-200 text-sm mt-4">
            No credit card required • Setup in under 5 minutes
          </p>
        </div>
      </div>
    </section>
  );
}
