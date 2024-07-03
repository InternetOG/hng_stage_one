let divTime = document.querySelector("#currentTimeUTC");
let divDay = document.querySelector("#currentDay");
let img = document.querySelector("#img");

let getCurrentUTCTime = () => {
    const date = new Date();
    const utcDate = date.toUTCString();
    return utcDate;
}

let displayTimeUTC = () => {
    // displays the Current Time
    let timeToArray = getCurrentUTCTime().split(' ');
    // console.log(timeToArray)
    let divTimeUTC = timeToArray[4] + " " + "UTC";
    divTime.textContent = divTimeUTC;

    // Displays the Day of the week
    let day = timeToArray[0];
    // console.log(day.split(","));
    let dayArr = day.split(",");
    day = dayArr[0]
    divDay.textContent = fullDay(day);

}

// Switch between images depending on the window width size
let imageSwitch = (e) => {
    let screenWidth = window.innerWidth;

    if (screenWidth <= 350) {
        img.setAttribute("src", "./src/leye200x266.jpg");
    } else {
        img.setAttribute("src", "./src/leye320x426.jpg");
    }
}

// Returns the acronym meaning of the day
let fullDay = (day) => {
    switch(day) {
        case "Sun":
            return "Sunday";
            break;
        case "Mon":
            return "Monday";
            break;
        case "Tue":
            return "Tuesday";
            break;
        case "Wed":
            return "Wednesday";
            break;
        case "Thur":
            return "Thursday";
            break;
        case "Fri":
            return "Friday";
            break;
        default:
            return "Saturday";
    }
}

window.addEventListener("resize", imageSwitch);
setInterval(displayTimeUTC, 1000);
displayTimeUTC();