function alert1(){
    alert('let me see ...')
}
function alert2(){
    alert('not okay ...')
}

let ok = document.getElementById('ok');
let cancel = document.getElementById('cancel');
let showDate = document.getElementById('showDate');

ok.addEventListener('click', alert1);
cancel.addEventListener('click', alert2);
showDate.addEventListener('click', function() {
    document.getElementById('emptySpace').innerHTML = "<b>"+Date()+"</b>";
});
showDate.addEventListener('dblclick', function() {
    document.getElementById('emptySpace').innerHTML = '';
});