import { useState } from "react";
import axios from "axios";

const Index = () => {
  const [videoURL, setVideoURL] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getYouTubeMp3 = async (url) => {
    setIsLoading(true);
    setError("");
    try {
      const response = await axios.post("http://localhost:5000/download_mp3", {
        url: url,
        filename: "my_audio"  // you can customize the filename here
      });

      if (response.data.success) {
        // Trigger download
        window.location.href = `http://localhost:5000/get_mp3/${response.data.mp3_file}`;
      } else {
        setError("Failed to download MP3");
      }
    } catch (error) {
      setError("An error occurred: " + error.message);
    } finally {
      setIsLoading(false);
      setVideoURL("");
    }
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
          disabled={isLoading}
        >
          {isLoading ? "Processing..." : "Download MP3"}
        </button>
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default Index;