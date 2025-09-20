button1= document.querySelector("#one")
button2= document.querySelector("#two")
c=document.querySelector(".counter  p")
function incClick(){
    let counter= parseInt(c.textContent)
    counter++
    c.textContent= counter
}

function zeroC(){
    c.innerHTML=0
}
button1.addEventListener("click", incClick)

button2.addEventListener("click",zeroC)