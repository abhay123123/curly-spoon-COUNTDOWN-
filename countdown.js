const decrease=document.getElementById("decrease");
const increase=document.getElementById("increase");
const reset=document.getElementById("reset");
const label1=document.getElementById("label1")
let count=0;


increase.onclick=function(){

    count++;
    label1.textContent=count;
}

decrease.onclick=function(){
    count--;
    label1.textContent=count;
}
reset.onclick=function(){

    count=0;
    label1.textContent=count;
}