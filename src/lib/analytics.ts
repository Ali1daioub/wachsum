// Analytics utility for tracking form conversions and user interactions

export interface AnalyticsEvent {
  event: string;
  form_name?: string;
  form_location?: string;
  lead_source?: string;
  conversion_type?: string;
  user_data?: {
    email?: string;
    company?: string;
    company_size?: string;
    interest?: string;
  };
  metadata?: Record<string, unknown>;
}

interface StoredAnalyticsEvent extends AnalyticsEvent {
  timestamp: string;
  page_url: string;
  user_agent: string;
  session_id: string;
}

interface AnalyticsData {
  events: StoredAnalyticsEvent[];
}

interface WindowWithAnalytics extends Window {
  gtag?: (...args: unknown[]) => void;
  fbq?: (...args: unknown[]) => void;
}

declare const window: WindowWithAnalytics;

class Analytics {
  private static instance: Analytics;
  private isInitialized = false;

  static getInstance(): Analytics {
    if (!Analytics.instance) {
      Analytics.instance = new Analytics();
    }
    return Analytics.instance;
  }

  init() {
    if (this.isInitialized || typeof window === 'undefined') return;

    // Initialize analytics tracking
    this.isInitialized = true;
    console.log('📊 Analytics initialized');
  }

  track(event: AnalyticsEvent) {
    if (typeof window === 'undefined') return;

    try {
      // Log to console for development
      console.log('📊 Analytics Event:', event);

      // Send to Google Analytics if available
      if (window.gtag) {
        window.gtag('event', event.event, {
          event_category: 'Form',
          event_label: event.form_name || event.form_location,
          custom_map: {
            form_name: event.form_name,
            form_location: event.form_location,
            lead_source: event.lead_source,
            conversion_type: event.conversion_type,
          }
        });
      }

      // Send to Facebook Pixel if available
      if (window.fbq) {
        window.fbq('track', event.conversion_type || 'Lead', {
          content_name: event.form_name,
          content_category: event.form_location,
        });
      }

      // Store in localStorage for internal tracking
      const storageKey = 'wachsum_analytics';
      const existingData = localStorage.getItem(storageKey);
      const analytics: AnalyticsData = existingData ? JSON.parse(existingData) : { events: [] };

      const storedEvent: StoredAnalyticsEvent = {
        ...event,
        timestamp: new Date().toISOString(),
        page_url: window.location.href,
        user_agent: navigator.userAgent,
        session_id: this.getSessionId(),
      };

      analytics.events.push(storedEvent);

      // Keep only last 100 events
      if (analytics.events.length > 100) {
        analytics.events = analytics.events.slice(-100);
      }

      localStorage.setItem(storageKey, JSON.stringify(analytics));

    } catch (error) {
      console.error('Analytics tracking error:', error);
    }
  }

  // Track form interactions
  trackFormStart(formName: string, formLocation: string) {
    this.track({
      event: 'form_start',
      form_name: formName,
      form_location: formLocation,
      lead_source: 'Website',
      conversion_type: 'Form_Interaction'
    });
  }

  trackFormSubmission(formName: string, formLocation: string, userData?: Record<string, unknown>) {
    this.track({
      event: 'form_submit',
      form_name: formName,
      form_location: formLocation,
      lead_source: 'Website',
      conversion_type: 'Lead_Generation',
      user_data: userData,
      metadata: {
        form_completion_time: this.getFormCompletionTime(formName)
      }
    });
  }

  trackFormSuccess(formName: string, formLocation: string, userData?: Record<string, unknown>) {
    this.track({
      event: 'form_success',
      form_name: formName,
      form_location: formLocation,
      lead_source: 'Website',
      conversion_type: 'Qualified_Lead',
      user_data: userData
    });
  }

  trackButtonClick(buttonName: string, location: string, destination?: string) {
    this.track({
      event: 'button_click',
      form_name: buttonName,
      form_location: location,
      conversion_type: 'User_Engagement',
      metadata: {
        destination: destination
      }
    });
  }

  trackCalendarOpen(source: string) {
    this.track({
      event: 'calendar_open',
      form_name: 'Demo_Calendar',
      form_location: source,
      lead_source: 'Website',
      conversion_type: 'Demo_Interest'
    });
  }

  private getSessionId(): string {
    let sessionId = sessionStorage.getItem('wachsum_session_id');
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('wachsum_session_id', sessionId);
    }
    return sessionId;
  }

  private getFormCompletionTime(formName: string): number {
    const startTime = sessionStorage.getItem(`form_start_${formName}`);
    if (startTime) {
      const completionTime = Date.now() - parseInt(startTime);
      sessionStorage.removeItem(`form_start_${formName}`);
      return completionTime;
    }
    return 0;
  }

  // Get analytics data for reporting
  getAnalyticsData(): AnalyticsData | null {
    if (typeof window === 'undefined') return null;

    const storageKey = 'wachsum_analytics';
    const data = localStorage.getItem(storageKey);
    return data ? JSON.parse(data) : null;
  }

  // Generate conversion report
  getConversionReport() {
    const data = this.getAnalyticsData();
    if (!data) return null;

    const events = data.events || [];
    const formStarts = events.filter((e: StoredAnalyticsEvent) => e.event === 'form_start');
    const formSubmits = events.filter((e: StoredAnalyticsEvent) => e.event === 'form_submit');
    const formSuccesses = events.filter((e: StoredAnalyticsEvent) => e.event === 'form_success');
    const calendarOpens = events.filter((e: StoredAnalyticsEvent) => e.event === 'calendar_open');

    return {
      total_form_starts: formStarts.length,
      total_form_submissions: formSubmits.length,
      total_successful_submissions: formSuccesses.length,
      total_calendar_opens: calendarOpens.length,
      conversion_rate: formStarts.length > 0 ? (formSubmits.length / formStarts.length * 100).toFixed(2) : '0',
      success_rate: formSubmits.length > 0 ? (formSuccesses.length / formSubmits.length * 100).toFixed(2) : '0',
      forms_by_location: this.groupBy(formSubmits, 'form_location'),
      events_by_day: this.groupEventsByDay(events)
    };
  }

  private groupBy(array: StoredAnalyticsEvent[], key: keyof StoredAnalyticsEvent): Record<string, number> {
    return array.reduce((result: Record<string, number>, item: StoredAnalyticsEvent) => {
      const group = String(item[key] || 'unknown');
      if (!result[group]) result[group] = 0;
      result[group]++;
      return result;
    }, {});
  }

  private groupEventsByDay(events: StoredAnalyticsEvent[]): Record<string, number> {
    return events.reduce((result: Record<string, number>, event: StoredAnalyticsEvent) => {
      const day = new Date(event.timestamp).toISOString().split('T')[0];
      if (!result[day]) result[day] = 0;
      result[day]++;
      return result;
    }, {});
  }
}

export const analytics = Analytics.getInstance();
