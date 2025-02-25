import type { Metadata } from "next";
import localFont from "next/font/local";
import { Hanken_Grotesk } from "next/font/google";
import "../globals.css";
import Footer from "@/components/layout/Footer";
import Nav from "@/components/layout/Nav";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

// interface ILocaleProps {
//   params: { locale: string };
// }

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const HankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
  weight: ["100", "200", "300", "400", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Transforma tus sueños en realidad",
  description:
    "Descubre la carrera ideal para ti con nuestra prueba psico-orientadora gratuita y obtén bonos tipo beca exclusivos para iniciar tu educación universitaria.",
  keywords: [
    "orientación vocacional",
    "educación universitaria",
    "prueba psico-orientadora",
    "becas universitarias",
    "futuro profesional",
    "elección de carrera",
  ],
  openGraph: {
    title: "Transforma tus sueños en realidad",
    description:
      "Descubre la carrera ideal para ti con nuestra prueba psico-orientadora gratuita y obtén bonos tipo beca exclusivos para iniciar tu educación universitaria.",
    type: "website",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/PreviewTrulivers.png?alt=media&token=ecd8577e-81f9-41e6-8a2e-458cc8b6ac9f",
        width: 1200,
        height: 630,
        alt: "Transforma tus sueños en realidad",
      },
    ],
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const lang = ["es", "en"].includes(locale) ? locale : "es";
  const messages = await getMessages({ locale }); // Pasamos `locale` para obtener los mensajes correctos.

  return (
    <html lang={lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${HankenGrotesk.className} bg-white text-black`}
      >
        <NextIntlClientProvider messages={messages}>
          <Nav />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
