let boxes=document.querySelectorAll(".box");
let divtohide=document.querySelector(".tohide")
let resetButton=document.querySelector(".resetbutton");
let msgContainer=document.querySelector(".massagecontainer")
let newGame=document.querySelector(".newgame")
let toshowwinner=document.querySelector(".toshowwinner")
let turnO=true;
const outcomes=[
    [0,1,2],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[3,4,5],[6,7,8],[2,4,6]
];
 const disable=()=>{
    for(box of boxes) {
     box.disabled=true;
    };
 };
 const enable=()=>{
    for(box of boxes) {
     box.disabled=false;
     box.innerText="";
    };
 };
 const showWinner=(winner) =>{
    toshowwinner.innerText=(`Congratulation on winning ${winner}`);
    msgContainer.classList.remove("hide");
    disable();
 };
boxes.forEach((box) => {
box.addEventListener("click", ()=>{
    if(turnO===true) {
        console.log("button was clicked");
        box.innerText="O";
        turnO=false;
    }
    else{
        box.innerText="X";
        turnO=true;
    }
    box.disabled=true;
    checkWinner();    
});
});

const checkWinner =() =>{
 for (let pattern of outcomes){
    // console.log(pattern[0],pattern[1],pattern[2]);
     let var1=boxes[pattern[0]].innerText;
     let var2=boxes[pattern[1]].innerText;
     let var3=boxes[pattern[2]].innerText;
     if(var1!=""&& var2!="" && var3!=""){
        if(var1===var2 && var2===var3){
           console.log(`winner is ${var1}`) 
           
           showWinner(var1);
           return true;
          

        }}
     };
 };
 const resetGame=()=>{
  turnO=true;
  enable();
  msgContainer.classList.add("hide");
};
resetButton.addEventListener("click",resetGame);
newGame.addEventListener("click",resetGame);