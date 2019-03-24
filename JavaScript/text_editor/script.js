let getId = x => document.getElementById(x);
let getClass = x => document.getElementsByClassName(x);
let getName = x => document.getElementsByName(x);
let txtArea = getClass('txtArea');
getClass('bold')[0].addEventListener('click', function () {
    txtArea[0].classList.toggle('bold');
})
getClass('italic')[0].addEventListener('click', function () {
    txtArea[0].classList.toggle('italic');
})
getClass('undlnd')[0].addEventListener('click', function () {
    txtArea[0].classList.toggle('undlnd');
})
getClass('crossed')[0].addEventListener('click', function () {
    txtArea[0].classList.toggle('crossed');
})
getId('left').addEventListener('click', function () {
    txtArea[0].style.textAlign = 'left';
})
getId('center').addEventListener('click', function () {
    txtArea[0].style.textAlign = 'center';
})
getId('right').addEventListener('click', function () {
    txtArea[0].style.textAlign = 'right';
})
getId('fontType').addEventListener('click', function () {
    getClass('dropdownFont')[0].classList.toggle('displayBlock');
})
for (let i = 0; i < getClass('fontOptions').length; i++) {
    getClass('fontOptions')[i].addEventListener('click', function () {
        txtArea[0].style.fontFamily = getClass('fontOptions')[i].innerHTML;
    })
}
getId('fontSize').addEventListener('click', function () {
    getClass('dropdownSize')[0].classList.toggle('displayBlock');
})
for (let i = 0; i < getClass('sizeOptions').length; i++) {
    getClass('sizeOptions')[i].addEventListener('click', function () {
        txtArea[0].style.fontSize = getClass('sizeOptions')[i].innerHTML;
    })
}
getId('txtColour').addEventListener('click', function () {
    getClass('colours')[0].style.display = 'flex';
    getClass('fade')[0].style.display = 'block';
})
getClass('fade')[0].addEventListener('click', function () {
    if (getClass('signin')[0].style.display != 'flex') {
        getClass('colours')[0].style.display = 'none';
        getClass('fade')[0].style.display = 'none';
        getClass('background')[0].style.display = 'none';
        getClass('createTable')[0].style.display = 'none';
        getClass('olList')[0].style.display = 'none';
        getClass('ulList')[0].style.display = 'none';
    }
})
for (let i = 0; i < getClass('colourOption').length; i++) {
    getClass('colourOption')[i].addEventListener('click', function () {
        txtArea[0].style.color = getClass('colourOption')[i].style.background;
    })
}
for (let i = 0; i < getClass('bgColourOption').length; i++) {
    getClass('bgColourOption')[i].addEventListener('click', function () {
        txtArea[0].style.background = getClass('bgColourOption')[i].style.background;
    })
}
getClass('colourTab')[0].addEventListener('click', function () {
    getClass('background')[0].style.height = '250px';
    getClass('imageTab')[0].classList.add('inactiveTab');
    getClass('fileTab')[0].classList.add('inactiveTab');
    getClass('colourTab')[0].classList.add('activeTab');
    getClass('imageTab')[0].classList.remove('activeTab');
    getClass('fileTab')[0].classList.remove('activeTab');
    getClass('colourTab')[0].classList.remove('inactiveTab');
    getClass('bgColour')[0].style.display = 'flex';
    getClass('bgImage')[0].style.display = 'none';
    getClass('file')[0].style.display = 'none';
})
getClass('imageTab')[0].addEventListener('click', function () {
    getClass('background')[0].style.height = '250px';
    getClass('imageTab')[0].classList.add('activeTab');
    getClass('fileTab')[0].classList.add('inactiveTab');
    getClass('colourTab')[0].classList.add('inactiveTab');
    getClass('imageTab')[0].classList.remove('inactiveTab');
    getClass('fileTab')[0].classList.remove('activeTab');
    getClass('colourTab')[0].classList.remove('activeTab');
    getClass('bgColour')[0].style.display = 'none';
    getClass('bgImage')[0].style.display = 'flex';
    getClass('file')[0].style.display = 'none';
})
getClass('fileTab')[0].addEventListener('click', function () {
    getClass('background')[0].style.height = '130px';
    getClass('imageTab')[0].classList.add('inactiveTab');
    getClass('fileTab')[0].classList.add('activeTab');
    getClass('colourTab')[0].classList.add('inactiveTab');
    getClass('imageTab')[0].classList.remove('activeTab');
    getClass('fileTab')[0].classList.remove('inactiveTab');
    getClass('colourTab')[0].classList.remove('activeTab');
    getClass('bgColour')[0].style.display = 'none';
    getClass('bgImage')[0].style.display = 'none';
    getClass('file')[0].style.display = 'flex';
})
for (let i = 0; i < getClass('bgImageOption').length; i++) {
    getClass('bgImageOption')[i].addEventListener('click', function () {
        txtArea[0].style.background = getClass('bgImageOption')[i].style.background;
    })
}
getId('bgPicture').addEventListener('click', function () {
    getClass('background')[0].style.display = 'flex';
    getClass('fade')[0].style.display = 'block';
})
getId('signinField').addEventListener('click', function () {
    getClass('signin')[0].style.display = 'flex';
    getClass('fade')[0].style.display = 'block';
})
getClass('loginButton')[0].addEventListener('click', function () {
    if (getClass('login')[0].value != 'admin') {
        getClass('login')[0].style.boxShadow = '0 0 10px rgba(255, 0, 0, 0.3)';
    }
    if (getClass('pass')[0].value != 'admin') {
        getClass('pass')[0].style.boxShadow = '0 0 10px rgba(255, 0, 0, 0.3)';
    }
    if (getClass('login')[0].value == 'admin' && getClass('pass')[0].value == 'admin') {
        getClass('signin')[0].style.display = 'none';
        getClass('fade')[0].style.display = 'none';
        getClass('login')[0].value = '';
        getClass('pass')[0].value = '';
        getClass('login')[0].style.boxShadow = 'none';
        getClass('pass')[0].style.boxShadow = 'none';
    }
})
getId('edit').addEventListener('click', function () {
    getClass('styleTools')[0].style.display = 'none';
    getClass('editTools')[0].style.display = 'block';
    txtArea[0].style.display = 'none';
    getClass('txtAreaEdit')[0].style.display = 'block';
    getClass('txtAreaEdit')[0].value = txtArea[0].innerHTML;
})
getId('save').addEventListener('click', function () {
    txtArea[0].innerHTML = getClass('txtAreaEdit')[0].value;
    getClass('styleTools')[0].style.display = 'block';
    getClass('editTools')[0].style.display = 'none';
    txtArea[0].style.display = 'block';
    getClass('txtAreaEdit')[0].style.display = 'none';
    getClass('hidden')[0].innerHTML = '';
})
getId('table').addEventListener('click', function () {
    getClass('createTable')[0].style.display = 'flex';
    getClass('fade')[0].style.display = 'block';
})
getClass('createTableBtn')[0].addEventListener('click', function () {
    let newTable = document.createElement('table');
    for (let i = 1; i <= getName('tblparam')[0].value; i++) {
        let row = document.createElement('tr');
        for (let j = 1; j <= getName('tblparam')[3].value; j++) {
            let column = document.createElement('td');
            column.textContent = "TD";
            row.appendChild(column);
            column.style.width = getName('tblparam')[1].value + "px";
            column.style.height = getName('tblparam')[4].value + "px";
            column.style.border = getName('tblparam')[2].value + "px" + " " + getName('brdType')[0].value + " " + getName('tblparam')[5].value;
        }
        newTable.appendChild(row);
    }
    getClass('hidden')[0].appendChild(newTable);
    getClass('txtAreaEdit')[0].value += getClass('hidden')[0].innerHTML;
})
getClass('resetTable')[0].addEventListener('click', function () {
    for (let i = 0; i < 6; i++) {
        getName('tblparam')[i].value = '';
    }
    getName('brdType')[0].options[0].selected = true;
})
getId('ol').addEventListener('click', function () {
    getClass('olList')[0].style.display = 'flex';
    getClass('fade')[0].style.display = 'block';
})
getClass('resetlistOl')[0].addEventListener('click', function () {
    getName('olNumber')[0].value = '';
    getName('olType')[0].options[0].selected = true;
})
getClass('createListOl')[0].addEventListener('click', function () {
    let newList = document.createElement('ol');
    for (let i = 1; i <= getName('olNumber')[0].value; i++) {
        let listItem = document.createElement('li');
        listItem.style.listStyleType = getName('olType')[0].value;
        listItem.textContent = "item" + i;
        newList.appendChild(listItem);
    }
    getClass('hidden')[0].appendChild(newList);
    getClass('txtAreaEdit')[0].value += getClass('hidden')[0].innerHTML;
})
getId('ul').addEventListener('click', function () {
    getClass('ulList')[0].style.display = 'flex';
    getClass('fade')[0].style.display = 'block';
})
getClass('resetlistUl')[0].addEventListener('click', function () {
    getName('ulNumber')[0].value = '';
    getName('ulType')[0].options[0].selected = true;
})
getClass('createListUl')[0].addEventListener('click', function () {
    let newList = document.createElement('ul');
    for (let i = 1; i <= getName('ulNumber')[0].value; i++) {
        let listItem = document.createElement('li');
        listItem.style.listStyleType = getName('ulType')[0].value;
        listItem.textContent = "item" + i;
        newList.appendChild(listItem);
    }
    getClass('hidden')[0].appendChild(newList);
    getClass('txtAreaEdit')[0].value += getClass('hidden')[0].innerHTML;
})
getClass('input')[0].addEventListener('change', function () {
    if (this.files && this.files[0]) {
        let reader = new FileReader();
        reader.onload = imageIsLoaded;
        reader.readAsDataURL(this.files[0]);
    }
})

function imageIsLoaded(e) {
    txtArea[0].style.background = "url('" + e.currentTarget.result + "')";
    txtArea[0].style.backgroundRepeat = 'no-repeat';
    txtArea[0].style.backgroundSize = 'cover';
}