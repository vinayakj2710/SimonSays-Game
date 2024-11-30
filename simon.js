// let form = document.querySelector('form');
// let body = document.querySelector('body');
// let input = document.querySelectorAll('input');

// let dltBtn = document.createElement('button');
// let ul = document.querySelector('ul');


// body.append(ul);

// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     // for(inp of input){
//     //     console.log(inp.value);
//     //     h1.innerText=inp.value;
//     // }
//     addItem(input);
//     input[0].value = "";
// })

// function addItem (inp) {
//     let li = document.createElement('li');
    
//     li.innerText=(inp[0].value);

//     dltBtn.innerText="Delete";
//     li.appendChild(dltBtn);
//     ul.appendChild(li);

// }

// dltBtn.addEventListener('click', function() {
//     let par = dltBtn.parentElement;
//     par.remove();
// })

let gameSeq = [];
let playerSeq = [];
let body = document.querySelector('body');

let h2= document.querySelector('h2');
let colorBlocks = document.querySelectorAll('.btn');
let startBtn = document.querySelector('.starter');

let colors = ['red', 'yellow', 'blue', 'green'];

let level = 0;
let started = false;

startBtn.addEventListener("click", function () {
    if(started == false){
        gameSeq= [];
        console.log("game started");
        started = true;
        startBtn.classList.remove('err');
        startBtn.innerText = "Let's Go!!!";
    }

    setTimeout(levelUp,1000);
})

function flash (btn) {
    btn.classList.add('flash');
    setTimeout(()=>{
        btn.classList.remove('flash');
    },300)
}

function levelUp (){
    playerSeq=[];
    level++;
    h2.innerText=`Level - ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = colors[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    flash(randBtn);
    gameSeq.push(randColor);

};

function check (idx) {
    // let idx = level-1;
    if(gameSeq[idx] === playerSeq[idx]){
        if(gameSeq.length === playerSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerText=`Game over, Your score is - ${gameSeq.length-1}`;
        startBtn.classList.add("err");
        startBtn.innerText = "RESET";
        started = false;
        level = 0;
        body.style.backgroundColor= "red";
        setTimeout(()=>body.style.backgroundColor= "white",300)
    }
}

function btnPress () {
    let btn = this;
    flash(btn);
    let playerColor = btn.getAttribute('id');
    playerSeq.push(playerColor);

    check(playerSeq.length-1);
}

let btns = document.querySelectorAll('.btn');
for(btn of btns){
    btn.addEventListener("click", btnPress);
}