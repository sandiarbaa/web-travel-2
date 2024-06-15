import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Travelogy",
  description:
    "Website that provides holiday and accommodation services, with various conveniences to provide the best to travelers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-primary">{children}</body>
    </html>
  );
}
