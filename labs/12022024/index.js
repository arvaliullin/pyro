function calculate() {
    const a1 = Number(document.querySelector('#n1').value);
    const b1 = Number(document.querySelector('#n2').value);
    const c1 = Number(document.querySelector('#n3').value);
    const a2 = Number(document.querySelector('#n4').value);
    const b2 = Number(document.querySelector('#n5').value);
    const c2 = Number(document.querySelector('#n6').value);

    const d = a1 * b2 - b1 * a2;
    const dx = c1 * b2 - b1 * c2;
    const dy = a1 * c2 - c1 * a2;
    const x = dx / d;
    const y = dy / d;

    document.querySelector('#result1').value = x;
    document.querySelector('#result2').value = y;
}
