'use strict';

const wageInput = document.getElementById('wage');
const transInput = document.getElementById('transEx');
const halfInput = document.getElementById('half');
const allInput = document.getElementById('all');
const calculateButton = document.getElementById('calculate');

const resultDivided = document.getElementById('result-area');

calculateButton.onclick = () => {
    const wAge = wageInput.value;
    const tranS = transInput.value;
    const hAlf = halfInput.value;
    const aLl = allInput.value;

    if (!(wAge.match(/^[0-9]+$/)) || !(tranS.match(/^[0-9]+$/)) || !(hAlf.match(/^[0-9]+$/)) || !(aLl.match(/^[0-9]+$/))) {
        return;
    }

    if ((wAge === '0') || (hAlf === '0') && (aLl === '0')) {
        return;
    }

    resultDivided.innerText = '';

    const reHeaderDivided = document.createElement('div');
    reHeaderDivided.setAttribute('class', 'result-header');
    reHeaderDivided.innerText = "今月のあなたの給料は、";

    const reBodyDivided = document.createElement('div');
    reBodyDivided.setAttribute('class', 'result-body');

    const salary = document.createElement('h1');
    salary.setAttribute('id', 'result-logo');
    const result = calculate(wAge, tranS, aLl, hAlf);
    salary.innerText = result;
    reBodyDivided.appendChild(salary);

    const reHeaderDividedF = document.createElement('div');
    reHeaderDividedF.setAttribute('class', 'result-headerF');
    reHeaderDividedF.innerText = "円です";

    const copy = document.createElement('button');
    copy.setAttribute('class', 'copyButton');
    copy.setAttribute('onclick', 'copyToClipBoard()');
    copy.innerText = "Copy result";


    resultDivided.appendChild(reHeaderDivided);
    resultDivided.appendChild(reBodyDivided);
    resultDivided.appendChild(reHeaderDividedF);
    resultDivided.appendChild(copy);
}    

function copyToClipBoard() {
    let content = document.getElementById('result-logo').innerText;
    
    navigator.clipboard.writeText(content)
        .then(() => {
        console.log("Text copied to clipboard...")
    })
        .catch(err => {
        console.log('Something went wrong', err);
    })
    
    return
}

function calculate(wAge, tranS, aLl, hAlf) {
    let result = null;
    result = Number(wAge) * (Number(aLl) * 7.75 + Number(hAlf) * 4.75) + Number(tranS) * (Number(aLl) + Number(hAlf));
    console.log(result);

    return result;
}
