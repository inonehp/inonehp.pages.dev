// v.1.0.0

function hlwClassAdd(name){

let elementNumb = document.getElementsByClassName(name).length;
let i = 0;
while (i < elementNumb) {
document.getElementsByClassName(name)[i].classList.add("lHighlight");

i++;
}

}


function hlwClassRemove(name){

let elementNumb = document.getElementsByClassName(name).length;
let i = 0;
while (i < elementNumb) {
document.getElementsByClassName(name)[i].classList.remove("lHighlight");
i++;
}

}
