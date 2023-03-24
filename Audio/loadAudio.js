function loadAudio(fichero) {
    return new Promise((resolve) => {
        const audio = new Audio(fichero);
        audio.addEventListener('canplaythrough', () => {
            resolve(audio);
        });
    })
}

loadAudio("soundtrack.mp3").then(audio => audio.play());