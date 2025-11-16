const h1 = document.querySelector("#percentage");
const circle = document.querySelector("#circle");
const chargebutton = document.querySelector("#charge");
const dechargebutton = document.querySelector("#decharge");
const schargebutton = document.querySelector("#scharge");
const resetbutton = document.querySelector("#reset");

let percentage = 50;

// Update UI
function updateCircle() {
    document.documentElement.style.setProperty("--progress", `${percentage}%`);
    h1.innerHTML = `${Math.round(percentage)}%`;
}

// 🔥 Smooth animation function
function animateTo(target) {
    let interval = setInterval(() => {

        if (percentage < target) percentage += 0.2;       // smooth increase
        else if (percentage > target) percentage -= 0.2;  // smooth decrease

        updateCircle();

        // stop when close to target
        if (Math.abs(percentage - target) < 0.2) {
            percentage = target;   // snap to final
            updateCircle();
            clearInterval(interval);
        }

    }, 10); // smoother = lower time
}

// CHARGE +2 (smooth)
function charge() {
    if (percentage >= 100) return;
    let target = Math.min(Math.round(percentage) + 2, 100);
    animateTo(target);
}

// DECHARGE -2 (smooth)
function decharge() {
    if (percentage <= 0) return;
    let target = Math.max(Math.round(percentage) - 2, 0);
    animateTo(target);
}

// SUPER CHARGE → animate to 100
function scharge() {
    if (percentage >= 100) return;
    animateTo(100);
}

// RESET → animate to 0
function reset() {
    if (percentage <= 0) return;
    animateTo(0);
}

// Event listeners
chargebutton.addEventListener("click", charge);
dechargebutton.addEventListener("click", decharge);
schargebutton.addEventListener("click", scharge);
resetbutton.addEventListener("click", reset);

updateCircle();
