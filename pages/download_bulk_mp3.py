import sys
import yt_dlp
import os
import pandas as pd

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
        return os.path.join(output_path, f'{filename}.mp3')
    except Exception as e:
        print(f"An error occurred while downloading {url}: {e}")
        return None

def download_bulk_mp3_from_csv(csv_file, output_path='mp3s'):
    if not os.path.exists(output_path):
        os.makedirs(output_path)

    urls_df = pd.read_csv(csv_file)

    if 'url' not in urls_df.columns:
        print("CSV file must contain a column named 'url'.")
        return

    for index, row in urls_df.iterrows():
        url = row['url']
        filename = f"audio_{index + 1}"
        mp3_file = download_youtube_video_as_mp3(url, output_path, filename)
        if mp3_file:
            print(f"MP3 file saved as: {mp3_file}")
        else:
            print(f"Failed to download {url}")

if __name__ == "__main__":
    csv_file = sys.argv[1]
    download_bulk_mp3_from_csv(csv_file)
