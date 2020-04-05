// DONE: Need number of days in month
// console.log(new Date(2020, 4, 0).getDate());
// DONE: Create new row when 7 td have been created
// Assign day num to day column
// console.log(new Date(2020, 3).getDay());
// Array of getDay() and index notation
// cellData[array[i]]
// Fill previous month's days if needed

const calendarBody = document.getElementById('calendarDates');

const daysInMonth = new Date(2020, 4, 0).getDate();
const firstDay = new Date(2020, 3).getDay();
let dayCount = 1;
let calendarDays = [];
calendarDays[firstDay] = 1;

for (let i = 2; i <= daysInMonth; i++) {
  calendarDays.push(i);
}

for (let i = 0; i <= 6; i++) {
  if (dayCount > calendarDays.length) {
    break;
  }

  row = document.createElement('tr');

  for (let i = 0; i <= 6; i++) {
    cell = document.createElement('td');
    cellData = document.createTextNode(calendarDays[dayCount - 1]);
    cell.appendChild(cellData);
    row.appendChild(cell);
    dayCount++;
  }

  calendarBody.appendChild(row);
}
