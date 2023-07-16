import "./globals.css";
import type { Metadata } from "next";
import MainTemplate from "@/components/layout/template/Main";

export const metadata: Metadata = {
  title: "Best Sellers - NY Times",
  description: "The best sellers list from NY Times",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <MainTemplate appName={`New York Times\nBest Sellers`}>
        {children}
      </MainTemplate>
    </html>
  );
}
