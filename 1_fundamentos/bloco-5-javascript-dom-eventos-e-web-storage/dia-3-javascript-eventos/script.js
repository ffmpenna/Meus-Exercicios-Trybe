function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
function createDays() {
  let decemberDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  let ulDays = document.getElementById("days");
  for (days of decemberDaysList) {
    let liDays = document.createElement("li");
    liDays.innerText = days;
    liDays.setAttribute("class", "day");
    ulDays.appendChild(liDays);
  }
  let allDays = document.querySelectorAll(".day");
  for (index in decemberDaysList) {
    let day = decemberDaysList[index];
    if (day == 24 || day == 31) {
      allDays[index].classList.add("holiday");
    } else if (day == 4 || day == 11 || day == 18) {
      allDays[index].classList.add("friday");
    } else if (day == 25) {
      allDays[index].classList.add("holiday", "friday");
    }
  }
}
createDays();

function createHolidayButton(buttonName) {
  let div = document.querySelector(".buttons-container");
  let button = document.createElement("button");
  button.id = "btn-holiday";
  button.innerText = buttonName;
  div.appendChild(button);
}
createHolidayButton("Feriados");

function changeBackgroundColor(className, color) {
  let backgroundSelect = document.getElementsByClassName(className);
  for (index = 0; index < backgroundSelect.length; index += 1) {
    backgroundSelect[index].style.backgroundColor = color;
  }
}

function showHolidays() {
  let holidayButton = document.getElementById("btn-holiday");
  let defaultBackgroundColor = "rgb(238,238,238)";
  let newBackgroundColor = "#b2ffb8";
  let count = 0;

  holidayButton.addEventListener("click", function () {
    count += 1;
    if (count % 2 == 0) {
      changeBackgroundColor("holiday", defaultBackgroundColor);
    } else {
      changeBackgroundColor("holiday", newBackgroundColor);
    }
  });
}
showHolidays();

function createFridayButton(buttonName) {
  let div = document.querySelector(".buttons-container");
  let button = document.createElement("button");
  button.id = "btn-friday";
  button.innerText = buttonName;
  div.appendChild(button);
}
createFridayButton("Sexta-feira");

function showFridays() {
  let fridayButton = document.getElementById("btn-friday");
  let fridays = document.getElementsByClassName("friday");
  let count = 0;
  let defaultFriday = [4, 11, 18, 25];

  fridayButton.addEventListener("click", function () {
    count += 1;

    if (count % 2 == 0) {
      for (index = 0; index < fridays.length; index += 1) {
        fridays[index].innerText = defaultFriday[index];
      }
    } else {
      for (index = 0; index < fridays.length; index += 1) {
        fridays[index].innerText = "Sextou!";
      }
    }
  });
}
showFridays();

function zoomIn() {
  let days = document.getElementsByClassName("day");
  for (day of days) {
    day.addEventListener("mouseover", function (event) {
      event.target.style.fontSize = "1.5em";
      event.target.style.fontWeight = "600";
    });
  }
}
zoomIn();

function zoomOut() {
  let days = document.getElementsByClassName("day");
  let day;
  for (day of days) {
    day.addEventListener("mouseout", function (event) {
      event.target.style.fontSize = "20px";
      event.target.style.fontWeight = "400";
    });
  }
}
zoomOut();

function createTask(taskName) {
  let div = document.querySelector(".my-tasks");
  let task = document.createElement("span");
  task.innerText = taskName;
  div.appendChild(task);
}
createTask("Projeto");

function subTaskColor(color) {
  let div = document.querySelector(".my-tasks");
  let taskColor = document.createElement("div");
  taskColor.setAttribute("class", "task");
  taskColor.style.backgroundColor = color;
  div.appendChild(taskColor);
}
subTaskColor("lightseagreen");

function taskSelector() {
  let task = document.querySelector(".task");
  let count = 0;
  task.addEventListener("click", function (event) {
    count += 1;
    if (count % 2 !== 0) {
      event.target.classList.add("selected");
    } else {
      event.target.classList.remove("selected");
    }
  });
}
taskSelector();

function markDay() {
  let selectedTask = document.getElementsByClassName("task selected");
  let days = document.getElementsByClassName("day");
  let taskDiv = document.querySelector(".task");
  let color = taskDiv.style.backgroundColor;
  let defaultColor = '#777'

  for (let index = 0; index < days.length; index += 1) {
    
    days[index].addEventListener("click", function (event) {
        let dayColor = event.target.style.color
        if(selectedTask.length > 0 && dayColor !== color){
      console.log(color);
      event.target.style.color = color;
    }
    else if(selectedTask.length > 0 && dayColor == color){
        event.target.style.color = defaultColor
    }
})
  }
}
markDay();


