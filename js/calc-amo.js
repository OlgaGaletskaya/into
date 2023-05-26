var length = 6;
var users = 1;
var lenght_plus = "1 месяц";
var rateNum_a =["Базовый", "Расширенный", "Профессиональный"]
var rateNum = rateNum_a[0]
var NRate = 499;
function setUser(){
    if(users<1) {users = 1}; 
    document.getElementById("users").innerHTML = users
    calc();
}

function plusUser(){
    users = users + 1;
    setUser();
}
function plusUser5(){
    users = users + 5;
    setUser();
}
function plusUser10(){
    users = users + 10;
    setUser();
}
function minUser(){
    users = users - 1;
    setUser();
}
function setTime(){
    document.getElementById("length").innerHTML = length;
    document.getElementById("lenght_plus").innerHTML = lenght_plus;
    calc();
}
function minTimemax(){
        length = 18;
        lenght_plus ="7 месяцев";
    
    setTime();
}
function plusTime(){
    if(length == 6)
    {
        length = 10;
        lenght_plus ="3 месяца";

    } else{ 
        length = 18;
        lenght_plus ="7 месяцев";
    }
    setTime();
}
function minTimemin(){
   
    length = 6; 
    lenght_plus ="1 месяц";
    setTime();
}
function minTime(){
    if(
        length == 18 )
        {
            length = 10 
            lenght_plus ="3 месяца";
    
        } else{ 
            length = 6; 
            lenght_plus ="1 месяц";
        }
    setTime();
}
function setRate(){
    var rate=document.getElementsByName('rate');
    for (var i=0;i<rate.length; i++) {
        if (rate[i].checked) {
            NRate=rate[i].value;
            rateNum = rateNum_a[i]
        }
    }
    calc();
}
function calc(){
    result = users*NRate*length
    document.getElementById("result").innerHTML = result+ "₽";
    wh = Math.trunc(result/9990);
    if(wh>0){
        document.getElementById("wh_plus").innerHTML ="Вы получите "+ wh+ "ч. в подарок";
        document.getElementById("wh_plus-res").innerHTML ="Вы получите "+ wh+ "ч. в подарок";
    } else{
        document.getElementById("wh_plus").innerHTML =" ";
        document.getElementById("wh_plus-res").innerHTML =" ";
    }
    document.getElementById("rate").innerHTML = rateNum;
    document.getElementById("time").innerHTML = length + " мес.";
    
    document.getElementById("plus__time").innerHTML = "+ " + lenght_plus ;
    document.getElementById("usersNum").innerHTML = users;
    
}
window.onload = function func(){
    setRate();
    setUser();
    setTime();
    calc();
}
