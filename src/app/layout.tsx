import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: "400",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://www.x-medai.com"),

  title: {
    default: "X-Medai | High-Converting Websites & Digital Agency",
    template: "%s | X-Medai",
  },

  description:
    "X-Medai is a digital agency building high-converting websites, modern UI/UX, and powerful online solutions to help businesses grow faster.",

  keywords: [
    "X-Medai",
    "web design",
    "web development",
    "digital agency",
    "UI UX design",
    "landing pages",
    "branding",
    "website development",
  ],

  authors: [{ name: "X-Medai" }],
  creator: "X-Medai",

  openGraph: {
    title: "X-Medai | Websites That Actually Convert",
    description:
      "We build modern, fast, and conversion-focused websites that help your business grow.",
    url: "https://www.x-medai.com",
    siteName: "X-Medai",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "X-Medai Digital Agency",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "X-Medai | Websites That Convert",
    description: "High-performance websites built for growth.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.jpg",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
