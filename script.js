function alert1() {
    alert('let me see ...')
}
function alert2() {
    alert('not okay ...')
}

let ok = document.getElementById('ok');
let cancel = document.getElementById('cancel');
let showDate = document.getElementById('showDate');
let light = document.getElementById('light');

ok.addEventListener('click', alert1);
cancel.addEventListener('click', alert2);
showDate.addEventListener('click', function () {
    document.getElementById('emptySpace').innerHTML = "<b>" + Date() + "</b>";
});
showDate.addEventListener('dblclick', function () {
    document.getElementById('emptySpace').innerHTML = '';
});
light.addEventListener('click', function (e) {
    let container = document.getElementsByClassName('container')[0]; 
    if (container.classList.contains('toggleOn')) { 
        container.classList.replace('toggleOn', 'toggleOff'); 
    } 
    else if(container.classList.contains('toggleOff')) { 
        container.classList.replace('toggleOff', 'toggleOn'); 
    } 
    else { 
        container.classList.add('toggleOn'); 
    }
});
let borderColor = 'white'
let allFlexItem = document.getElementsByClassName('flex-item')
for (i = 0 ; i<allFlexItem.length ; i++) {    
    allFlexItem[i].style.border = '2px solid ${borderColor}'
}
ok.addEventListener('mouseenter', function(e){
    ok.style.backgroundColor = 'darkblue'
})
ok.addEventListener('mouseleave', function(e){
    ok.style.backgroundColor = 'skyblue'
})
cancel.addEventListener('mouseenter', function(e){
    cancel.style.backgroundColor = 'darkorange'
})
cancel.addEventListener('mouseleave', function(e){
    cancel.style.backgroundColor = 'orange'
})
showDate.addEventListener('mouseenter', function(e){
    showDate.style.backgroundColor = 'rgb(121, 118, 71)'
})
showDate.addEventListener('mouseleave', function(e){
    showDate.style.backgroundColor = 'darkkhaki'
})