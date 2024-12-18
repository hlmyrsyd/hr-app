import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const micro5 = localFont({
  src: "./fonts/Micro5-Regular.ttf",
  variable: "--font-micro5",
  weight: "500"
})

export const metadata: Metadata = {
  title: "Hilmy | FrontEnd Developer",
  icons: {
    icon: "/icon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex h-full w-full ${geistSans.variable} ${geistMono.variable} ${micro5.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
