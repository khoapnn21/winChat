function sendMess() {
    let contentMess = document.getElementById("textMess").value
    if(contentMess === '') return;
    
    let newWin = window.open("https://github.com/khoapnn21/windowMess/subIndex", "subIndex")
    newWin.postMessage(contentMess, "https://github.com/khoapnn21/windowMess/subIndex");	


};

window.addEventListener("message", parentDisplay,false );

function parentDisplay(e) {
    if (e.origin !== "https://github.com/khoapnn21/windowMess") return;
    document.getElementById("displayMsg").innerHTML += e.data  ;
    
}
 




