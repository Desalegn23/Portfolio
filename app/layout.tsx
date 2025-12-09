import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Desalegn Mamo - AI & Automation Engineer Ethiopia | n8n, Make, Zapier Expert",
  description: "Expert AI & Automation Engineer based in Ethiopia specializing in n8n, Make.com, Zapier, and intelligent workflow automation. Professional QA engineer with expertise in Python, OpenAI, and no-code solutions.",
  keywords: [
    // Geographic Keywords
    "AI Engineer Ethiopia",
    "Automation Engineer Ethiopia",
    "Addis Ababa AI Engineer",
    "Ethiopian Automation Specialist",
    // Tool-Specific Keywords
    "n8n expert",
    "n8n automation specialist",
    "Make.com expert",
    "Make automation developer",
    "Zapier expert Ethiopia",
    "Zapier automation specialist",
    // AI & Automation Keywords
    "AI automation engineer",
    "workflow automation specialist",
    "no-code automation expert",
    "low-code automation developer",
    "intelligent automation",
    "AI workflow automation",
    // Technical Skills
    "Python automation engineer",
    "OpenAI integration specialist",
    "LangChain developer",
    "RAG systems developer",
    "AI agent development",
    // QA Keywords
    "QA automation engineer",
    "QA engineer Ethiopia",
    "test automation specialist",
    "Selenium automation",
    "Playwright testing",
    // General Professional
    "freelance automation engineer",
    "remote AI engineer",
    "automation consultant Ethiopia",
  ],
  authors: [{ name: "Desalegn Mamo", url: "https://github.com/Desalegn23" }],
  creator: "Desalegn Mamo",
  publisher: "Desalegn Mamo",
  metadataBase: new URL('https://desalegn-mamo.ethsyncsolutions.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Desalegn Mamo - AI & Automation Engineer | n8n, Make, Zapier Expert Ethiopia",
    description: "Expert AI & Automation Engineer in Ethiopia specializing in n8n, Make.com, Zapier automation, Python development, and intelligent AI workflows. Professional QA engineer with proven expertise.",
    url: 'https://desalegn-mamo.ethsyncsolutions.com',
    siteName: 'Desalegn Mamo Portfolio',
    locale: 'en_US',
    type: 'profile',
    images: [
      {
        url: '/profile-photo.jpg',
        width: 1200,
        height: 630,
        alt: 'Desalegn Mamo - AI & Automation Engineer Ethiopia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Desalegn Mamo - AI & Automation Engineer Ethiopia",
    description: "Expert in n8n, Make.com, Zapier automation | AI workflows | Python | QA Engineering",
    images: ['/profile-photo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
  other: {
    'geo.region': 'ET',
    'geo.placename': 'Addis Ababa',
    'geo.position': '9.03;38.74',
  },
};

// JSON-LD Structured Data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Desalegn Mamo',
  jobTitle: 'AI & Automation Engineer',
  description: 'Expert AI & Automation Engineer specializing in n8n, Make.com, Zapier, and intelligent workflow automation solutions',
  url: 'https://desalegn-mamo.ethsyncsolutions.com',
  image: 'https://desalegn-mamo.ethsyncsolutions.com/profile-photo.jpg',
  email: 'destamamo123@gmail.com',
  telephone: '+251921755965',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Addis Ababa',
    addressCountry: 'Ethiopia',
  },
  sameAs: [
    'https://www.linkedin.com/in/desalegn-mamo/',
    'https://github.com/Desalegn23',
  ],
  knowsAbout: [
    'n8n automation',
    'Make.com automation',
    'Zapier automation',
    'AI workflow automation',
    'Python automation',
    'OpenAI integration',
    'LangChain',
    'RAG systems',
    'QA automation',
    'No-code automation',
    'Intelligent agents',
    'Workflow orchestration',
  ],
  alumniOf: {
    '@type': 'Organization',
    name: 'Addis Ababa Science and Technology University',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance',
  },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
