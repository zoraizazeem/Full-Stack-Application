let rowse = []
let chars = []
let times =[]
async function janitor() {
    const response = await fetch('sched.csv');
    const datat = await response.text();
    rowse.push(datat.split('\n'));
    for (var i = 0; i<rowse.length; i++) {
        chars.push(`activity ${rowse[i].split(',')[0]}`)
        times.push(`time: ${parseInt(rowse[i].split(',')[1])}`)
        }
}

function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}
waitTurn();

async function waitTurn(){
    await janitor();
    let table = document.querySelector("table");
    let data = Object.keys(rowse[0]);
    generateTable(table, rowse);
    generateTableHead(table, data);
}
