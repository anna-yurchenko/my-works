var bar = new ProgressBar.Circle(container, {
    strokeWidth: 3
    , duration: 3500
    , color: '#FFF'
    , svgStyle: null
});
bar.animate(1.0);
let figure = document.getElementById('number');
let number = +figure.innerHTML;
let load = setInterval(function () {
    number++;
    figure.innerHTML = number;
    if (number === 100) {
        clearInterval(load);
    }
}, 35)