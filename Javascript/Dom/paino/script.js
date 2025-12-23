let buttons = {
  1: document.querySelector("#key-1"),
  2: document.querySelector("#key-2"),
  3: document.querySelector("#key-3"),
  4: document.querySelector("#key-4"),
  5: document.querySelector("#key-5"),
  6: document.querySelector("#key-6"),
  7: document.querySelector("#key-7"),
  8: document.querySelector("#key-8"),
  9: document.querySelector("#key-9"),
  0: document.querySelector("#key-0"),

  q: document.querySelector("#q"),
  w: document.querySelector("#w"),
  e: document.querySelector("#e"),
  r: document.querySelector("#r"),
  t: document.querySelector("#t"),
  y: document.querySelector("#y"),
  u: document.querySelector("#u"),
  i: document.querySelector("#i"),
  o: document.querySelector("#o"),
  p: document.querySelector("#p"),

  a: document.querySelector("#a"),
  s: document.querySelector("#s"),
  d: document.querySelector("#d"),
  f: document.querySelector("#f"),
};

const title = document.querySelector("#title");


let soundFiles = {
  1: "./audios/number/Db3.mp3",
  2: "./audios/number/Eb3.mp3",
  3: "./audios/number/Gb3.mp3",
  4: "./audios/number/Ab3.mp3",
  5: "./audios/number/Bb3.mp3",
  6: "./audios/number/Db4.mp3",
  7: "./audios/number/Eb4.mp3",
  8: "./audios/number/Gb4.mp3",
  9: "./audios/number/Ab4.mp3",
  0: "./audios/number/Bb4.mp3",

  q: "./audios/C3.mp3",
  w: "./audios/D3.mp3",
  e: "./audios/E3.mp3",
  r: "./audios/F3.mp3",
  t: "./audios/G3.mp3",
  y: "./audios/A3.mp3",
  u: "./audios/B3.mp3",
  i: "./audios/C4.mp3",
  o: "./audios/D4.mp3",
  p: "./audios/E4.mp3",

  a: "./audios/F4.mp3",
  s: "./audios/G4.mp3",
  d: "./audios/A4.mp3",
  f: "./audios/B4.mp3",
};



document.addEventListener("keydown", (e) => {
  const key = e.key;

  if (!soundFiles[key]) return; // ignore keys that don't exist
  const audio = new Audio(soundFiles[key]);
  audio.play();
  title.textContent = key;
  buttons[key].classList.add("active");
});

document.addEventListener("keyup", (e) => {
  const key = e.key;
  if (!soundFiles[key]) return;
  title.textContent = "";
  buttons[key].classList.remove("active");

});

for (const key in buttons) {
    console.log(buttons[key]);
    buttons[key].addEventListener("click", () => {
        const audio = new Audio(soundFiles[key]);
        audio.play();
        title.textContent = key;
        buttons[key].classList.add("active");
        setTimeout(() => {
            buttons[key].classList.remove("active");
        }, 100);

        setTimeout(() => {
            title.textContent = "";
        }, 500);
    })
}
