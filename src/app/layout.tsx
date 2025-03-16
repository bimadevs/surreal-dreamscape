import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: '%s | Surreal Dreamscape',
    default: 'Surreal Dreamscape | Portofolio Digital',
  },
  description: "Portofolio surreal yang menampilkan karya-karya kreatif dan imajinatif dalam dunia digital.",
  keywords: ["portofolio", "digital", "surreal", "dreamscape", "kreator", "developer", "web", "desain"],
  authors: [{ name: "Surreal Dreamscape" }],
  creator: "Surreal Dreamscape",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://surrealdreamscape.com",
    title: "Surreal Dreamscape | Portofolio Digital",
    description: "Portofolio surreal yang menampilkan karya-karya kreatif dan imajinatif dalam dunia digital.",
    siteName: "Surreal Dreamscape",
  },
  twitter: {
    card: "summary_large_image",
    title: "Surreal Dreamscape | Portofolio Digital",
    description: "Portofolio surreal yang menampilkan karya-karya kreatif dan imajinatif dalam dunia digital.",
    creator: "@surrealdreamscape",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
