
window.addEventListener("message", subDisplay,false );

function subDisplay(e) {
    
    if (e.origin !== "https://github.com/khoapnn21/windowMess") return;
    document.getElementById("subDisplayMsg").innerHTML += e.data ;
    
}

function sendMess() {
    let contentMess = document.getElementById("subTextMess").value
    if(contentMess === '') return;
    
    let newWin = window.open("https://github.com/khoapnn21/windowMess/index", "index")
    newWin.postMessage(contentMess, "https://github.com/khoapnn21/windowMess/index");	
};
    

    