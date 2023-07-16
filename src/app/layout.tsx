import "./globals.css";
import type { Metadata } from "next";
import MainTemplate from "@/components/layout/template/Main";
import AppConfig from "@/hooks/appConfig";

export const metadata: Metadata = {
  title: "Best Sellers - NY Times",
  description: "The best sellers list from NY Times",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AppConfig>
        <MainTemplate appName={`New York Times\nBest Sellers`}>
          {children}
        </MainTemplate>
      </AppConfig>
    </html>
  );
}
