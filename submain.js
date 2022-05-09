let message = localStorage.getItem('data') ?? '{}';
let storeMess = Object.assign(JSON.parse(message)) ;
let displayMsg = document.getElementById('subDisplayMsg')
let screen = document.getElementById('subsCreen')
let submit = document.getElementById('subSubmit')
let input = document.getElementById('subTextMess')
input.focus()
let nameWin = window.name
let deleteStorage = document.getElementById('subDelete')
function scrollBottom() {
    screen.scrollTop = screen.scrollHeight
}

function getMess() {
    let storage = JSON.parse(localStorage.getItem('data'))
    for(let key in storage) {
        renderMess( storage[key][0], storage[key][1])
    }    
    scrollBottom()
}
getMess()

function renderMess(value, nameWin) {
    if(nameWin == 'index') {
        displayMsg.innerHTML +=`<br> <span style='background: yellow; float: left;'>${value}</span>` ;   
    }else {
        displayMsg.innerHTML +=`<br> <span style='background: blue; float: right;'>${value}</span>` ;   

    }  
}

function setMess() {
    let eValue = input.value
    if(eValue === '') return;
    storeMess[Object.keys(storeMess).length] = [eValue, nameWin ]   
    localStorage.setItem('data', JSON.stringify(storeMess))   
    renderMess(eValue, nameWin)
    sendMess(eValue)
}

submit.addEventListener('click', setMess)

deleteStorage.onclick = function() {
    localStorage.clear();
    location.reload()
}

function sendMess(value) {  
    let newWin = window.open('https://khoapnn21.github.io/winChat')    
    newWin.postMessage(value, 'https://khoapnn21.github.io/winChat')

}

window.addEventListener('message', function(e) {
    if(e.origin != 'https://khoapnn21.github.io/winChat') return
    renderMess(e.data, nameWin)
    scrollBottom()
});
