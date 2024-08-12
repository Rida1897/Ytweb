import "../styles/index.css";
import { Fragment } from "react";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <DefaultSeo
        title="Free YouTube to MP3 Downloader | Bulk YouTube MP3 Converter"
        description="Convert and download YouTube videos to high-quality MP3 files for free. Use our bulk downloader for multiple videos at once."
        canonical="https://your-website-url.com"
        openGraph={{
          url: "https://your-website-url.com",
          title: "Free YouTube to MP3 Downloader | Bulk YouTube MP3 Converter",
          description:
            "Easily convert and download YouTube videos to MP3. High-quality audio conversion with our free YouTube to MP3 downloader. Bulk download available.",
          images: [
            {
              url: "https://your-website-url.com/static/images/og-image.jpg",
              width: 1200,
              height: 630,
              alt: "YouTube MP3 Downloader",
            },
          ],
          site_name: "YouTube MP3 Downloader",
        }}
        twitter={{
          handle: "@yourtwitterhandle",
          site: "@yourwebsite",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "YouTube to MP3, MP3 Downloader, Free MP3 Converter, Bulk YouTube MP3 Download, YouTube Audio Extractor, High-Quality MP3 Download",
          },
          {
            name: "author",
            content: "Your Name or Company Name",
          },
          {
            name: "robots",
            content: "index, follow",
          },
          {
            name: "theme-color",
            content: "#FF0000", // Customize the color to match your brand
          },
        ]}
      />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
