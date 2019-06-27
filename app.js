function writeHTML() {
    var myArray = new Array();
    myArray[0] = 1;
    myArray[1] = 2.218;
    myArray[2] = 33;
    myArray[3] = 114.94;
    myArray[4] = 5;
    myArray[5] = 33;
    myArray[6] = 114.980;
    myArray[7] = 5;

    var myTable = "<table><tr><td style='width: 100px; color: red;'>Col Head 1</td>";
    myTable += "<td style='width: 100px; color: red; text-align: right;'>Col Head 2</td>";
    myTable += "<td style='width: 100px; color: red; text-align: right;'>Col Head 3</td></tr>";

    myTable += "<tr><td style='width: 100px;                   '>---------------</td>";
    myTable += "<td     style='width: 100px; text-align: right;'>---------------</td>";
    myTable += "<td     style='width: 100px; text-align: right;'>---------------</td></tr>";

    for (var i = 0; i < 8; i++) {
        myTable += "<tr><td style='width 100px;'>Number " + i + " is:</td>";
        myArray[i] = myArray[i].toFixed(3);
        myTable += "<td style='width: 100px; text-align: right;'>" + myArray[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + myArray[i] + "</td></tr>";
    }
    myTable += "</table>";

    document.getElementById('tablePrint').innerHTML = myTable;
}

function removeHTML(){
    var myTable = "";
    document.getElementById('tablePrint').innerHTML = myTable;
}