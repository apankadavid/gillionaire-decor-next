import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingActions from "./components/FloatingActions";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}