import type { Metadata } from "next";
import { Kodchasan } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "react-hot-toast";

const kodchasan = Kodchasan({weight: "400", subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Money Minder",
  description: "App de controle de est",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={kodchasan.className}>
        <Providers>
        <Toaster position="bottom-right" />
          {children}
        </Providers>
      </body>
    </html>
  );
}
