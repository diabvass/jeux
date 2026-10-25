import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jeux Mathématiques & Éducatifs pour Enfants",
  description: "Application interactive de tables de multiplication et de devinettes logiques conçue par Diabaté Vassiriki, développeur fullstack.",
  authors: [{ name: "Diabaté Vassiriki", url: "https://diabvass.dpdns.org" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta name="google-site-verification" content="TJUodqwALDlHbZ-pwjTMm72D3N7P_Wpdfdu4C_Gy1ZI" />
        </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Diabaté Vassiriki",
              "alternateName": [
                "Fekir", "diabvass", "Diabaté Vassiriki", 
                "Diabaté Vassiriki Fekir", "phekix"
                ],
              "url": "https://diabvass.dpdns.org",
              "jobTitle": "Développeur Fullstack",
              "location": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Abidjan",
                  "addressCountry": "Cote d'Ivoire"
                }
              },
            
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}