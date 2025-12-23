// function Getuser(username,cb){
//     console.log("fetching user from database");
//     setTimeout(() => {
//         cb({username,id:1})
//     }, 5000);
// }

// function getRepositories(user){
//     console.log(user.id);
//     console.log(user.username);
// }
// Getuser("john",(user)=>{
//     getRepositories(user)
// })


// function Loginuser(userid,cb){
//     console.log("fetching user from database");
//     setTimeout(() => {
//         cb({userid})
//     }, 3000);
// }
// function fetchpermissions(user,cb){
//     console.log("fetching permissions from database");
//     permissions = user.userid
//     setTimeout(() => {
//         cb([permissions])
//     }, 2000);
// }
// function loaddashboard(permissions){
//     console.log("loading dashboard");
//     setTimeout(() => {
//         console.log(permissions);
//     }, 2000);
// }
// Loginuser(100,(user)=>{
//     fetchpermissions(user,(permissions)=>{
//         loaddashboard(permissions)
//     })
// })



const users = ["john@gmail","peter@gmail.com","susan@gmail.com","tony@gmail.com","bruce@gmail.com"]
const key = "4863e3e4964b7207c4672e8370219e8e"

function Sendemail(email,res,place){
    return new Promise((resolve,reject)=>{
        let delay  = Math.floor(Math.random() * 2000)+1000;
        let chance = Math.random() < 0.3;
        setTimeout(() => {
            if(chance){
                reject("email not sent")
            }
            else{
                resolve(`Email:${email} sent successfully 
                    Place:${place}
                     Response:${res}`)
            }
        }, delay);
    })
}

async function Sendeamils(prams,place){
    try {
        let promises_email = users.map( function (user) {
            return  Sendemail(user,prams,place)
        })
       let finalpromises = await Promise.allSettled(promises_email)
       let yayay = finalpromises.map(function (item) {
        return item.value
       })
       console.log(yayay );
    } catch (error) {
        console.error(error);
    }
}


async function getWeather(city){
    try {
        const raw = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
        if(!raw.ok){
            throw new Error("City not found ...Try something else")
        }
        const data = await raw.json()
        const temp = data.main.temp
        Sendeamils(temp,city)
    } catch (error) {
        console.error(error);
    }
} 



getWeather("Leh")





