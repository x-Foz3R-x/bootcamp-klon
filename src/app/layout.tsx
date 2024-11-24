import "~/styles/globals.css";

import { Space_Grotesk } from "next/font/google";
import { type Metadata } from "next";

export const metadata: Metadata = { title: "Bootcamp Klon" };

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.className}`}>
      <body>{children}</body>
    </html>
  );
}
