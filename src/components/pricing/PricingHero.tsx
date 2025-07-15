"use client";

import { Button } from "@/components/ui/button";

export default function PricingHero() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Choose the perfect plan to scale your business with AI agents.
          From startups to enterprises, we have a solution that fits your needs.
        </p>

        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
          Start Free Trial
        </Button>
      </div>
    </section>
  );
}
