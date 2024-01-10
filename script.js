let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgamebtn=document.querySelector("#New-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true;

let count=0;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetgame=()=>{
    turn0=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}
let btnclick=true;

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="O";
            turn0=false;
        }else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        count++;
         let isWiner=checkWinner();
         if(count ===9 && !isWiner){
            draw();
         }

         if(box.innerText==="O"){
            box.style.color="red";
         }else{
            box.style.color="blue";
         }

    });
});
const disableBoxes =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner =(winner) =>{
    msg.innerText=`Congartulations , winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();

}

const checkWinner = ()=>{
    for(let pattern of winPatterns){
       let posval1=boxes[pattern[0]].innerText;
       let posval2=boxes[pattern[1]].innerText;
       let posval3=boxes[pattern[2]].innerText;


       if(posval1 !="" && posval2!="" && posval3!=""){
        if(posval1===posval2 && posval2===posval3){
            console.log("winner",posval1);
            showWinner(posval1);
        }
    }
    }
    

}
newgamebtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);


const draw=()=>{
    msg.innerText="there is no winner";
    msgcontainer.classList.remove("hide");
    disableBoxes();
}
