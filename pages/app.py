from flask import Flask, request, jsonify
import yt_dlp
import os

app = Flask(__name__)

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
        print(f"An error occurred: {e}")
        return None

@app.route('/download_mp3', methods=['POST'])
def download_mp3():
    data = request.json
    url = data.get('url')
    filename = data.get('filename', 'output')
    
    if not url:
        return jsonify({"error": "URL is required"}), 400
    
    output_path = './downloads'  # Ensure this directory exists
    os.makedirs(output_path, exist_ok=True)
    
    mp3_file = download_youtube_video_as_mp3(url, output_path, filename)
    
    if mp3_file:
        return jsonify({"success": True, "mp3_file": mp3_file})
    else:
        return jsonify({"error": "Failed to download MP3"}), 500

if __name__ == '__main__':
    app.run(debug=True)
