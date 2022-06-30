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
    } else if(day == 25){
        allDays[index].classList.add("holiday", 'friday');
    }
  }
}
createDays();

function createButton(buttonName) {
    let div = document.querySelector('.buttons-container')
    let button = document.createElement('button')
    button.id='btn-holiday';
    button.innerText = buttonName
    div.appendChild(button)
}
createButton('Feriados');


