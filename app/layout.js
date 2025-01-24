import { Footer, Nav } from "./_components";
import "./globals.css";
import localFont from "next/font/local";

const outfit100 = localFont({
  src: "../public/fonts/Outfit-Thin.ttf",
  variable: "--font-outfit-100",
});
const outfit200 = localFont({
  src: "../public/fonts/Outfit-ExtraLight.ttf",
  variable: "--font-outfit-200",
});
const outfit300 = localFont({
  src: "../public/fonts/Outfit-Light.ttf",
  variable: "--font-outfit-300",
});
const outfit400 = localFont({
  src: "../public/fonts/Outfit-Regular.ttf",
  variable: "--font-outfit-400",
});
const outfit500 = localFont({
  src: "../public/fonts/Outfit-Medium.ttf",
  variable: "--font-outfit-500",
});
const outfit600 = localFont({
  src: "../public/fonts/Outfit-SemiBold.ttf",
  variable: "--font-outfit-600",
});
const outfit700 = localFont({
  src: "../public/fonts/Outfit-Bold.ttf",
  variable: "--font-outfit-700",
});
const outfit800 = localFont({
  src: "../public/fonts/Outfit-ExtraBold.ttf",
  variable: "--font-outfit-800",
});
const outfit900 = localFont({
  src: "../public/fonts/Outfit-Black.ttf",
  variable: "--font-outfit-900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit100.variable} ${outfit200.variable} ${outfit300.variable} ${outfit400.variable} ${outfit500.variable} ${outfit600.variable} ${outfit700.variable} ${outfit800.variable} ${outfit900.variable}`}
      >
        <header className="w-full z-20 relative">
          <Nav />
        </header>
        {children}
        <footer className="w-full z-20 relative">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
