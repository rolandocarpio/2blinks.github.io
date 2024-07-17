function revealSurprise(memoryNumber) {
    const surpriseDiv = document.getElementById('surprise');
    let surpriseContent = '';

    switch (memoryNumber) {
        case 1:
            surpriseContent = `
                <h2>Bread <3</h2>
                <video width="300" controls>
                    <source src="/img/5086.mp4" type="video/mp4">
                    <source src="/img/5086.ogg" type="video/ogg">
                    <source src="/img/5086.webm" type="video/webm">
                    Your browser does not support the video tag.
                </video>
                <br>
                <img src="/img/qr.png" width="300">
            `;
            break;
        default:
            surpriseContent = '<p>Select a memory to reveal a surprise!</p>';
    }

    surpriseDiv.innerHTML = surpriseContent;
    createHearts();
}

function createHearts() {
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDelay = Math.random() * 5 + 's';
        document.body.appendChild(heart);

        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }
}

function toggleMusic() {
    const music = document.getElementById('background-music');
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}
