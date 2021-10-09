function  gridsetup(){
let box = document.getElementById('board');
let squared = box.getElementsByTagName('div');
    for (var i = 0; i < squared.length; i++) {
       squared[i].className = "square";
    }
let squares= document.getElementsByClassName('square');
}

window.onload = function(){
    gridsetup(); 
}

