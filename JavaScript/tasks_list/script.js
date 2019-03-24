let task = document.getElementsByClassName('task');
let check = document.getElementsByName('check');
let button = document.getElementsByClassName('btn');
button[0].addEventListener('click', function () {
    if (document.getElementsByClassName('input')[0].value != '') {
        let newTask = document.createElement('div');
        newTask.classList.add('task');
        let newInput = document.createElement('input');
        newInput.type = 'checkbox';
        newInput.name = 'check';
        newTask.appendChild(newInput);
        let newTxt = document.createElement('span');
        newTxt.classList.add('taskText');
        newTxt.innerHTML = document.getElementsByClassName('input')[0].value;
        newTask.appendChild(newTxt);
        document.getElementsByClassName('half')[0].appendChild(newTask);
        document.getElementsByClassName('input')[0].value = '';
        ddd()
    }
})
let l = check.length;
for (let i = 0; i < l; i++) {
    check[i].addEventListener('click', function () {
        this.parentNode.remove()
    })
}

function ddd() {
    let check2 = document.getElementsByName('check');
    console.log(check2.length)
    let m = check2.length;
    for (let i = 0; i < m; i++) {
        check[i].addEventListener('click', function () {
            this.parentNode.remove()
        })
    }
}