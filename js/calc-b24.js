var length = document.getElementById("rate__time").value;
var users = 5;
var rateNum_a =[["Базовый", "5", "24 Гб"], ["Стандартный", "50", "100 Гб"], ["Профессиональный", "100", "1024 Гб"], ["Энтерпрайз", "250", "3 Тб"]]
var rateNum = rateNum_a[0]
var NRate = 499;
function setTime(){
    length = document.getElementById("rate__time").value;

    result();
}
function setRate(){
    var rate=document.getElementsByName('rate');
    for (var i=0;i<rate.length; i++) {
        if (rate[i].checked) {
            NRate=rate[i].value;
            rateNum = rateNum_a[i][0];
            
            document.getElementById("usersNum").innerHTML = "до " + rateNum_a[i][1];
        }
    }

    document.getElementById("rate").innerHTML = rateNum;

    result();
}
function result(){
    if(document.getElementById("rate__time").value == "12"){
    document.getElementById("result").innerHTML = NRate * length*0.8;
    }else{
        document.getElementById("result").innerHTML = NRate *length;
    }
    if(length==1){
    document.getElementById("time").innerHTML = "на 1 месяц"
    } else {
        if(length==3){
        document.getElementById("time").innerHTML = "на 3 месяца"
        }else{
            document.getElementById("time").innerHTML = "на год"
        }
    }
}


function calc24(){
    var rate=document.getElementsByName('rate');
    if(document.getElementById("rate__num24").value=="250"){
        document.getElementById("rate__price24").innerHTML = "33990₽";
        document.getElementById("rate__volume24").innerHTML = "3 Тб";
        rateNum_a[3]=["Энтерпрайз", "250", "3 Тб"]
        rate[3].value="33990"

    }else{
        if(document.getElementById("rate__num24").value=="500"){
            document.getElementById("rate__price24").innerHTML = "59990₽";
            document.getElementById("rate__volume24").innerHTML = "5 Тб";
            rateNum_a[3]=["Энтерпрайз", "500", "5 Тб"]
            rate[3].value="59990"

        }else{
            document.getElementById("rate__price24").innerHTML = "99990₽";
            document.getElementById("rate__volume24").innerHTML = "10 Тб";
            rateNum_a[3]=["Энтерпрайз", "1000", "10 Тб"]
            rate[3].value="99990"
        }
    }
    setRate();
    result();
}
