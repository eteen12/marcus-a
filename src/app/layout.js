import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Marcus Aurelius Quotes - Wisdon from Stoic Philosophy",
  description:
    "Discover quotes from Marcus Aurelius and other Stoic philosophers to inspire resilience and inner strength. Created by Teleta Development, a Canadian web development company.",
  keywords:
    "Marcus Aurelius, Stoicism, Stoic quotes, philosophy, wisdom, daily quotes, personal growth, resilience",
  author: "Teleta Development",
  og: {
    title: "Marcus Aurelius Quotes",
    description:
      "Discover quotes from Marcus Aurelius and other Stoic philosophers to inspire resilience and inner strength. Created by Teleta Development, a Canadian web development company.",
    url: "https://www.marcusaurelius.ca",
    image: "https://www.marcusaurelius.ca/rando.png",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcus Aurelius Quotes",
    description:
      "Explore daily quotes from Marcus Aurelius to inspire resilience and inner strength.",
    image: "https://www.marcusaurelius.ca/rando.png",
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Marcus Aurelius Quotes",
    url: "https://www.marcusaurelius.ca",
    description:
      "A collection of daily quotes and insights from Marcus Aurelius and Stoic philosophy.",
    image: "https://www.marcusaurelius.ca/rando.png",
    sameAs: [
      "https://www.facebook.com/TeletaDevelopment",
      "https://www.instagram.com/Teleta_Development/",
      "https://www.linkedin.com/in/ethan-breitkreutz-43399b322/",
    ],
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.marcusaurelius.ca/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <title>{metadata.title}</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.og.title} />
        <meta property="og:description" content={metadata.og.description} />
        <meta property="og:url" content={metadata.og.url} />
        <meta property="og:image" content={metadata.og.image} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.image} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(metadata.schema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
