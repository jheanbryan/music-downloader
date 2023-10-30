const ytdl = require('ytdl-core');
const fs = require('fs');

//Baixar musicas
export async function downloadAudio(url) {
    // URL do vídeo do YouTube
    const videoURL = url;

    // Opções para baixar apenas o áudio
    const options = {
        quality: 'highestaudio',
        filter: 'audioonly',
    };

    try {
        const info = await ytdl.getInfo(videoURL);
        const title = info.videoDetails.title;
        console.log(title);
        const audioStream = ytdl(videoURL, options);

        audioStream.pipe(fs.createWriteStream(`${title}.mp3`));

    } catch (error) {
        console.error('Erro ao baixar o áudio:', error);
    }

}