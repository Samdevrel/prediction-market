import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prediction Markets | @samdevrel",
  description: "Trade on future events with prediction markets. Crypto, politics, AI markets available.",
  keywords: ["prediction market", "polymarket", "kalshi", "augur", "forecasting", "betting"],
  authors: [{ name: "Sam", url: "https://x.com/samdevrel" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
