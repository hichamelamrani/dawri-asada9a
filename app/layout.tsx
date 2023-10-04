import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Space_Grotesk, Changa } from "next/font/google";
import { ThemeProvider } from "./theme-provider";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "400", "500", "600", "700"],
});
const changa = Changa({
  subsets: ["latin"],
  weight: ["400", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "DAWRI ASADA9A",
  description: "DAWRI ASADA9A 9ASR AWLAD YAHYA WAL9ASIBTIN B ASIFA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={""}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
