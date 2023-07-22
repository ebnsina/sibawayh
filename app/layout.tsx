import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sibawayh",
  description: "class notes and videos for learning arabic",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`min-h-screen bg-slate-900 text-white pt-6`}>
        {children}
      </body>
    </html>
  );
}
