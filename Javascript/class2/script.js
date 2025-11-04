//level2
//11
// let password = "Hello123"
// for (let i = 3; i >0; i--) {
//     let data = prompt("Enter password:")
//     if(data===password){
//         console.log("Succes");
//         break;
//     }
//     else{
//         if(i>1) console.warn(`Wrong Password (${(i-1)} Atempts Left) `);
//
//         else console.log("Account locked");
//     }
// }

//12

// let c = 0;
// console.log("Type stop to STOP and Yes will me counted");
// const onlyLetters = /^[a-zA-Z]+$/;
// while (true) {
//   let data = prompt("Enter a word:");
//   if (data !== null) {
//     data = data.trim().toLowerCase();
//     if (!onlyLetters.test(data)) {
//       console.error("Only Alphabet No number or empty text or any Speacial Charater");
//       continue;
//     } else {
//       if (data === "yes") {
//         c++;
//         console.log(`Yes typed ${c} times!`);
//       }
//       if (data == "stop") break;
//     }
//   } else {
//     console.error("Cancel Entered");
//     break;
//   }
// }

//19
let balance = 1000;
const onlynumber = /^\d+$/;
for (let i = 3; i > 0; i--) {
  let amt = prompt("Enter your amt:");
  if (amt !== null) {
    if (onlynumber.test(amt)) {
      amt = Number(amt);
      if (amt <= balance) {
        console.log(`Chance Left : ${i - 1}`);
        balance = balance - amt;
        console.log(`Balance: ${balance}`);
      } else {
        console.log("Insufficient balance");
        break;
      }
    } else {
      console.log("Only number");
      continue;
    }
  } else {
    console.error("Cancel Entered");
    break;
  }
}
