#!/usr/bin/env node

/**
 * GoHighLevel Webhook Integration Tester
 * Tests the wachsum.app webhook integration with various scenarios
 */

const WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/IowlOUxFMMMWkzdLsX8Q/webhook-trigger/1829f903-e4aa-45e9-8532-7e2036b31b5b";

const testScenarios = [
  {
    name: "Basic Lead Capture Test",
    data: {
      event_type: "form_submission",
      source: "wachsum.app",
      form_name: "Hero Section Lead Capture",
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@example.com",
      phone: "(555) 123-4567",
      company: "Tech Startup Inc",
      interest: "Lead Generation & Qualification",
      message: "Interested in automating our customer support with AI agents",
      page_url: "https://wachsum.app",
      timestamp: new Date().toISOString(),
      lead_source: "Website",
      lead_quality: "High"
    }
  },
  {
    name: "Demo Booking Test",
    data: {
      event_type: "demo_booking",
      source: "wachsum.app",
      form_name: "Demo Booking Request",
      first_name: "Sarah",
      last_name: "Johnson",
      email: "sarah.johnson@company.com",
      phone: "(555) 987-6543",
      company: "E-commerce Solutions LLC",
      company_size: "51-200 employees",
      interest: "Customer Support Automation",
      preferred_time: "Next week - afternoon",
      message: "We need AI chat for 24/7 customer support across multiple languages",
      page_url: "https://wachsum.app/book-demo",
      timestamp: new Date().toISOString(),
      lead_source: "Demo Booking",
      lead_quality: "Very High",
      tags: ["demo_requested", "high_priority", "enterprise"]
    }
  },
  {
    name: "Contact Form Test",
    data: {
      event_type: "contact_form",
      source: "wachsum.app",
      form_name: "Contact Page Form",
      first_name: "Michael",
      last_name: "Chen",
      email: "m.chen@business.com",
      phone: "(555) 456-7890",
      company: "Healthcare Solutions Group",
      company_size: "201-1000 employees",
      interest: "Custom AI Solution",
      message: "Looking for AI phone agents to handle patient appointment scheduling and reminders for our medical practice network",
      page_url: "https://wachsum.app/contact",
      timestamp: new Date().toISOString(),
      lead_source: "Contact Form",
      lead_quality: "High",
      industry: "Healthcare",
      budget_range: "Enterprise",
      urgency: "Medium"
    }
  },
  {
    name: "Pricing Page Interest Test",
    data: {
      event_type: "pricing_interest",
      source: "wachsum.app",
      form_name: "Pricing Page Inquiry",
      first_name: "Lisa",
      last_name: "Rodriguez",
      email: "lisa.r@restaurant.com",
      phone: "(555) 321-9876",
      company: "Fine Dining Restaurant Chain",
      company_size: "11-50 employees",
      interest: "Appointment Scheduling",
      pricing_tier: "Limitless Plan - $297/month",
      message: "Need reservation management and customer service automation for 5 restaurant locations",
      page_url: "https://wachsum.app/pricing",
      timestamp: new Date().toISOString(),
      lead_source: "Pricing Page",
      lead_quality: "Medium",
      industry: "Hospitality",
      ready_to_purchase: "Within 30 days"
    }
  }
];

async function sendWebhook(scenario) {
  try {
    console.log(`\n🧪 Testing: ${scenario.name}`);
    console.log(`📤 Sending data:`, JSON.stringify(scenario.data, null, 2));

    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Wachsum.app-Webhook-Tester/1.0'
      },
      body: JSON.stringify(scenario.data)
    });

    console.log(`✅ Response Status: ${response.status}`);

    if (response.ok) {
      console.log(`🎉 SUCCESS: ${scenario.name} webhook sent successfully!`);
      const responseText = await response.text();
      if (responseText) {
        console.log(`📥 Response:`, responseText);
      }
    } else {
      console.log(`❌ FAILED: ${scenario.name} - Status: ${response.status}`);
      const errorText = await response.text();
      console.log(`Error Response:`, errorText);
    }

  } catch (error) {
    console.log(`💥 ERROR in ${scenario.name}:`, error.message);
  }
}

async function runAllTests() {
  console.log('🚀 Starting GoHighLevel Webhook Integration Tests');
  console.log('=' .repeat(60));
  console.log(`📍 Webhook URL: ${WEBHOOK_URL}`);

  for (const scenario of testScenarios) {
    await sendWebhook(scenario);
    // Wait 2 seconds between tests
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  console.log('\n' + '=' .repeat(60));
  console.log('🏁 All webhook tests completed!');
  console.log('\n📋 Next Steps:');
  console.log('1. Check your GoHighLevel account for new contacts');
  console.log('2. Verify workflows are triggering correctly');
  console.log('3. Test email/SMS automations are working');
  console.log('4. Review lead scoring and tagging');
  console.log('\n🎯 Your wachsum.app integration is ready for business!');
}

// Run the tests
runAllTests().catch(console.error);
