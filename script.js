const calendarBody = document.getElementById('calendarDates')

row = document.createElement('tr')
cell = document.createElement('td')
cellData = document.createTextNode('1')
cell.appendChild(cellData)
row.appendChild(cell)
calendarBody.appendChild(row)