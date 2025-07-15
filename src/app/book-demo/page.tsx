import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Book a Demo - Wachsum.app AI Automation Consultation",
  description: "Schedule a 15-minute personalized demo to see how Wachsum.app can transform your business with AI automation.",
  keywords: "book demo, AI consultation, business automation demo, wachsum.app demo",
  openGraph: {
    title: "Book Your Free AI Demo - Wachsum.app",
    description: "Get a personalized demo of our AI automation platform and see results in 15 minutes.",
    type: "website",
  },
};

export default function BookDemoPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Book Your Free AI Demo
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              See exactly how Wachsum.app can automate your customer interactions and boost your business.
              Our AI experts will show you a personalized demo based on your industry and needs.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-blue-100">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>15-minute personalized demo</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>No sales pressure</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span>Instant setup guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Booking Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
                  Choose Your Preferred Time
                </h2>

                {/* GoHighLevel Calendar Embed */}
                <div className="w-full">
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/booking/sjHvld0GhtDNlZV8wG3b"
                    style={{width: "100%", height: "600px", border: "none", borderRadius: "8px"}}
                    scrolling="no"
                    id="sjHvld0GhtDNlZV8wG3b_demo_page"
                    title="Schedule Your Demo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              What to Expect in Your Demo
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Needs Assessment</h3>
                <p className="text-gray-600 text-sm">We'll understand your business challenges and automation goals</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Live Demo</h3>
                <p className="text-gray-600 text-sm">See AI agents in action with real examples from your industry</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">ROI Analysis</h3>
                <p className="text-gray-600 text-sm">Calculate your potential savings and implementation timeline</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
