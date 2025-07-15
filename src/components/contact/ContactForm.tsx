"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { analytics } from "@/lib/analytics";

export default function ContactForm() {
  // Initialize analytics
  useEffect(() => {
    analytics.init();
  }, []);

  return (
    <Card className="shadow-xl border-0">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-900">Get Started Today</CardTitle>
        <p className="text-gray-600">Fill out the form below and our AI experts will contact you within 24 hours.</p>
      </CardHeader>
      <CardContent>
        {/* GoHighLevel Contact Form */}
        <div className="relative w-full min-h-[431px] rounded-lg overflow-hidden bg-white">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/BNZKnH3JiP1PqJyYwRxo"
            style={{width:"100%",height:"431px",border:"none",borderRadius:"3px"}}
            id="inline-contact-BNZKnH3JiP1PqJyYwRxo"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Form 3"
            data-height="431"
            data-layout-iframe-id="inline-contact-BNZKnH3JiP1PqJyYwRxo"
            data-form-id="BNZKnH3JiP1PqJyYwRxo"
            title="Form 3"
          />
        </div>

        <p className="text-xs text-gray-500 text-center mt-4">
          By submitting this form, you agree to our terms of service and privacy policy.
          We'll only use your information to contact you about Wachsum.app services.
        </p>
      </CardContent>
    </Card>
  );
}
