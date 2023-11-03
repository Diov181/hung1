// Bài 1
let btnAction1 = document.getElementById("btn-action1");
btnAction1.addEventListener('click', () => {
    let n1 = parseInt(document.getElementById("n1").value);
    let sum = 0;
    
    for (let i1 = 0; i1 <= n1; i1 += 2) {
        sum += i1;
    }
    console.log(sum);
})

// Bài 2
let btnAction2 = document.getElementById("btn-action2");
btnAction2.addEventListener('click', () => {
    let n2 = parseInt(document.getElementById("n2").value);
    let eLem2 = 1;

    for (let i2 = 1; i2 <= n2; i2 += 1){
        eLem2 *= i2;
    }
    console.log(eLem2);
})

// Bài 3

let btnAction3 = document.getElementById("btn-action3");
btnAction3.addEventListener('click', () => {
    let nDauTien = parseInt(document.getElementById("n-dautien").value);
    let nCongSai = parseInt(document.getElementById("n-congsai").value);
    let eLem3 = 0

    for (let i3 = 0; i3 < 10; i3 += 1) {
        eLem3 = nDauTien + i3 * nCongSai;
        console.log(eLem3);
    }
    
})

// Bài 4

let btnAction4 = document.getElementById("btn-action4");
btnAction4.addEventListener('click', () => {
    let n4 = parseInt(document.getElementById("n4").value);
    let sum = 0;

    for (let i4 = 1; i4 <= 10; i4 += 1){
        sum = n4 * i4;
        console.log(`${n4} x ${i4} = ${sum}`);
    }
})

// Bài 5

let btnAction5 = document.getElementById("btn-action5");
btnAction5.addEventListener('click', () => {
    let n5 = parseFloat(document.getElementById("n5").value);
    let sum = 0;

    for (let i5 = 1; i5 < n5; i5 += 1) {  
        if (n5 % i5 == 0) {
            sum += i5;
        }
    }

        if (sum == n5) {
            console.log(`Số nguyên ${n5} là số hoàn hảo`);
        } else {
            console.log(`Số nguyên ${n5} không phải là số hoàn hảo`);
        }
    
})