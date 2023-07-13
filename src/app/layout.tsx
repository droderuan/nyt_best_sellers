import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MainTemplate from "@/components/layout/template/Main";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <MainTemplate appName={`New York Times\nBest Sellers`}></MainTemplate>
    </html>
  );
}
