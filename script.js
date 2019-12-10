let start = new Date().getTime();
// console.log(start);

// function generateRandomColor(){
//     let r = Math.floor(Math.random()*256);
//     let g = Math.floor(Math.random()*256);
//     let b = Math.floor(Math.random()*256);

//     let color = "RGB(" + r + ", " + g + ", " + b + ")";
//     return color;
// }

function showShape(){
    let shape = document.getElementById("shape");
  
    // // make random color
    // // const colors []
    // shape.style.backgroundColor = generateRandomColor();

    let side = Math.random()*100 + 50;
    shape.style.height = side + "px";
    shape.style.width = side + "px";

    const screenHeight = window.screen.height;
    const screenWidth = window.screen.width;   

    let t = Math.random() * (screenHeight - 300 - 150);  
    // 100 is text at top, 150 is max size of shape
    let l = Math.random() * (screenWidth - 50);
    shape.style.top = t + "px";
    shape.style.left = l + "px";

//     // change shape
//     if (Math.random() > 0.5){
//         shape.style.borderRadius = "50%";
//     }    else { 
//         shape.style.borderRadius = "0";
//     }
    
    shape.style.display = "block";
    start = new Date().getTime();

}

function appearAfterDelay(){
    setTimeout(showShape, Math.random() * 300);
}

appearAfterDelay();

document.getElementById("shape").onclick = function() {
    document.getElementById("shape").style.display = "none";
    let end = new Date().getTime();
    // console.log(end);
    let duration = (end - start)/1000;
    // console.log(duration);
    document.getElementById("timeTaken").innerHTML = duration + "s";
    // showShape();
    appearAfterDelay();
};