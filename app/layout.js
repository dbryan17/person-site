import { Inter } from "next/font/google";
import "./globals.css";
import "./styles.scss";
import Navbar from "./components/nav/navbar";
import Footer from "./components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dakota Bryan",
  description: "My Website",
};

export default function RootLayout({ children }) {
  return (
    // force light mode with data-theme=light
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <Navbar />
        <div className="pageContainer">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
