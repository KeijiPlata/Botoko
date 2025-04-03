import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Botoko",
  description: "Create your list of senatorial candidates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <div className="flex-grow p-2 md:p-5 font-poppins">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
