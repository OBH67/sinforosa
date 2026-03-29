import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  title: "Cafeteria - Specialty Coffee & Artisan Pastries in Querétaro",
  description: "Quality specialty coffee, delicious pastries, and comfortable atmosphere. Open daily 7 AM - 9 PM in Santiago de Querétaro. ⭐ 4.3/5 rating. Dine-in, takeaway & delivery available.",
  keywords: "coffee shop Querétaro, specialty coffee, artisan pastries, café, croissants, outdoor seating, laptop friendly, Cafeteria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${cormorant.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
