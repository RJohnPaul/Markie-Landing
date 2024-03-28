import PrelineScript from "./components/PrelineScript";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Markie",
  description: "A Landing page made for a markdown editior called Markie.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Link rel="icon" type="image/ico" href="/favicon.ico" />
      <PrelineScript />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
