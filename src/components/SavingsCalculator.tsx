"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SavingsCalculator() {
  const [callsPerDay, setCallsPerDay] = useState(50);
  const [avgDuration, setAvgDuration] = useState(4);
  const [costPerHour, setCostPerHour] = useState(16);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const humanAgentCost = (callsPerDay * avgDuration * costPerHour * 30) / 60;
  const aiAgentCost = 360;
  const totalSavings = humanAgentCost - aiAgentCost;

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-medium mb-2">Try it yourself</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Unlock Huge Savings with Wachsum
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Find out how much you're overpaying for human agent support—and how much you can save with AI.
            Simply enter the details below and our calculator will instantly show your total savings per day
            and per month when you switch to AI-driven support. With pay-as-you-go pricing, you only pay for
            what you use—cutting costs while boosting efficiency. Try it now!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Column - Inputs */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      1. Number of calls received per day
                    </label>
                    <Input
                      type="number"
                      value={callsPerDay}
                      onChange={(e) => setCallsPerDay(Number(e.target.value))}
                      className="text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      2. Average call duration in minutes
                    </label>
                    <Input
                      type="number"
                      value={avgDuration}
                      onChange={(e) => setAvgDuration(Number(e.target.value))}
                      className="text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      3. Cost per human agent per hour ($)
                    </label>
                    <Input
                      type="number"
                      value={costPerHour}
                      onChange={(e) => setCostPerHour(Number(e.target.value))}
                      className="text-lg"
                    />
                  </div>
                </div>

                {/* Right Column - Savings */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Your Savings</h3>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Human Agent Cost:</span>
                      <span className="text-lg font-semibold">
                        ${mounted ? humanAgentCost.toFixed(2) : "1,067.00"}/month
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">AI Agent Cost:</span>
                      <span className="text-lg font-semibold text-blue-600">
                        ${mounted ? aiAgentCost.toFixed(2) : "360.00"}/month
                      </span>
                    </div>

                    <hr />

                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-gray-900">Total Savings:</span>
                      <span className="text-2xl font-bold text-green-600">
                        ${mounted ? totalSavings.toFixed(2) : "707.00"}/month
                      </span>
                    </div>
                  </div>

                  <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white">
                    Try now for free →
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
