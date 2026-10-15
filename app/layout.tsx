import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mattis Cohen Art | Handmade Copper Menorahs",
    template: "%s | Mattis Cohen Art",
  },
  description:
    "Discover handmade copper menorahs, unique sculptures, artistic vases, and bespoke creations by Jerusalem artist Mattis Cohen.",
  metadataBase: new URL("https://mattiscohenart.com"),
  openGraph: {
    title: "Mattis Cohen Art",
    description:
      "Unique handmade copper art and distinctive menorah designs by Jerusalem artist Mattis Cohen.",
    url: "https://mattiscohenart.com",
    siteName: "Mattis Cohen Art",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PMR6KWRQ');
            `,
          }}
        />

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PMR6KWRQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}