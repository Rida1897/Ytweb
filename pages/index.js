import { useState } from "react";
import copy from "copy-to-clipboard";

const Index = () => {
  const [videoURL, setVideoURL] = useState("");
  const [mp3Link, setMp3Link] = useState("");

  const getYouTubeMp3 = (url) => {
    let regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    let match = url.match(regExp);

    if (match && match[1].length === 11) {
      const videoID = match[1];
      const mp3DownloadUrl = `https://example.com/download/mp3/${videoID}`;

      setMp3Link(mp3DownloadUrl);
      setVideoURL("");
    } else {
      setMp3Link("");
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
            <button
              className="btn-blue ml-4"
              onClick={() => copy(mp3Link)}
            >
              Copy Download Link
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
