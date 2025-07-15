"use client";

import { Button } from "@/components/ui/button";

export default function IntegrationsSection() {
  const integrations = [
    { name: "Salesforce", abbr: "SF", color: "bg-blue-600 text-white", desc: "CRM & Sales" },
    { name: "HubSpot", abbr: "HS", color: "bg-orange-500 text-white", desc: "Marketing Hub" },
    { name: "Microsoft Teams", abbr: "MT", color: "bg-purple-600 text-white", desc: "Communication" },
    { name: "Slack", abbr: "SL", color: "bg-purple-700 text-white", desc: "Team Chat" },
    { name: "Zoom", abbr: "ZM", color: "bg-blue-500 text-white", desc: "Video Calls" },
    { name: "Google Workspace", abbr: "GW", color: "bg-green-600 text-white", desc: "Productivity" },
    { name: "Shopify", abbr: "SH", color: "bg-green-700 text-white", desc: "E-commerce" },
    { name: "Stripe", abbr: "ST", color: "bg-indigo-600 text-white", desc: "Payments" },
    { name: "Mailchimp", abbr: "MC", color: "bg-yellow-500 text-black", desc: "Email Marketing" },
    { name: "Zapier", abbr: "ZP", color: "bg-orange-600 text-white", desc: "Automation" },
    { name: "Twilio", abbr: "TW", color: "bg-red-600 text-white", desc: "Communications API" },
    { name: "WhatsApp Business", abbr: "WA", color: "bg-green-500 text-white", desc: "Messaging" },
    { name: "Facebook Ads", abbr: "FB", color: "bg-blue-700 text-white", desc: "Advertising" },
    { name: "LinkedIn Sales", abbr: "LI", color: "bg-blue-800 text-white", desc: "Social Selling" },
    { name: "WordPress", abbr: "WP", color: "bg-gray-700 text-white", desc: "Website CMS" },
    { name: "GoHighLevel", abbr: "GH", color: "bg-yellow-600 text-black", desc: "All-in-One CRM" },
    { name: "Calendly", abbr: "CA", color: "bg-blue-400 text-white", desc: "Scheduling" },
    { name: "Intercom", abbr: "IC", color: "bg-blue-600 text-white", desc: "Customer Messaging" },
    { name: "Zendesk", abbr: "ZD", color: "bg-green-600 text-white", desc: "Customer Support" },
    { name: "Pipedrive", abbr: "PD", color: "bg-green-500 text-white", desc: "Sales CRM" },
    { name: "ActiveCampaign", abbr: "AC", color: "bg-purple-600 text-white", desc: "Email Automation" },
    { name: "ClickFunnels", abbr: "CF", color: "bg-orange-600 text-white", desc: "Sales Funnels" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-medium mb-2">Integrations</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Connect with 100+ Popular Tools
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Seamlessly integrate with your existing business tools. From CRMs to communication platforms,
            payment processors to marketing automation - we connect with the tools you already love.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className={`${integration.color} rounded-xl p-4 flex flex-col items-center justify-center text-center h-28 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer`}
              title={integration.name}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white bg-opacity-20 mb-2 text-lg font-bold border border-white/20">
                {integration.abbr}
              </div>
              <span className="text-xs font-semibold leading-tight">{integration.name}</span>
              <span className="text-[10px] text-gray-200/80 mt-1">{integration.desc}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-8 mb-12 opacity-60">
          <div className="text-center">
            <div className="text-3xl mb-1">🔗</div>
            <span className="text-xs text-gray-500">API First</span>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-1">⚙️</div>
            <span className="text-xs text-gray-500">Webhooks</span>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-1">🚀</div>
            <span className="text-xs text-gray-500">Real-time</span>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-1">🔒</div>
            <span className="text-xs text-gray-500">Secure</span>
          </div>
        </div>

        <div className="text-center">
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => window.open('/contact', '_blank')}
          >
            View All Integrations →
          </Button>
        </div>
      </div>
    </section>
  );
}
