import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://digilabss-landing-page.vercel.app";
const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Digilabss — Performance Marketing That Compounds",
  description:
    "Digilabss builds paid acquisition systems for ambitious businesses in the US, UK, and beyond. Strategy, creative, and media buying under one roof.",
  openGraph: {
    title: "Digilabss — Performance Marketing That Compounds",
    description:
      "Strategy, creative, and media buying under one roof. Built for businesses ready to scale paid acquisition.",
    url: siteUrl,
    siteName: "Digilabss",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digilabss — Performance Marketing That Compounds",
    description:
      "Strategy, creative, and media buying under one roof. Built for businesses ready to scale paid acquisition.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {gtmId ? (
          <>
            <Script id="gtm-init" strategy="afterInteractive">
              {`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmId}');
              `}
            </Script>
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>
          </>
        ) : null}
        {children}
      </body>
    </html>
  );
}
