let button=document.querySelector("button")
button.addEventListener("click",handleClick)

function handleClick(e){
e.preventDefault()
let myregEx=/\d/ig
let texter=document.getElementById("for_text")
let userInput=texter.value  //string
let check=userInput.match(myregEx) 
let array=Array.from(check)
console.log(array)

function highlightIntersections(userInput,array){
let highlightedString=""
for(const element of userInput){
     if(array.includes(element)){
   highlightedString +=`<span style="color: red" >${element}</span>`
    }
    else {
    highlightedString += `<span style="color:black" >${element}</span>` 
}
}
return highlightedString
}

const highlightedResult=highlightIntersections(userInput,array)
let displayer=document.getElementById("show_text")
displayer.innerHTML=highlightedResult
}







