function calc() {
    var length = Number(document.getElementById("length").value);
    var rate=document.getElementsByName('rate');
    for (var i=0;i<rate.length; i++) {
        if (rate[i].checked) {
            NRate=rate[i].value;
        }
    }
    if(Number(document.getElementById("users").value)<1){
        document.getElementById("users").value = 1;
    }
    
    var users = Number(document.getElementById("users").value);
    result = users*NRate*length

    document.getElementById("result").innerHTML = result;
    wh = Math.trunc(result/9990);
    console.log(wh)
    if(wh>0){
        document.getElementById("wh_plus").innerHTML ="Вы получите "+ wh+ "ч. в подарок";
    }

}
window.onload = calc()


function plusUser(){
    document.getElementById("users").value =Number(document.getElementById("users").value) + +1;
    calc();
}
function minUser(){
    if(Number(document.getElementById("users").value)>1){
        document.getElementById("users").value =Number(document.getElementById("users").value) - +1;
        calc();
    }
}


function plusTime(){
    if(Number(document.getElementById("length").value) == 6)
    {
        document.getElementById("length").value = 10;
        document.getElementById("lenght_plus").innerHTML ="3 месяца";

    } else{ 
        document.getElementById("length").value = 18;
        document.getElementById("lenght_plus").innerHTML ="7 месяцев";
    }
    calc();
}
function minTime(){
    if(
        Number(document.getElementById("length").value) == 18 )
        {
            document.getElementById("length").value = 10 
            document.getElementById("lenght_plus").innerHTML ="3 месяца";
    
        } else{ 
            document.getElementById("length").value = 6; 
            document.getElementById("lenght_plus").innerHTML ="1 месяц";
        }
    calc();
}