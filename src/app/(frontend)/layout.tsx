import type { Metadata } from "next";
import "../globals.css";
import { garamond, libre, tangerine } from "@/lib/fonts";

export const metadata: Metadata = {
  title: {
    default: 'Haru Jewelry',
    template: '%s | Haru Jewlery'
  },
  description: "Haru Jewelry is a jewlery e-commerce specialize in world's top jewelry brand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={`${garamond.variable} ${libre.variable} ${tangerine.variable} antialiased`}>
      {children}
    </main>

  );
}
