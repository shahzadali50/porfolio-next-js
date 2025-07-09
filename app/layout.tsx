import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "antd/dist/reset.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shahzad Ali",
  description:
    "Shahzad Ali is a passionate Full Stack Developer specializing in Laravel, Vue.js, and Next.js. Explore projects, skills, experience, and contact for freelance or remote opportunities. Building secure, scalable, and user-friendly web applications.",
  keywords: [
    "Shahzad Ali",
    "Full Stack Developer",
    "Laravel Developer",
    "Vue.js Developer",
    "Next.js Portfolio",
    "Web Developer",
    "Freelance Developer",
    "Remote Developer",
    "JavaScript",
    "React",
    "Frontend",
    "Backend",
    "Software Engineer",
    "Pakistan Developer",
    "Portfolio",
  ],
  authors: [{ name: "Shahzad Ali", url: "https://github.com/shahzadali50" }],
  creator: "Shahzad Ali",
  openGraph: {
    title: "Shahzad Ali",
    description:
      "Explore the portfolio of Shahzad Ali, a Full Stack Developer with expertise in Laravel, Vue.js, and Next.js. View projects, skills, and contact for collaboration.",
    url: "https://your-portfolio-domain.com",
    siteName: "Shahzad Ali Portfolio",
    images: [
      {
        url: "https://your-portfolio-domain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shahzad Ali Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahzad Ali | Full Stack Developer Portfolio",
    description:
      "Portfolio of Shahzad Ali, Full Stack Developer (Laravel, Vue.js, Next.js). Explore projects, skills, and contact details.",
    images: ["https://your-portfolio-domain.com/og-image.jpg"],
    creator: "@yourtwitterhandle",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 
      <head>
        <meta name="description" content="Shahzad Ali – Full Stack Developer skilled in Laravel, Vue.js & Next.js. Explore projects, skills, and contact for freelance or remote work." />
         {/* Favicon */}
         <link rel="icon" href="/assets/images/projects/oxo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
