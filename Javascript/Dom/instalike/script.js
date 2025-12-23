const img = document.querySelector(".imgbutton");
const heart = document.querySelector(".heart");

img.addEventListener("dblclick", () => {
    heart.classList.add("show");

    setTimeout(() => {
        heart.classList.remove("show");
    }, 1500); // hide after 1.5 sec
});

