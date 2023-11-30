class Player {
  arr = [
    { path: "./assets/song1.mp3", song: "ГУЧИ", author: "FACE" },
    { path: "./assets/song2.mp3", song: "у 52", author: "да здрастуіт" },
    {
      path: "./assets/song3.mp3",
      song: "бургер",
      author: "санкут петебрурге",
    },
  ];

  bindAction() {
    const play = document.querySelector(".play");
    const previous = document.querySelector(".previous");
    const next = document.querySelector(".next");
    const audio = document.querySelector("audio");
    const h1 = document.querySelector("h1");
    const h2 = document.querySelector("h2");
    const like = document.querySelector(".like");
    let current_index_sound = 0;
    let flag = false;
    /// play
    play.addEventListener("click", () => {
      if (!flag) {
        audio.play();
        flag = true;
        play.style = "background-image: url(./assets/pause.svg);";
      } else {
        flag = false;
        audio.pause();
        play.style = "background-image: url(./assets/playBtn.svg);";
      }
    });
    //prev
    previous.addEventListener("click", () => {
      if (current_index_sound == 0) return;
      current_index_sound--;
      audio.src = this.arr[current_index_sound].path;
      h1.textContent = this.arr[current_index_sound].song;
      h2.textContent = this.arr[current_index_sound].author;
      audio.play();
      flag = true;
      play.style = "background-image: url(./assets/pause.svg);";
    });
    //next
    next.addEventListener("click", () => {
      if (current_index_sound == this.arr.length - 1) return;
      current_index_sound++;
      audio.src = this.arr[current_index_sound].path;
      h1.textContent = this.arr[current_index_sound].song;
      h2.textContent = this.arr[current_index_sound].author;
      audio.play();
      flag = true;
      play.style = "background-image: url(./assets/pause.svg);";
    });
    let flag2 = true;
    like.addEventListener("click", () => {
      if (!flag2) {
        like.style = "background-image: url(./assets/likeFill.svg)";
        flag2 = true;
      } else if (flag2) {
        like.style = "background-image: url(./assets/like1.svg)";
        flag2 = false;
      }
    });
  }
}

const player = new Player();

player.bindAction();
