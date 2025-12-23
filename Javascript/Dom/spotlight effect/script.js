
const cursor = document.querySelector(".cursor")
const h3 = document.querySelectorAll("h3")


document.addEventListener("mousemove", (e) => {
    document.body.style.setProperty("--x", `${e.x}px`)
    document.body.style.setProperty("--y", `${e.y}px`)
    
}
)

let alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","!","@","#","$","%","^","&","*","(",")","-","_","+","=","[","{","|","}","]","/","?","<",">","`","~","\"","'"]
function randomalpha() {
    return alpha[Math.floor(Math.random() * alpha.length)]
}
h3.forEach((ele) => {
    ele.addEventListener("mouseover", (e) => {
        let iteration = 0 
        let text = e.target.textContent
       setInterval(() => {
            
            let newstr = text.split('').map((char,index) => {
                if (index < iteration) {
                    return char
                }
                return randomalpha()
            }).join('')
            console.log(newstr);
            e.target.textContent = newstr 
            iteration+=0.5

        }, 1000)
    })
})
