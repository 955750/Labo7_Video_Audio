function loadAudio(fichero) {
    return new Promise(resolve => {
        const audio = new Audio();
        audio.addEventListener('load', () => {
            resolve(audio);
        });
        audio.src = fichero;
    })
}

loadAudio("soundtrack.mp3").then(audio => audio.play())