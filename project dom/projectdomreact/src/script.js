const temp = document.querySelector(".temp");
const weather = document.querySelector(".weather");
const humidity = document.querySelector(".humidity");
const windspeed = document.querySelector(".wind");
const cityhtml = document.querySelector(".city");
const date = document.querySelector(".date");
const day = document.querySelector(".day");
const time = document.querySelector(".time-data");
const exitbuttons = document.querySelectorAll(".exitbutton"); 
const section1 = document.querySelector(".section-view1")
const section2 = document.querySelector(".section-view2")
const anchors = document.querySelectorAll(".box-anchor");
const anchorboxes = {
  todo: document.querySelector(".anchor-todo-bg"),
  dailyplanner: document.querySelector(".anchor-dailyplanner-bg"),
  motivation: document.querySelector(".anchor-motivation-bg"),
  pomodoro: document.querySelector(".anchor-pomodoro-bg"),
  kanbanboard: document.querySelector(".anchor-kanbanboard-bg"),
};


const mainboxes = document.querySelectorAll(".box-main");
const apiKey = "4863e3e4964b7207c4672e8370219e8e";
async function getWeatherInfo() {
  try {
    const city = await fetch("https://ipinfo.io/json");
    const citydata = await city.json();
    cityhtml.innerHTML = citydata.city;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${citydata.city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    console.log(citydata.city);
    const data = await response.json();
    console.log(data);
    const finaldata = {
      temp: data.main.temp,
      humidity: data.main.humidity,
      windspeed: data.wind.speed,
      weather: `${data.weather[0].description[0].toUpperCase()}${data.weather[0].description.slice(
        1
      )}`,
    };
    console.log(finaldata);
    temp.innerHTML = `${Math.round(finaldata.temp)}°C`;
    weather.innerHTML = `${finaldata.weather}`;
    humidity.innerHTML = `Humidity: ${finaldata.humidity}%`;
    windspeed.innerHTML = `Wind Speed: ${Math.round(finaldata.windspeed)} km/h`;
  } catch (error) {
    console.log(error);
  }
}
async function showDayDateTime() {
  try {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const newDate = new Date();
    let daynum = newDate.getDay();
    if (daynum === 7) {
      daynum = 0;
    }
    const month = newDate.getMonth();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const datetext = newDate.getDate();
    const year = newDate.getFullYear();
    date.innerHTML = `${datetext} ${months[month]} ${year}`;
    day.innerHTML = days[daynum];
    time.innerHTML = newDate.toLocaleTimeString();
  } catch (error) {
    console.log(error);
  }
}
setInterval(() => {
  showDayDateTime();
}, 1000);

getWeatherInfo();






//anchor full screen enter and exit logic 

//exit button on click function
function exitbutton_anchor(anchor, id, targetid, buttonexit){
    try{
     anchor.style.positionAnchor = `--${id}`;
      anchor.id = targetid;
      anchor.classList.remove("fullscreen");
      document.body.style.overflowY = "scroll";
      buttonexit.style.display = "none";
      section1.classList.remove("display-none");
      section2.classList.remove("display-none");
    }
    catch(error){
        console.log(error);
    }
}

//anchor fullscreen function
function changeAnchor(anchor, id, targetid, buttonexit) {
  try {
      // GOING TO FULLSCREEN
      console.log(anchor, id, targetid);

      document.body.style.overflowY = "hidden";
      buttonexit.style.display = "block";
      anchor.style.positionAnchor = "--main";
      anchor.classList.add("fullscreen");
      anchor.id = "";
      section1.classList.add("display-none");
      section2.classList.add("display-none");
  
  } catch (error) {
    console.log(error);
  }
}

 

//exit button on click event using exit button function
exitbuttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonElement = e.currentTarget;
    const anchorElement = buttonElement.closest(".box-anchor");
    console.log(anchorElement);
    
    const anchor_id = anchorElement.id.split("-")[0];
    const anchor = anchorboxes[anchor_id];
    exitbutton_anchor(anchor, anchor_id, anchor.id, e.currentTarget);
  });
});



//anchor on click fullscreen event using change anchor function
anchors.forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const anchorElement = e.currentTarget; // SAME DOM element reference as before!
    const originalId = anchorElement.dataset.originalId;
    const exitbutton = anchorElement.querySelector(".exitbutton");
    const boxid = originalId.split("-")[2]; // "todo"
    changeAnchor(anchorElement, boxid, originalId , exitbutton);
  });
});


//main box on click fullscreen event using change anchor function
mainboxes.forEach((mainbox) => {
  mainbox.addEventListener("click", (e) => {
    const anchor_id = e.currentTarget.id.split("-")[0];
    const anchor = anchorboxes[anchor_id];
    changeAnchor(anchor, anchor_id, anchor.id, anchor.querySelector(".exitbutton"));
  });
});
