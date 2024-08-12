from flask import Flask, request, jsonify, send_from_directory
import yt_dlp
import os

app = Flask(__name__)

DOWNLOAD_FOLDER = './downloads'
os.makedirs(DOWNLOAD_FOLDER, exist_ok=True)

def download_youtube_video_as_mp3(url, filename='output'):
    ydl_opts = {
        'format': 'bestaudio/best',
        'postprocessors': [{
            'key': 'FFmpegExtractAudio',
            'preferredcodec': 'mp3',
            'preferredquality': '192',
        }],
        'outtmpl': os.path.join(DOWNLOAD_FOLDER, f'{filename}.mp3'),
    }

    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.download([url])
        return os.path.join(DOWNLOAD_FOLDER, f'{filename}.mp3')
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

    mp3_file = download_youtube_video_as_mp3(url, filename)
    
    if mp3_file:
        file_url = f"/files/{os.path.basename(mp3_file)}"
        return jsonify({"success": True, "file_url": file_url})
    else:
        return jsonify({"error": "Failed to download MP3"}), 500

@app.route('/files/<filename>', methods=['GET'])
def serve_file(filename):
    return send_from_directory(DOWNLOAD_FOLDER, filename)

if __name__ == '__main__':
    app.run(debug=True)
