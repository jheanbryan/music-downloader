const downloader = require('./downloader.js');

const btnSubmit = document.getElementById('btn-submit');
const btnDownload = document.getElementById('btn-download');
const infoMusic = document.getElementById('info-music');

btnSubmit.addEventListener('click', () =>{
    infoMusic.style.display = 'block';
    btnDownload.style.display = 'block';

    infoMusic.innerText = 'ok';
    console.log('test')

    let input = document.getElementById('url-music').value;
    downloader.downloadAudio(input)
})