import Script from "next/script";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: {
    default: "HBM ALU",
    template: "%s | HBM ALU",
  },
  description:
    "HBM ALU - Menuiserie aluminium, Alucobond, garde-corps et murs rideaux en Tunisie.",
  icons: {
    icon: "/images/HMBLogo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/bootstrap-icons.css" />
        <link rel="stylesheet" href="/css/hbm-modern.css" />
      </head>
      <body>
        {children}
        <Script src="/js/hbm-modern.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
