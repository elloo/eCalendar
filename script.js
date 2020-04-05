// DONE: Need number of days in month
// DONE: Create new row when 7 td have been created
// DONE: Assign day num to day column
// Fill previous month's days if needed

const calendarBody = document.getElementById('calendarDates');

const daysInMonth = new Date(2020, 4, 0).getDate();
const firstDay = new Date(2020, 3).getDay();
let dayCount = 1;
let calendarDays = [];
calendarDays[firstDay] = 1;

// Create array with appropriate calendar dates
for (let i = 2; i <= daysInMonth; i++) {
  calendarDays.push(i);
}

while (calendarDays.length % 7 !== 0) {
  calendarDays.push('');
}

console.log(firstDay);

// Controlling number of table rows
for (let i = 0; i <= 6; i++) {
  if (dayCount > daysInMonth) {
    break;
  }

  row = document.createElement('tr');

  // Controlling number of table columns
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
