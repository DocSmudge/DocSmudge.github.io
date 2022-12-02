// document.getElementById("currentTemp").innerHTML =
//   weatherInfo.list[0].main.temp;
// document.getElementById("windSpeed").innerHTML = weatherInfo.wind.speed;

// const iconcode = weatherInfo.weather[0].icon;
// console.log(iconcode);

// const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
// console.log(icon_path);

// document.getElementById("weather_icon").src = icon_path;

const d = new Date();

const todayDayNumber = d.getDay();

const myweekday = new Array(7);
myweekday[0] = "Sunday";
myweekday[1] = "Monday";
myweekday[2] = "Tuesday";
myweekday[3] = "Wednesday";
myweekday[4] = "Thursday";
myweekday[5] = "Friday";
myweekday[6] = "Saturday";
console.log(myweekday[3]);

const apiURL =
  "//api.openweathermap.org/data/2.5/forecast?zip=84020,us&appid=529d95c3f57330567d10c199990ba863&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    console.log(weatherInfo);

    document.getElementById("place").textContent = weatherInfo.city.name;
    let mylist = weatherInfo.list;

    let forecastDayNumber = todayDayNumber;

    for (i = 0; i < mylist.length; i++) {
      let time = mylist[i].dt_txt;
      if (time.includes("21:00:00")) {
        forecastDayNumber += 1;
        if (forecastDayNumber === 7) {
          forecastDayNumber = 0;
        }
        let theDayName = document.createElement("span");
        theDayName.textContent = myweekday[forecastDayNumber];

        let theTemp = document.createElement("p");
        theTemp.textContent = weatherInfo.list[i].main.temp + "\xB0";
        let iconcode = weatherInfo.list[i].weather[0].icon;
        let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
        let theicon = document.createElement("img");
        theicon.src = iconPath;
        let theDay = document.createElement("div");
        theDay.appendChild(theDayName);
        theDay.appendChild(theTemp);
        theDay.appendChild(theicon);
        document.getElementById("weatherforecast").appendChild(theDay);
      } //end if
    } //end for
  });
