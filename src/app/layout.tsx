import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "La Qatrie - Restaurante de Desayunos y Brunch en Cali",
  description:
    "Celebramos el buen comer con desayunos artesanales, brunch y recetas de la abuela. Restaurante en Cali, Colombia. Domicilios disponibles.",
  keywords: [
    "restaurante",
    "desayunos",
    "brunch",
    "Cali",
    "Colombia",
    "pandebono",
    "La Qatrie",
  ],
  openGraph: {
    title: "La Qatrie - Restaurante de Desayunos y Brunch en Cali",
    description:
      "Celebramos el buen comer con desayunos artesanales, brunch y recetas de la abuela.",
    type: "website",
    locale: "es_CO",
  },
};

const bodyClasses = `${"font-playfair"} ${"font-inter"} antialiased`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
