import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wachsum.app - AI Phone Calls & Chat Automation",
  description: "No More Missed Calls. No More Long Waits. Just Instant AI Support. Automate customer interactions with AI-powered phone calls and chat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <head>
        {/* GoHighLevel Form and Calendar Scripts */}
        <script src="https://link.msgsndr.com/js/form_embed.js" async></script>
        <script src="https://api.leadconnectorhq.com/js/form_embed.js" async></script>
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
