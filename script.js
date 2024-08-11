const audio1 = document.getElementById('audio1');
        const audio2 = document.getElementById('audio2');

        // Add event listeners to pause other audio when one starts playing
        audio1.addEventListener('play', () => {
            audio2.pause();
        });

        audio2.addEventListener('play', () => {
            audio1.pause();
        });