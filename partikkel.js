let canvas;
let ctx;
let div = document.getElementById("borderSide");
let div2 = document.getElementById("borderSidez");
let button = document.getElementById("button");
let contentDIV = document.getElementById("content");
let exit = document.getElementById("xbutton");
let exit2 = document.getElementById("xbutton2")
let leftMargin = 120;
let topMargin = 20;

let counterLeft = 2;
let counterTop = 2;


let leftMargin2 = 890;
let topMargin2 = 480;

let counterLeft2 = 2;
let counterTop2 = 2;



window.onload = function(){
    canvas = document.getElementById("canvas");
    ctx= canvas.getContext("2d");
    setInterval(draw, 30);
    exit.addEventListener("click", function(){
        console.log("foo");
        div2.style.opacity = 1;
        
    });
    button.addEventListener("click", function(){
        
        let coloring = Math.floor(Math.random() *4) + 1;
        
        if (coloring == 1){
            contentDIV.style.backgroundColor = "blue";
            
        }else if(coloring == 2){
            contentDIV.style.backgroundColor = "red";
        }else if(coloring == 3){
            contentDIV.style.backgroundColor = "green";
        }else if(coloring == 4){
            contentDIV.style.backgroundColor = "yellow";
        };
        
    })
};  

        
function draw(){
    if(leftMargin > 896 || leftMargin < 120){
        counterLeft = counterLeft * (-1);
    };
    if(topMargin > 486 || topMargin < 20){
        counterTop = counterTop * (-1);
    };
    if(leftMargin2 > 896 || leftMargin2 < 120){
        counterLeft2 = counterLeft2 * (-1);
    };
    if(topMargin2 > 486 || topMargin2 < 20){
        counterTop2 = counterTop2 * (-1);
    };
    leftMargin += counterLeft;
    topMargin += counterTop;

    leftMargin2 += counterLeft2;
    topMargin2 += counterTop2;

    div.style.left = String(leftMargin) + "px";
    div.style.top = String(topMargin) + "px";

    div2.style.left = String(leftMargin2) + "px";
    div2.style.top = String(topMargin2) + "px";
};

function click(){
    let coloring = Math.floor(Math.random() *4) + 1

    if (coloring == 1){
        
    }
    

};
        