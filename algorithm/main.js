$("#generate").onclick = generate;
$("#done").onclick = done;
function check(node){
    if(node.classList.contains("check")){
        node.classList.remove("check");
    }
    else {
        node.classList.add("check");
    }
}
var y = [];
var x = [];
var col = 0;
var row = 0;
function generate(){
    y = [];
    x = [];
    let arr = [];
    $("#field").innerHTML = '<table id="tb"><tbody></tbody></table>';

    col = (parseInt($("#col").value) > 10)?10:parseInt($("#col").value);
    row = (parseInt($("#row").value) > 10)?10:parseInt($("#row").value);
    let tb = $("#tb > tbody");
    tb.innerHTML = "";
    for(let i = 0; i < row; i++){
        arr[i] = [];
        let node = "";
        for (let j = 0; j < col; j++){
            arr[i][j] = rand(0,1);
            node += "<td onclick='check(this)' class='box'></td>";
            if(y[j] == undefined){
                y[j] = [0];
            }
            if(x[i] == undefined){
                x[i] = [0];
            }
            if(arr[i][j] == 1){
                x[i][x[i].length - 1] += 1;
                y[j][y[j].length - 1] += 1;
            }
            else {
                if(x[i].last() != 0){
                    x[i][x[i].length] = 0;
                }
                if(y[j].last() != 0){
                    y[j][y[j].length] = 0;
                }
            }
        }
        if(x[i].last() == 0){
            x[i].splice(x[i].length - 1,1);
        }
        $("#tb > tbody").innerHTML += "<tr><td>"+x[i].join(" ")+"</td>"+ node + "</tr>";
    }
    let head = "<tr><td></td>";
    for(let i = 0;i<y.length;i++){
        if(y[i].last() == 0){
            y[i].splice(y[i].length-1,1);
        }
        head += "<td>"+y[i].join(" ")+"</td>";
    }
    head += "</tr>";
    $("#tb > tbody").innerHTML = head + $("#tb > tbody").innerHTML;
    // console.log("result: ",x,y);
}

function done(){
    let arr = $(".box");
    let _x = [];
    let _y = [];
    for(let i = 0;i < row;i++){
        for(let j = 0; j < col; j++){
            if(_y[j] == undefined){
                _y[j] = [0];
            }
            if(_x[i] == undefined){
                _x[i] = [0];
            }
            // console.log(i+"*"+row+"+"+j +" = " + (i*col + j));
            if(checked(arr[i*col + j])){
                _x[i][_x[i].length -1] += 1;
                _y[j][_y[j].length -1] += 1;
            }
            else {
                if(_x[i].last() != 0){
                    _x[i][_x[i].length] = 0;
                }
                if(_y[j].last() != 0){
                    _y[j][_y[j].length] = 0;
                }
            }
        }
        if(_x[i].last() == 0){
            _x[i].splice(_x[i].length - 1,1);
        }
    }
    for(let i = 0;i<_y.length;i++){
        if(_y[i].last() == 0){
            _y[i].splice(_y[i].length-1,1);
        }
    }
    if(_x.equal(x) && _y.equal(y)){
        alert(true);
        generate();
    }
    else {
        alert(false);
    }
}
function checked(node){
    return node.classList.contains("check");
}