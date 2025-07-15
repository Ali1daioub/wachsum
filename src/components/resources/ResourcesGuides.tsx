"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ResourcesGuides() {
  const guides = [
    {
      title: "AI Customer Service Implementation Checklist",
      description: "Complete 47-point checklist to deploy AI customer service successfully",
      type: "PDF Download",
      pages: "12 pages",
      downloads: "2,847 downloads",
      featured: true
    },
    {
      title: "ROI Calculator: AI vs Human Agents",
      description: "Interactive calculator to determine your cost savings and ROI timeline",
      type: "Excel Tool",
      pages: "Interactive",
      downloads: "1,923 downloads",
      featured: true
    },
    {
      title: "AI Agent Training Templates",
      description: "Ready-to-use conversation flows and training scenarios for 15 industries",
      type: "Template Pack",
      pages: "25 templates",
      downloads: "3,156 downloads",
      featured: false
    },
    {
      title: "CRM Integration Guide",
      description: "Step-by-step integration instructions for HubSpot, Salesforce, and Zoho",
      type: "Technical Guide",
      pages: "18 pages",
      downloads: "892 downloads",
      featured: false
    }
  ];

  const webinars = [
    {
      title: "Mastering AI Lead Qualification",
      date: "Jan 25, 2024",
      duration: "45 min",
      presenter: "Sarah Chen, VP of AI Strategy",
      attendees: "1,200+ attendees",
      status: "On Demand"
    },
    {
      title: "Building High-Converting AI Sales Funnels",
      date: "Feb 8, 2024",
      duration: "60 min",
      presenter: "Marcus Rodriguez, Sales Automation Expert",
      attendees: "850+ attendees",
      status: "On Demand"
    },
    {
      title: "AI Customer Service Best Practices",
      date: "Feb 22, 2024",
      duration: "40 min",
      presenter: "Lisa Thompson, Customer Success Director",
      attendees: "Live Session",
      status: "Register"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Downloadable Resources */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Free Resources & Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Download our proven templates, calculators, and guides to accelerate your AI implementation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {guides.map((guide, index) => (
              <Card key={index} className={`group border-0 shadow-sm hover:shadow-xl transition-all duration-500 bg-white rounded-2xl overflow-hidden ${guide.featured ? 'ring-2 ring-blue-200' : ''}`}>
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <Badge className={`${guide.featured ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
                      {guide.type}
                    </Badge>
                    {guide.featured && (
                      <Badge variant="outline" className="border-orange-200 text-orange-600">
                        Popular
                      </Badge>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {guide.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {guide.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <span>{guide.pages}</span>
                    <span>{guide.downloads}</span>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-300">
                    Download Free
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Webinars & Events */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Expert Webinars
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Learn from industry experts and see real implementations in action
            </p>
          </div>

          <div className="space-y-6">
            {webinars.map((webinar, index) => (
              <Card key={index} className="group border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-4 gap-6 items-center">
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge className={`${webinar.status === 'Register' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
                          {webinar.status}
                        </Badge>
                        <span className="text-sm text-gray-500">{webinar.date}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {webinar.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{webinar.presenter}</p>
                    </div>

                    <div className="space-y-1 text-sm text-gray-500">
                      <div>{webinar.duration}</div>
                      <div>{webinar.attendees}</div>
                    </div>

                    <div className="flex justify-end">
                      <Button variant={webinar.status === 'Register' ? 'default' : 'outline'}
                              className={webinar.status === 'Register' ? 'bg-green-600 hover:bg-green-700 text-white' : ''}>
                        {webinar.status === 'Register' ? 'Register Now' : 'Watch Recording'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
