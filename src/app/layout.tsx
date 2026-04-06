import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodeGraft | Structural Integrity for Modern Software",
  description: "CodeGraft ensures architectural coherence and prevents structural drift in high-velocity software engineering teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
