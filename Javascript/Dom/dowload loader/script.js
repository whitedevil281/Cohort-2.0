const h1  = document.querySelector(".percent");
const loadbar = document.querySelector(".load");
const button = document.querySelector(".button")
let  grow = 0;
button.addEventListener("click" ,(e) => {


   const int =  setInterval(() => {
       if(grow===100){
        clearInterval(int)
       }
       else{

           grow++;
           h1.innerHTML = `${grow}%`
           loadbar.style.width =  `${grow}%`;
       }
     
    },50)

    

})

