import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Khalid Masood Khan - Strategic HR & Operations Leader | AI-Driven HR Transformation",
  description: "Strategic HR and Operations Leader with over 22 years of progressive experience driving Human Resource Transformation, Organizational Excellence, and Corporate Governance across diversified industries.",
  keywords: "HR Leader, Operations Management, AI-Driven HR, Organizational Excellence, Strategic HR, Human Resources, Pakistan, Lahore, Khalid Masood Khan",
  authors: [{ name: "Khalid Masood Khan" }],
  openGraph: {
    title: "Khalid Masood Khan - Strategic HR & Operations Leader",
    description: "Strategic HR and Operations Leader with over 22 years of progressive experience driving Human Resource Transformation, Organizational Excellence, and AI-Driven HR Transformation.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/khalid-masood-khan.png",
        width: 500,
        height: 600,
        alt: "Khalid Masood Khan - Strategic HR & Operations Leader",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khalid Masood Khan - Strategic HR & Operations Leader",
    description: "Strategic HR and Operations Leader with over 22 years of progressive experience driving Human Resource Transformation, Organizational Excellence, and AI-Driven HR Transformation.",
    images: ["/khalid-masood-khan.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Khalid Masood Khan",
              "jobTitle": "Strategic HR & Operations Leader",
              "description": "Strategic HR and Operations Leader with over 22 years of progressive experience driving Human Resource Transformation, Organizational Excellence, and Corporate Governance across diversified industries.",
              "email": "khalid_masood79@hotmail.com",
              "telephone": ["+92 300 8454448", "+92 345 4021637"],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lahore",
                "addressCountry": "Pakistan"
              },
              "url": "https://khalidmasoodkhan.com",
              "sameAs": [
                "https://www.linkedin.com/in/KhalidKhanManager"
              ],
              "knowsAbout": [
                "Strategic Human Resource Management",
                "Organizational Development",
                "Change Management",
                "Talent Acquisition",
                "AI Integration in HR",
                "Corporate Governance",
                "Operational Excellence"
              ],
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "Master of Business Administration (HRM Specialization)",
                  "credentialCategory": "degree",
                  "recognizedBy": {
                    "@type": "Organization",
                    "name": "University of Sargodha"
                  },
                  "dateCreated": "2015"
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "AI for Professionals",
                  "credentialCategory": "certificate",
                  "recognizedBy": {
                    "@type": "Organization",
                    "name": "LUMS"
                  },
                  "dateCreated": "2025"
                }
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Master Group of Industries",
                "jobTitle": "Senior Manager – Operational Excellence"
              },
              "alumniOf": [
                {
                  "@type": "Organization",
                  "name": "University of Sargodha"
                },
                {
                  "@type": "Organization",
                  "name": "University of the Punjab"
                }
              ]
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}