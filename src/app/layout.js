import { Open_Sans } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Layout/Header/Header";

const openSans = Open_Sans({
  weight: ["400", "600", "700"],
  subsets: ["cyrillic"],
  variable: "--font-openSans",
  display: "swap",
});

export const metadata = {
  title: "Эколом",
  description: "Приём лома чёрных и цветных металлов в Санкт-Петербурге",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${openSans.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
