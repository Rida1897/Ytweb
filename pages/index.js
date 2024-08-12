const express = require('express');
const { PythonShell } = require('python-shell');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route for the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for YouTube MP3 downloader
app.post('/download-mp3', (req, res) => {
    const { url } = req.body;

    const options = {
        args: [url]
    };

    PythonShell.run('download_mp3.py', options, (err, results) => {
        if (err) res.status(500).send({ error: err.message });
        res.send({ message: `MP3 file saved as: ${results}` });
    });
});

// Route for bulk YouTube MP3 downloader
app.post('/download-bulk-mp3', (req, res) => {
    const { csvFilePath } = req.body;

    const options = {
        args: [csvFilePath]
    };

    PythonShell.run('download_bulk_mp3.py', options, (err, results) => {
        if (err) res.status(500).send({ error: err.message });
        res.send({ message: results });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
