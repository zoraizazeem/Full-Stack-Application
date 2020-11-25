            function AddNewVal(){
                const temper1  = document.getElementById("activity").value;
                const temper2 = document.getElementById("timeforact").value;
                var fs = require('fs');
                var json2csv = require('json2csv');
                var newLine= "\r\n";

                var fields = ['iowe', 'amounth', 'amountm'];
                var appendThis = [
                    {
                        'iowe' : `${temper1}`,
                        'amounth' : `${temper2}`,
                        'amountm' : '24'
                    },
                ]
                var toCsv = {
                    data: appendThis,
                    fields: fields,
                    hasCSVColumnTitle: false
                };
                fs.stat('sched.csv', function (err, stat) {
                    if (err == null) {
                        console.log('File exists');
                    
                        //write the actual data and end with newline
                        var csv = json2csv(toCsv) + newLine;
                    
                        fs.appendFile('sched.csv', csv, function (err) {
                            if (err) throw err;
                            console.log('The "data to append" was appended to file!');
                        });
                    } else {
                                //write the headers and newline
                                console.log('New file, just writing headers');
                                fields= (fields + newLine);

                                fs.writeFile('file.csv', fields, function (err) {
                                    if (err) throw err;
                                    console.log('file saved');
                                });
                            }
                        });
            }


            const times = []
            const chars = []
            async function janitor() {
                await AddNewVal()
                const response = await fetch('sched.csv');
                const data = await response.text();

                const rows = data.split('\n').slice(1);
                console.log(rows);
                for (var i = 0; i<rows.length; i++) {
                    chars.push(rows[i].split(',')[0])
                    times.push(parseInt(rows[i].split(',')[1]))     
                }
                function bouncer(arr) {
                    function filterer(arr) {
                        return arr > 0|| isNaN(arr) === true;
                    }
                    arr = arr.filter(filterer);
                    return arr;
                }
                bouncer(chars);
                bouncer(times);
                console.log(times)
                console.log(chars)

            };


    
            function Maker(times, activity){
                    this.TimesInHours = times;
                    this.Activity = activity;
                }
    
    
            const finalList = []
            async function tableMaker(){
                await janitor();
    
    
    
    
                for (var i =0; i<chars.length; i++){
                    finalList.push(new Maker(times[i], chars[i]))    
                }
                console.log(finalList)
            }

            function generateTableHead(table, data) {
            let thead = table.createTHead();
            let row = thead.insertRow();
            for (let key of data) {
                let th = document.createElement("th");
                let text = document.createTextNode(key);
                th.appendChild(text);
                row.appendChild(th);
            };
        }
    
            function generateTable(table, data) {
            for (let element of data) {
            let row = table.insertRow();
            for (key in element) {
              let cell = row.insertCell();
              let text = document.createTextNode(element[key]);
              cell.appendChild(text);
            };
          };
        }
        waitTurn();
    
        async function waitTurn(){
            await tableMaker();
            let table = document.querySelector("table");
            let data = Object.keys(finalList[0]);
            generateTable(table, finalList);
            generateTableHead(table, data);
        }