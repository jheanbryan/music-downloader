const ytdl = require('ytdl-core');
const fs = require('fs');

const { ipcMain } = require('electron');

ipcMain.on('download-audio', (event, url) => {
  const videoURL = url;
  const options = {
    quality: 'highestaudio',
    filter: 'audioonly',
  };

  ytdl.getInfo(videoURL)
    .then((info) => {
      const title = info.videoDetails.title;
      const audioStream = ytdl(videoURL, options);
      audioStream.pipe(fs.createWriteStream(`${title}.mp3`));

      event.reply('download-audio-response', title); // Responda com o título após o download
    })
    .catch((error) => {
      console.error('Erro ao baixar o áudio:', error);
    });
});
