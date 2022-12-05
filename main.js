
const arrs = [];
var toTal = 0;
let mul=0;
const oPe = [];
let count=0;
let row = 0;
function myFunc(x) {
    var ele = document.createElement("ele");
    var br  = document.createElement("br");
    ele.textContent = x;
    document.getElementById("box").appendChild(ele);
    arrs.push(x);
    count++;
    if(count>=16){
        row++;
        count=0;
        document.getElementById("box").appendChild(br);    
    }
    if(row >= 2){
        var text = document.querySelector("#box");
        console.log(text.style);
    }
}
const node = [];
const newArr = [];
var arrOfNum = [];
function conVert() {
    node[0]=0;
    let pos = 1;
    let count = 0;
    let len = arrs.length;
    for (let i = 0; i < len; i++) {
        if (isNaN(arrs[i]) == true) {
            count++;
        }
    }
    for (let i = 1; i <= (count + 1); i++) {
        if (i == count + 1) {
            node[count + 1] = (len - 1);
            break;
        }
        for (let j = pos; j < len; j++) {
            if (isNaN(arrs[j]) == true) {
                node[i] = j;
                oPe[i-1] = arrs[j];
                pos = j+1;
                break;
            }
        }
    }
    node[count + 1] = len;
    let str = "";
    for (let i = 0; i <= (count + 1); i++) {
        for (let j = node[i]; j < node[i + 1]; j++) {
            str += arrs[j];
            if (j == (node[i + 1] - 1)) {
                newArr[i] = str;    
                str = "";
                break;
            }
            if (arrs[j] == "+" || arrs[j] == "*" || arrs[j] == "÷" || arrs[j] == "-") {
                str = "";
            }
        }
    }
    arrOfNum = newArr.map(str => { return Number(str) });
}   
function reSult() {
    conVert();
    var eLe = document.createElement("ele");
    var x = document.getElementsByClassName("box");
    for (let i = 0; i < arrs.length; i++) {
        if (arrs[0] == '=' || arrs[0] == '+' || arrs[0] == '-' || arrs[0] == '*' || arrs[0] == '÷' || arrs[0] == '=') {
            toTal = "Error";
            break;
        }
        if (isNaN(arrs[i]) == true && isNaN(arrs[i + 1]) == true) {
            eLe.textContent = "Error!";
            toTal = "Error";
            break;
        }
    }
    //devine first
    var diVine = oPe.indexOf("÷");
    while(diVine!=-1){
         arrOfNum.splice(diVine,2,arrOfNum[diVine]/arrOfNum[diVine+1]);
         oPe.splice(diVine,1);
         diVine = oPe.indexOf("÷");
    }
    //products second 
    var proDuct = oPe.indexOf("*");
    while (proDuct!=-1){
        arrOfNum.splice(proDuct,2,arrOfNum[proDuct]*arrOfNum[proDuct+1]);
        oPe.splice(proDuct,1); 
        proDuct = oPe.indexOf("*");
    }
    //add third
    var adDition = oPe.indexOf("+");
    while(adDition!=-1){
        arrOfNum.splice(adDition,2,arrOfNum[adDition]+arrOfNum[adDition+1]);
        oPe.splice(adDition,1);
        adDition  = oPe.indexOf("+");
    }
    //sub fourth
    var sub = oPe.indexOf("-");
    while(sub!=-1){
        arrOfNum.splice(sub,2,arrOfNum[sub]-arrOfNum[sub+1]);
        oPe.splice(sub,1);
        sub = oPe.indexOf("-");
    }
    // array is narrowed to have only one element, thats is result.
    toTal=arrOfNum[0];
    let fiNal = arrs.join("");
    eLe.textContent = "=" + toTal;
    document.getElementById("box").appendChild(eLe);
}
function clearEach() {
    arrs.length = 0;
    toTal = 0;
    var x = document.getElementById("box");
    x.removeChild(x.firstElementChild);
    console.log(toTal);
}
function clearAll() {
    let len = arrs.length + 2;
    for (let i = 0; i < len; i++) {
        clearEach();
    }
}
