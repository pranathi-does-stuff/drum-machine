const buttons = document.querySelectorAll(".drum-pad");
buttons.forEach((btn)=>{
  btn.addEventListener("click", ()=>{handleClick(btn)});
});
const display = document.getElementById("display");
const body = document.querySelector("body");
const keys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
function handleClick(btn){
  //handle effect
  btn.classList.add(btn.innerText); 
  const audio = document.getElementById(btn.innerText);
  audio.play();
  setTimeout(()=>{btn.classList.remove(btn.innerText)}, 400);
  //play sound
  
  //display what was played
  display.innerText = btn.id.replaceAll("-", " ");
}

function handleKey(event){
  const btn = document.querySelector(`button:has(#${event.key.toUpperCase()})`);
  handleClick(btn);
  
  
}

document.addEventListener("keydown", (event) => {handleKey(event)});


