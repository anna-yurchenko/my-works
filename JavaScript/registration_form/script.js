let form = document.forms['user'];
let next = document.forms['nextBtn'];
form.check.addEventListener('click', function () {
    if (form.check.checked) {
        if (form.position.value != 'Your position...') {
            next.signIn.disabled = false;
            next.signIn.style.background = 'linear-gradient(to top, #4ebb4e, #93f5a5)';
            form.position.style.boxShadow = 'none';
        }
        else {
            form.position.style.boxShadow = 'rgba(245, 5, 5, 0.8) 0 0 10px';
            next.signIn.disabled = true;
            next.signIn.style.background = 'linear-gradient(to top, #93f5a5, #deffe4)';
        }
    }
    else {
        next.signIn.disabled = true;
        next.signIn.style.background = 'linear-gradient(to top, #93f5a5, #deffe4)';
    }
})
form.position.addEventListener('change', function () {
    if (form.position.value == 'Your position...') {
        form.position.style.boxShadow = 'rgba(245, 5, 5, 0.8) 0 0 10px';
        next.signIn.disabled = true;
        next.signIn.style.background = 'linear-gradient(to top, #93f5a5, #deffe4)';
    }
    else {
        form.position.style.boxShadow = 'none';
        if (form.check.checked == false) {
            next.signIn.disabled = true;
            next.signIn.style.background = 'linear-gradient(to top, #93f5a5, #deffe4)';
        }
        else {
            next.signIn.disabled = false;
            next.signIn.style.background = 'linear-gradient(to top, #4ebb4e, #93f5a5)';
        }
    }
})
let info = document.forms['result'];
let img = document.getElementsByClassName('image');
next.signIn.addEventListener('click', function () {
    let check = true;
    for (let i = 0; i < 3; i++) {
        if (document.getElementsByClassName('inpTxt')[i].value == '') {
            document.getElementsByClassName('inpTxt')[i].style.boxShadow = 'rgba(245, 5, 5, 0.8) 0 0 10px';
            check = false;
        }
    }
    if (check) {
        for (let i = 0; i < 3; i++) {
            document.getElementsByClassName('inpTxt')[i].style.boxShadow = 'none';
        }
        document.getElementsByClassName('startForm')[0].style.display = 'none';
        document.getElementsByClassName('endForm')[0].style.display = 'block';
        for (let i = 0; i < 2; i++) {
            if (document.getElementsByTagName('label')[i].innerHTML == 'male' && form.sex[i].checked) {
                img[0].style.backgroundImage = 'url(images/men-and-women-icons.jpg)';
                img[0].style.backgroundPosition = '-295px -165px';
            }
            else if (document.getElementsByTagName('label')[i].innerHTML == 'female' && form.sex[i].checked) {
                img[0].style.backgroundImage = 'url(images/men-and-women-icons.jpg)';
                img[0].style.backgroundPosition = '0 0';
            }
        }
        document.getElementsByClassName('name')[0].innerHTML = form.fName.value + ' ' + form.lName.value;
        document.getElementsByClassName('inf')[0].innerHTML = form.email.value;
        for (let i = 1; i < form.position.options.length; i++) {
            if (form.position.options[i].selected) {
                document.getElementsByClassName('inf')[1].innerHTML = form.position.options[i].innerHTML;
            }
        }
    }
})
info.goBack.addEventListener('click', function () {
    document.getElementsByClassName('startForm')[0].style.display = 'block';
    document.getElementsByClassName('endForm')[0].style.display = 'none';
    form.reset();
    next.signIn.disabled = true;
    next.signIn.style.background = 'linear-gradient(to top, #93f5a5, #deffe4)';
})