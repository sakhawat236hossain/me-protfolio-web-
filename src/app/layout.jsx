import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Shared/Navbar/Navbar";
import Footer from "./components/Shared/Footer/Footer";
import { ThemeProvider } from "./providers/ThemeProvider";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import ParticleNetwork from "./components/ParticleNetwork/ParticleNetwork";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "my portfolio",
  description: "My personal portfolio website",
  icons: {
    icon: "/profile.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <ParticleNetwork />
          <ScrollProgress />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
