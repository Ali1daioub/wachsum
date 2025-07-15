"use client";

export default function SolutionsBrands() {
  const brands = [
    { name: "Microsoft", industry: "Technology" },
    { name: "Mercedes-Benz", industry: "Automotive" },
    { name: "JPMorgan Chase", industry: "Financial" },
    { name: "Marriott", industry: "Hospitality" },
    { name: "Amazon", industry: "E-commerce" },
    { name: "Pfizer", industry: "Healthcare" },
    { name: "Deutsche Bank", industry: "Banking" },
    { name: "BMW", industry: "Automotive" },
    { name: "Shopify", industry: "E-commerce" },
    { name: "Salesforce", industry: "SaaS" },
    { name: "Tesla", industry: "Automotive" },
    { name: "Goldman Sachs", industry: "Investment" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders Worldwide
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join thousands of companies from startups to Fortune 500 enterprises who trust
            Wachsum.app to automate their customer interactions and drive business growth.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-70 mb-12">
          {brands.map((brand, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gray-100 rounded-lg p-6 h-20 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                <span className="font-bold text-gray-700 text-sm">{brand.name}</span>
              </div>
              <p className="text-xs text-gray-500 mt-2">{brand.industry}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">10M+</div>
              <div className="text-blue-100">Conversations Automated</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">50K+</div>
              <div className="text-blue-100">Businesses Served</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Always Available</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Customer Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Customer Testimonial Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl mb-4">⭐</div>
            <blockquote className="text-gray-600 italic mb-4">
              "Wachsum.app increased our lead conversion by 300% in just 2 months. Game changer for our sales team."
            </blockquote>
            <cite className="text-sm font-semibold text-gray-900">Sarah Chen, VP Sales at TechFlow</cite>
          </div>

          <div className="text-center">
            <div className="text-5xl mb-4">🚀</div>
            <blockquote className="text-gray-600 italic mb-4">
              "24/7 customer support without hiring night staff. Our response times went from hours to seconds."
            </blockquote>
            <cite className="text-sm font-semibold text-gray-900">Marcus Rodriguez, CEO at RetailPro</cite>
          </div>

          <div className="text-center">
            <div className="text-5xl mb-4">💰</div>
            <blockquote className="text-gray-600 italic mb-4">
              "ROI was immediate. We save $80K monthly on support staff while improving customer satisfaction."
            </blockquote>
            <cite className="text-sm font-semibold text-gray-900">Lisa Thompson, COO at FinanceFirst</cite>
          </div>
        </div>
      </div>
    </section>
  );
}
