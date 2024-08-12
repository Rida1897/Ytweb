import { useState } from "react";
import copy from "copy-to-clipboard";

const Index = () => {
  const [videoURL, setVideoURL] = useState("");
  const [downloadLink, setDownloadLink] = useState("");

  const getYouTubeMP3 = async (url) => {
    try {
      // Assuming you have an API endpoint to handle the conversion
      const response = await fetch("/api/convert-to-mp3", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      if (response.ok) {
        const data = await response.json();
        setDownloadLink(data.mp3Url); // Assuming the response contains the MP3 URL
        setVideoURL("");
      } else {
        console.error("Failed to convert video to MP3");
        setDownloadLink("");
      }
    } catch (error) {
      console.error("Error:", error);
      setDownloadLink("");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">YouTube MP3 Downloader</h1>
        <p className="text-gray-600">
          Convert YouTube videos to MP3 and download them.
        </p>
      </header>
      <div className="text-center">
        <input
          type="text"
          className="w-full md:w-1/2 px-4 py-2 border rounded"
          placeholder="Enter YouTube URL"
          value={videoURL}
          onChange={(e) => setVideoURL(e.target.value)}
        />
        <button
          className="btn-blue mt-2"
          onClick={() => getYouTubeMP3(videoURL)}
        >
          Convert to MP3
        </button>
      </div>
      {downloadLink && (
        <div className="mt-8 text-center">
          <h2 className="text-xl font-semibold mb-4">Download MP3</h2>
          <a
            href={downloadLink}
            className="btn-blue"
            download="video.mp3"
          >
            Download MP3
          </a>
          <button
            className="btn-blue mt-2"
            onClick={() => copy(downloadLink)}
          >
            Copy MP3 URL
          </button>
        </div>
      )}
    </div>
  );
};

export default Index;
