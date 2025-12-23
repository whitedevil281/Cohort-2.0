
let flag = 0;
const boxMains = document.querySelectorAll(".box-main");
boxMains.forEach((boxMain) => {
    boxMain.addEventListener("click", () => {
        const box = boxMain.querySelector(".box");
       if(flag === 0){
        box.classList.add("fullscreen")
        console.log("fullscreen");
        ;
        flag = 1;
       }
       else{
        box.classList.remove("fullscreen");
        console.log("not fullscreen");
        flag = 0;
       }
    });
});