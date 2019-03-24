let btn = document.getElementsByTagName('p');
let cont = document.getElementsByClassName('container');
btn[0].addEventListener('click', function () {
    cont[0].style.display = 'flex';
    cont[1].style.display = 'none';
})
btn[1].addEventListener('click', function () {
    cont[1].style.display = 'flex';
    cont[0].style.display = 'none';
})
let bg = document.getElementsByClassName('segment');
for (let i = 0; i < bg.length; i++) {
    bg[i].addEventListener('click', function () {
        document.body.style.background = bg[i].style.background;
    })
}