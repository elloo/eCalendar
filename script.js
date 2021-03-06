//>>>>>>>>>>>>>> CALENDAR

//>>>>>>>>>>>>>> Populating calendar months
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const currentDate = new Date();
const currentMonth = currentDate.getMonth();
let monthCells = document.querySelectorAll(
  "td[colspan = '2'], td[colspan = '3']"
);
monthCells[0].appendChild(document.createTextNode(months[currentMonth - 1]));
monthCells[1].appendChild(document.createTextNode(months[currentMonth]));
monthCells[2].appendChild(document.createTextNode(months[currentMonth + 1]));

//>>>>>>>>>>>>>> Populating calendar year
const yearCell = document.querySelector('#calendarYear');
yearCell.appendChild(document.createTextNode(`${currentDate.getFullYear()}`));

//>>>>>>>>>>>>>> Populating calendar
// Create array with appropriate calendar dates
// Assigning day argument to 0 retrieves date for last day of currentMonth
const daysInMonth = new Date(2020, currentMonth + 1, 0).getDate();
const firstDay = new Date(2020, currentMonth).getDay();
let calendarDays = [];
calendarDays[firstDay] = 1;
let daysInLastMonth = new Date(2020, currentMonth, 0).getDate();
let daysInLastMonthCount = 0;
for (let i = firstDay - 1; i >= 0; i--) {
  calendarDays[i] = daysInLastMonth;
  daysInLastMonth--;
  daysInLastMonthCount++;
}
for (let i = 2; i <= daysInMonth; i++) {
  calendarDays.push(i);
}
while (calendarDays.length % 7 !== 0) {
  calendarDays.push('');
}

// Populating table rows
const calendarBody = document.getElementById('calendarDates');
let dayCount = 1;
for (let i = 0; i <= 6; i++) {
  if (dayCount > daysInMonth) {
    break
  }
  row = document.createElement('tr');
  // Populating table columns
  for (let i = 0; i <= 6; i++) {
    cell = document.createElement('td');
    cellData = document.createTextNode(calendarDays[dayCount - 1]);
    cell.appendChild(cellData);
    row.appendChild(cell);
    dayCount++;

    // Styling weekdays
    cell.setAttribute("class", "day")
    // Styling weekend
    if (i === 0 || i === 6) cell.setAttribute("class", "weekend")
    // Styling previous month's days
    if (daysInLastMonthCount > 0) {
      cell.setAttribute("class", "lastMonthDay")
      daysInLastMonthCount--
    }
    // Styling current day
    const currentDay = document.querySelector(`#calendarDays td:nth-child(${currentDate.getDay() + 1})`)
    currentDay.setAttribute("id", "currentDay")
    if (cell.innerText === currentDate.getDate().toString()) cell.setAttribute("id", "today")
  }
  calendarBody.appendChild(row);
}

//>>>>>>>>>>>>>> Populating event day of week
const options = {
  weekday: 'long'
};
const currentDay = new Intl.DateTimeFormat('en-AU', options).format(
  currentDate
);
const eventDay = document.getElementById('eventDay');
eventDay.appendChild(document.createTextNode(currentDay));

//>>>>>>>>>>>>>> EVENT MODAL

//>>>>>>>>>>>>>> Populating event month and date
const eventDate = document.getElementById('eventDate');
const currentDayNum = currentDate.getDate();
let monthDate = document.createTextNode(
  `${months[currentMonth] + ' ' + currentDayNum}`
);
eventDate.appendChild(monthDate);

//>>>>>>>>>>>>>> Open modal
const addEventBtn = document.getElementById('addEvent')
const eventDialog = document.getElementById('eventDialog')
addEventBtn.addEventListener('click', function () {
  eventDialog.showModal()
})

//>>>>>>>>>>>>>> Close modal on blur
eventDialog.addEventListener('click', function (event) {
  // eventDialog covers entire screen except for form
  if (event.target === eventDialog) {
    eventDialog.close()
  }
})
const timesIcon = document.querySelector('.fa-times')
timesIcon.addEventListener('click', function (event) {
  eventDialog.close()
})

//>>>>>>>>>>>>>> Populate dropdown for months
const monthsDropdowns = document.querySelectorAll('.months')
const defaultOption = (name) => {
  let option = document.createElement('option')
  option.setAttribute('selected', '')
  option.setAttribute('disabled', '')
  option.appendChild(document.createTextNode(name))
  return option
}
Array.from(monthsDropdowns, element => {
  element.appendChild(defaultOption('Month'))
  for (i = 0; i < months.length; i++) {
    let option = document.createElement('option')
    option.appendChild(document.createTextNode(months[i]))
    element.appendChild(option)
  }
})

//>>>>>>>>>>>>>> Populate dropdown for days
const daysDropdowns = document.querySelectorAll('.days')
Array.from(daysDropdowns, element => {
  element.appendChild(defaultOption('Day'))
  for (i = 1; i <= 31; i++) {
    let option = document.createElement('option')
    option.appendChild(document.createTextNode(i))
    element.appendChild(option)
  }
})