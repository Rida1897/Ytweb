import { useState } from "react";
import axios from "axios";

const Index = () => {
  const [videoURL, setVideoURL] = useState("");
  const [mp3Link, setMp3Link] = useState("");

  const getYouTubeMp3 = async (url) => {
    try {
      const response = await axios.post("http://localhost:5000/download_mp3", {
        url: url,
        filename: "my_audio"  // you can customize the filename here
      });

      if (response.data.success) {
        setMp3Link(response.data.mp3_file);
      } else {
        console.error("Failed to download MP3");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }

    setVideoURL("");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">
          YouTube MP3 Downloader
        </h1>
        <p className="text-gray-600">
          Download high-quality MP3 audio from YouTube videos.
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
          onClick={() => getYouTubeMp3(videoURL)}
        >
          Download MP3
        </button>
      </div>
      {mp3Link && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">MP3 Download Link</h2>
          <div className="text-center">
            <a
              href={mp3Link}
              className="btn-blue"
              download
            >
              Download MP3
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
