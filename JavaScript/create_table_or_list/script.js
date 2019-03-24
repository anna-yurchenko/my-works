let getClass = x => document.getElementsByClassName(x);
let getName = x => document.getElementsByName(x);
let edt = getClass('edit');
let save = getClass('save');
let txtArea = getClass('txtArea');
let txtBtn = getClass('button1');
let txt = getClass('container');
let content = getClass('content');
//edit button opening the code editing field
edt[0].addEventListener('click', function () {
        stylePanel[0].style.display = 'none';
        content[0].style.display = 'flex';
        txtArea[0].value = txt[0].innerHTML;
    })
    //save button to save the changes in the code
save[0].addEventListener('click', function () {
    txt[0].innerHTML = txtArea[0].value;
    content[0].style.display = 'none';
})
let style = getClass('style');
let stylePanel = getClass('stylePanel');
//button to open the style changong panel
style[0].addEventListener('click', function () {
    content[0].style.display = 'none';
    stylePanel[0].style.display = 'block';
})
let radio = getName('fsize');
//radio buttons to choose font size
for (let i = 0; i < radio.length; i++) {
    radio[i].addEventListener('click', function () {
        if (radio[i].checked) {
            txt[0].style.fontSize = radio[i].value;
        }
    })
}
let ffamily = getName('ffamily');
//dropdown list to choose the font family
ffamily[0].addEventListener('change', function () {
    for (let i = 0; i < ffamily[0].options.length; i++) {
        if (ffamily[0].options[i].selected) {
            txt[0].style.fontFamily = ffamily[0].options[i].value;
        }
    }
})
let txtcol = getName('txtcol');
let colours = getClass('colours');
let optioncol = getClass('colopt');
let check = true;
//function that changes the colour of text or background
function col() {
    for (let i = 0; i < optioncol.length; i++) {
        optioncol[i].addEventListener('click', function () {
            if (check) {
                txt[0].style.color = optioncol[i].style.background;
            }
            else {
                txt[0].style.background = optioncol[i].style.background;
            }
            colours[0].style.display = 'none';
        })
    }
}
//button that opens the colour options square for text
txtcol[0].addEventListener('click', function () {
    colours[0].style.display = 'flex';
    col();
    check = true;
})
let bgcol = getName('bgcol');
//button that opens the colour options square for the background
bgcol[0].addEventListener('click', function () {
    colours[0].style.display = 'flex';
    col();
    check = false;
})
let checkStyle = getName('checkStyle');
//two checkboxes to make text bold or italic
checkStyle[0].addEventListener('click', function () {
    if (checkStyle[0].checked) {
        txt[0].style.fontWeight = checkStyle[0].value;
    }
    else {
        txt[0].style.fontWeight = 'normal';
    }
})
checkStyle[1].addEventListener('click', function () {
    if (checkStyle[1].checked) {
        txt[0].style.fontStyle = checkStyle[1].value;
    }
    else {
        txt[0].style.fontStyle = 'normal';
    }
})
let add = getClass('add');
//add button to add a table or a list to the existing content
add[0].addEventListener('click', function () {
    txt[0].style.display = 'none';
    txt[1].style.display = 'block';
    edt[0].style.display = 'none';
    style[0].style.display = 'none';
    txt[2].style.display = 'none';
    hidden[0].innerHTML = "";
    if (createOptn[0].checked == false && createOptn[1].checked == false) {
        table[0].style.display = 'none';
        list[0].style.display = 'none';
    }
})
let table = getClass('tbl');
let createOptn = getName('optn');
let list = getClass('list');
//radio buttons that open the field for creating a table or a list
createOptn[0].addEventListener('click', function () {
    table[0].style.display = 'block';
    list[0].style.display = 'none';
})
createOptn[1].addEventListener('click', function () {
    table[0].style.display = 'none';
    list[0].style.display = 'block';
})
let createTable = getClass('createTable');
let hidden = getClass('hidden');
//button to create a table which reads all the entered by user parameters, creates table, clears all the fields, opens the content editing area
createTable[0].addEventListener('click', function () {
    let newTable = document.createElement('table');
    for (let i = 1; i <= getName('tblparam')[0].value; i++) {
        let row = document.createElement('tr');
        for (let j = 1; j <= getName('tblparam')[1].value; j++) {
            let column = document.createElement('td');
            column.textContent = "TD";
            row.appendChild(column);
            column.style.width = getName('tblparam')[2].value + "px";
            column.style.height = getName('tblparam')[3].value + "px";
            column.style.border = getName('tblparam')[4].value + "px" + " " + getName('brdType')[0].value + " " + getName('brdCol')[0].value;
        }
        newTable.appendChild(row);
    }
    hidden[0].appendChild(newTable);
    txtArea[0].value += hidden[0].innerHTML;
    getName('tblparam')[0].value = "";
    getName('tblparam')[1].value = "";
    getName('tblparam')[2].value = "";
    getName('tblparam')[3].value = "";
    getName('tblparam')[4].value = "";
    getName('brdType')[0].options[0].selected = true;
    getName('brdCol')[0].options[0].selected = true;
    txt[0].style.display = 'block';
    txt[1].style.display = 'none';
    edt[0].style.display = 'inline';
    style[0].style.display = 'inline';
    txt[2].style.display = 'block';
    createOptn[0].checked = false;
})
let createList = getClass('createList');
//button to create a list which reads all the entered by user parameters, creates list, clears all the fields, opens the content editing area
createList[0].addEventListener('click', function () {
    let newList = document.createElement('ul');
    for (let i = 1; i <= getName('listparam')[0].value; i++) {
        let listItem = document.createElement('li');
        listItem.style.listStyleType = getName('listparam')[1].value;
        listItem.textContent = "item" + i;
        newList.appendChild(listItem);
    }
    hidden[0].appendChild(newList);
    txtArea[0].value += hidden[0].innerHTML;
    getName('listparam')[0].value = "";
    getName('listparam')[1].options[0].selected = true;
    createOptn[1].checked = false;
    txt[0].style.display = 'block';
    txt[1].style.display = 'none';
    edt[0].style.display = 'inline';
    style[0].style.display = 'inline';
    txt[2].style.display = 'block';
})