import Header from "@/components/common/Header";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/common/Footer";

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
      <body
        className={`min-h-screen flex flex-col justify-between bg-slate-950 text-white px-4`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
