import sys
import yt_dlp
import os

def download_youtube_video_as_mp3(url, output_path='.', filename='output'):
    ydl_opts = {
        'format': 'bestaudio/best',
        'postprocessors': [{
            'key': 'FFmpegExtractAudio',
            'preferredcodec': 'mp3',
            'preferredquality': '192',
        }],
        'outtmpl': os.path.join(output_path, f'{filename}.mp3'),
    }

    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.download([url])
        print(os.path.join(output_path, f'{filename}.mp3'))
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    url = sys.argv[1]
    download_youtube_video_as_mp3(url)
