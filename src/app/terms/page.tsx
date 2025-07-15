import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions - Wachsum.app",
  description: "Wachsum.app Terms of Service and Conditions of Use - Legal terms governing the use of our AI communication platform.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>
            <p className="text-gray-600 mb-8">
              <strong>Effective Date:</strong> January 1, 2024 | <strong>Last Updated:</strong> January 1, 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing and using Wachsum.app ("Service"), you accept and agree to be bound by these Terms & Conditions.
                If you do not agree to these terms, please do not use our Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-600 mb-4">
                Wachsum.app provides AI-powered communication services including automated phone calls,
                chat responses, lead generation, and customer support automation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Obtain necessary consents for call recording and AI processing</li>
                <li>Use the Service only for lawful business purposes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Prohibited Uses</h2>
              <p className="text-gray-600 mb-4">You may not use our Service for:</p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Illegal activities or spam communications</li>
                <li>Harassment, abuse, or fraudulent activities</li>
                <li>Circumventing security measures</li>
                <li>Reverse engineering or copying our technology</li>
                <li>Violating privacy laws or regulations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Payment Terms</h2>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Subscription fees are billed in advance</li>
                <li>All payments are non-refundable unless required by law</li>
                <li>Price changes require 30 days advance notice</li>
                <li>Overdue accounts may result in service suspension</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
              <p className="text-gray-600 mb-4">
                All content, features, and functionality of the Service are owned by Wachsum.app and are protected by
                international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data and Privacy</h2>
              <p className="text-gray-600 mb-4">
                Your privacy is important to us. Please review our Privacy Policy to understand how we collect,
                use, and protect your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Service Availability</h2>
              <p className="text-gray-600 mb-4">
                We strive to maintain 99.9% uptime but do not guarantee uninterrupted service.
                Scheduled maintenance will be announced in advance.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                To the maximum extent permitted by law, Wachsum.app shall not be liable for any indirect,
                incidental, special, or consequential damages arising from your use of the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
              <p className="text-gray-600 mb-4">
                Either party may terminate this agreement with 30 days written notice.
                We may suspend or terminate access immediately for violations of these terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify these terms at any time.
                Continued use of the Service constitutes acceptance of modified terms.
              </p>
            </section>

            <section className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-600 mb-4">
                For questions about these Terms & Conditions, please contact us:
              </p>
              <div className="text-gray-600">
                <p><strong>Email:</strong> legal@wachsum.app</p>
                <p><strong>Support:</strong> support@wachsum.app</p>
                <p><strong>Phone:</strong> +1 (864) 778-2414</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
