import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Earen Forge | FullStack DevOps Engineer",
  description: "Designing and building scalable systems, cloud infrastructure, and modern web applications. Expert in Next.js, AWS, Docker, and more.",
  keywords: ["FullStack Developer", "DevOps", "Cloud Engineer", "Next.js", "AWS", "Docker", "Kubernetes"],
  openGraph: {
    title: "Earen Forge | FullStack DevOps Engineer",
    description: "Designing and building scalable systems, cloud infrastructure, and modern web applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Earen Forge | FullStack DevOps Engineer",
    description: "Designing and building scalable systems, cloud infrastructure, and modern web applications.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
