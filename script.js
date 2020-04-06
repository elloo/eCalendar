const calendarBody = document.getElementById('calendarDates');
const calendarMonths = document.getElementById('calendarMonths');
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
const currentMonth = new Date().getMonth();
// Assigning day argument to 0 retrieves date for last day of previous month
const daysInMonth = new Date(2020, currentMonth + 1, 0).getDate();
const firstDay = new Date(2020, currentMonth).getDay();
let dayCount = 1;
let calendarDays = [];
calendarDays[firstDay] = 1;

//>>>>>>>>>>>>>> Populating calendar months
let monthCells = document.querySelectorAll(
  "td[colspan = '2'], td[colspan = '3']"
);
monthCells[0].appendChild(document.createTextNode(months[currentMonth - 1]));
monthCells[1].appendChild(document.createTextNode(months[currentMonth]));
monthCells[2].appendChild(document.createTextNode(months[currentMonth + 1]));

//>>>>>>>>>>>>>> Populating calendar year
yearCell = document.querySelector('#calendarYear');
yearCell.appendChild(document.createTextNode(`${new Date().getFullYear()}`));

//>>>>>>>>>>>>>> Populating calendar
// Create array with appropriate calendar dates
let daysInLastMonth = new Date(2020, currentMonth, 0).getDate();
for (let i = firstDay - 1; i >= 0; i--) {
  calendarDays[i] = daysInLastMonth;
  daysInLastMonth--;
}
for (let i = 2; i <= daysInMonth; i++) {
  calendarDays.push(i);
}
while (calendarDays.length % 7 !== 0) {
  calendarDays.push('');
}

// Populating table rows
for (let i = 0; i <= 6; i++) {
  if (dayCount > daysInMonth) {
    break;
  }
  row = document.createElement('tr');

  // Populating table columns
  for (let i = 0; i <= 6; i++) {
    cell = document.createElement('td');
    // Need -1 since dayCount starts at 1, not 0
    cellData = document.createTextNode(calendarDays[dayCount - 1]);
    cell.appendChild(cellData);
    row.appendChild(cell);
    dayCount++;
  }

  calendarBody.appendChild(row);
}
