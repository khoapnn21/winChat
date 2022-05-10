let message = localStorage.getItem('data') ?? '{}';
let storeMess = Object.assign(JSON.parse(message)) ;
let displayMsg = document.getElementById('displayMsg')
let screen = document.getElementById('screen')
let submit = document.getElementById('submit')
let input = document.getElementById('textMess')
input.focus()
window.name = 'index'
let nameWin = window.name
let deleteStorage = document.getElementById('delete')




function getMess() {
    let storage = JSON.parse(localStorage.getItem('data'))
    for(let key in storage) {
        renderMess(storage[key][0], storage[key][1])
    }    
    scrollBottom()
}
getMess()

function renderMess(value, nameWin) {
    if(nameWin == 'index') {
        displayMsg.innerHTML +=`<br> <span style='background: blue; float: right;'>${value}</span>` ;   

    }else {
        displayMsg.innerHTML +=`<br> <span style='background: yellow; float: left;'>${value}</span>` ;   

    }    
}

function setMess() {
    let eValue = input.value
    if(eValue === '') return;

    storeMess[Object.keys(storeMess).length] = [eValue, nameWin]   
    localStorage.setItem('data', JSON.stringify(storeMess))    
    renderMess(eValue, nameWin)
    sendMess(eValue)
}

submit.addEventListener('click', setMess)

function scrollBottom() {
    screen.scrollTop = screen.scrollHeight;
}

deleteStorage.onclick = function() {
    localStorage.clear();
    location.reload()
}

function sendMess(value) {
    let newWin = window.open('https://khoapnn21.github.io/winChat/subIndex', 'subIndex')    
    newWin.postMessage(value, 'https://khoapnn21.github.io/winChat/subIndex')
}

window.addEventListener('message', function(e) {
    if(e.origin != 'https://khoapnn21.github.io/winChat') return
    renderMess(e.data, nameWin)
    scrollBottom()
});
