import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import FloatingActions from "./components/FloatingActions";
import Script from "next/script";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Gillionaire Decor | Curtains, Blinds & Curtain Care",
  description:
    "Gillionaire Decor provides custom curtains, Venetian blinds, zebra blinds, vertical blinds, roller blinds, curtain repairs and curtain washing in Accra, Ghana.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-manrope overflow-x-hidden">
        {children}
        <FloatingActions />
        <Script
  src="https://www.googletagmanager.com/gtag/js?id=G-WM9VRRGQ7B"
  strategy="afterInteractive"
/>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WM9VRRGQ7B');
          `}
        </Script>
      </body>
    </html>
  );
}