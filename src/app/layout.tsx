import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import { business } from "@/lib/content";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://gustavoparabocz.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${business.name} | ${business.role}`,
  description:
    "Sites e aplicativos sob medida, do briefing à entrega. Desenvolvimento web e desktop pensado pra converter — feito por Gustavo Parabocz.",
  keywords: [
    "criação de sites",
    "desenvolvimento de aplicativos",
    "Gustavo Parabocz",
    "desenvolvedor freelancer",
    "sites sob medida",
  ],
  openGraph: {
    title: `${business.name} | ${business.role}`,
    description: "Sites e aplicativos sob medida, prontos pra converter.",
    url: siteUrl,
    siteName: business.name,
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-void text-ink antialiased">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
