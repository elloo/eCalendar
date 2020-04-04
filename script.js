// Need number of days in month
console.log(new Date(2020, 3, 0).getDate());
// Create new row when 7 td have been created
// Assign day num to day column
console.log(new Date(2020, 3).getDay());
// Array of getDay() and index notation
// cellData[array[i]]
// Fill previous month's days if needed

const calendarBody = document.getElementById('calendarDates');

for (let i = 1; i <= 7; i++) {
  row = document.createElement('tr');

  for (let i = 1; i <= 7; i++) {
    cell = document.createElement('td');
    cellData = document.createTextNode(i);
    cell.appendChild(cellData);
    row.appendChild(cell);
  }

  calendarBody.appendChild(row);
}
