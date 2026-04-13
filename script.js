const music = document.getElementById("bg-music");
      const button = document.getElementById("toggle-music");

      // set starting volume
      music.volume = 0.10;

      button.addEventListener("click", () => {
         if (music.paused) {
            music.play();
            button.textContent = " Pause Music";
         } else {
            music.pause();
            button.textContent = " Play Music";
         }
      });