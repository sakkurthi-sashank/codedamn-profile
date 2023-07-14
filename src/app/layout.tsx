import { TheHeader } from "@/components/common/TheHeader";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "codedamn | portfolio",
  description: "codedamn portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: inter.style.fontFamily,
        }}
      >
        <TheHeader />
        {children}
      </body>
    </html>
  );
}
