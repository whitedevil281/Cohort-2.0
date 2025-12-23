const main = document.querySelector("body");
const cursor = document.querySelector(".cursor");

main.addEventListener("mousemove", (e) => {
  console.log(e);

  cursor.style.left = `${e.x}px`;
  cursor.style.top = `${e.y}px`;
});
