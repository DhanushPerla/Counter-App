let count=0;
const Counter =document.getElementById("Counter");
const Increase =document.getElementById("Increase");
const Decrease =document.getElementById("Decrease");
const Reset=document.getElementById("Reset");
function updatecounter(){
    Counter.innerText=count;
}
Increase.addEventListener("click",function(){
    count++;
    updatecounter();
});
Decrease.addEventListener("click",function(){
   if(count>0){
     count--;}
     else{
        console.log('Counter can not go to negetive value');
     }
    updatecounter();
});
Reset.addEventListener("click",function(){
    count=0;
    updatecounter();
});