const calendarBody = document.getElementById('calendarDates');

const daysInMonth = new Date(2020, 4, 0).getDate();
const firstDay = new Date(2020, 3).getDay();
let dayCount = 1;
let calendarDays = [];
calendarDays[firstDay] = 1;

// Create array with appropriate calendar dates
let daysInLastMonth = new Date(2020, 3, 0).getDate();

for (let i = firstDay - 1; i >= 0; i--) {
  calendarDays[i] = daysInLastMonth;
  daysInLastMonth--;
}
console.log(calendarDays);

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
