import "../styles/index.css";
import { Fragment } from "react";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <DefaultSeo
        title="YouTube MP3 Downloader"
        description="Convert YouTube videos to MP3 and download them easily and quickly."
        canonical="https://your-website-url.com"
        openGraph={{
          url: "https://your-website-url.com",
          title: "YouTube MP3 Downloader",
          description: "Convert YouTube videos to MP3 and download them easily and quickly.",
          site_name: "YouTube MP3 Downloader",
          images: [
            {
              url: "https://your-website-url.com/images/og-image.jpg",
              width: 1200,
              height: 630,
              alt: "YouTube MP3 Downloader",
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
