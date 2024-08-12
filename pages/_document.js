import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* SEO Tags */}
          <meta charSet="UTF-8" />
          <meta name="description" content="Download MP3s easily with our MP3 Downloader and Bulk MP3 Downloader tools." />
          <meta name="keywords" content="MP3 Downloader, Bulk MP3 Downloader, YouTube to MP3, Audio Downloader" />
          <meta name="author" content="Your Name" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          {/* Favicon and Apple Touch Icons */}
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/favicon/site.webmanifest" />

          {/* Open Graph Tags for Social Media */}
          <meta property="og:title" content="MP3 Downloader & Bulk MP3 Downloader" />
          <meta property="og:description" content="Easily convert and download MP3 files from YouTube videos. Our bulk downloader makes it even easier!" />
          <meta property="og:url" content="https://your-website-url.com" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://your-website-url.com/og-image.png" />

          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@yourtwitterhandle" />
          <meta name="twitter:title" content="MP3 Downloader & Bulk MP3 Downloader" />
          <meta name="twitter:description" content="Easily convert and download MP3 files from YouTube videos." />
          <meta name="twitter:image" content="https://your-website-url.com/twitter-image.png" />

          {/* Additional SEO Optimization */}
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://your-website-url.com" />

          {/* Preconnect to required origins for performance optimization */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />

          {/* Import Google Fonts or any other external CSS */}
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
