"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, HeadphonesIcon } from "lucide-react";

export default function ContactInfo() {
  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      detail: "support@wachsum.app",
      description: "Send us an email anytime!",
      action: () => {
        window.location.href = "mailto:support@wachsum.app";
      }
    },
    {
      icon: "📞",
      title: "Phone",
      detail: "+1 (864) 778-2414",
      description: "Call us Mon-Fri from 8am to 5pm EST",
      action: () => {
        window.location.href = "tel:+18647782414";
      }
    },
    {
      icon: "💬",
      title: "Live Chat",
      detail: "Available 24/7",
      description: "Chat with our AI agents instantly",
      action: () => window.open('https://api.leadconnectorhq.com/widget/booking/sjHvld0GhtDNlZV8wG3b', '_blank')
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM PST" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM PST" },
    { day: "Sunday", hours: "Closed (Emergency support available)" }
  ];

  const quickActions = [
    {
      icon: Calendar,
      title: "Book a Demo",
      description: "15-minute personalized demo",
      action: () => window.open('https://api.leadconnectorhq.com/widget/booking/sjHvld0GhtDNlZV8wG3b', '_blank')
    },
    {
      icon: HeadphonesIcon,
      title: "Technical Support",
      description: "Existing customer support",
      action: () => window.open('https://app.wachsum.app/support', '_blank')
    }
  ];

  return (
    <div className="space-y-6">
      {/* Contact Methods */}
      <Card className="shadow-lg border-0">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h3>
          <div className="space-y-4">
            {contactInfo.map((method, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 text-2xl">
                  <span>{method.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900">{method.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{method.description}</p>
                  <p className="font-medium text-blue-600">{method.detail}</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={method.action}
                >
                  {method.title === "Email" && "Send Email"}
                  {method.title === "Phone" && "Call Now"}
                  {method.title === "Live Chat" && "Start Chat"}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Business Hours */}
      <Card className="shadow-lg border-0">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-blue-600" />
            <h3 className="text-xl font-bold text-gray-900">Business Hours</h3>
          </div>
          <div className="space-y-3">
            {businessHours.map((schedule, index) => (
              <div key={index} className="flex justify-between items-center py-2">
                <span className="font-medium text-gray-700">{schedule.day}</span>
                <span className="text-gray-600">{schedule.hours}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
            <p className="text-sm text-green-800">
              <strong>Emergency Support:</strong> Critical issues are handled 24/7 for all customers.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="shadow-lg border-0">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            {quickActions.map((action, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full justify-start p-4 h-auto border-gray-200 hover:bg-blue-50 hover:border-blue-300"
                onClick={action.action}
              >
                <div className="flex items-center gap-3">
                  <action.icon className="w-5 h-5 text-blue-600" />
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">{action.title}</div>
                    <div className="text-sm text-gray-600">{action.description}</div>
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Response Time Guarantee */}
      <Card className="shadow-lg border-0 bg-gradient-to-r from-blue-50 to-purple-50">
        <CardContent className="p-6 text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Our Promise</h3>
          <p className="text-gray-700 mb-4">
            We respond to all inquiries within <strong>24 hours</strong> on business days.
            Urgent technical issues are addressed within <strong>2 hours</strong>.
          </p>
          <div className="flex justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Fast response</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Expert guidance</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Personalized solutions</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
