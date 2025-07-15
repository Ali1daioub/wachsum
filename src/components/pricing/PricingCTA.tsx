"use client";

import { Button } from "@/components/ui/button";

export default function PricingCTA() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Join thousands of businesses already using Wachsum.app to automate their customer interactions
          and generate more leads. Start your free trial today - no credit card required.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
            Start Free Trial
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
            Schedule Demo
          </Button>
        </div>

        <p className="text-blue-200 text-sm mt-6">
          Free 14-day trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
}
