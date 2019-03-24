let n;
document.write(`<table style="border: 2px solid black">`);
for (let i = 1; i <= 9; i++) {
    document.write(`<tr>`);
    for (let j = 2; j <= 9; j++) {
        n = i * j;
        document.write(`<td style="border: 1px solid black; width: 100px; height: 50px; text-align: center">${i}*${j} = ${n}</td>`);
    }
    document.write(`</tr>`);
}
document.write(`</table>`);