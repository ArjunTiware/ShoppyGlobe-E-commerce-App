import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import { Providers } from "../redux/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ShoppyGlobe",
  description: "E-commerce application",
  generator: "v0.dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="container mx-auto px-4 py-8">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}

import "./globals.css";
