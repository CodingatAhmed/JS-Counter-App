const Increase = document.getElementById("plus1");
const Decrease = document.getElementById("minus1");
const Reset = document.getElementById("resetTo0");

let count = 0;

Increase.addEventListener("click", ()=>{
    count = count + 1;
    counter.innerHTML = count;
});
Decrease.addEventListener("click", ()=>{
    count = count - 1;
    counter.innerHTML = count;
    
});
Reset.addEventListener("click", ()=>{
    count = 0
    counter.innerHTML = count;
    
});
