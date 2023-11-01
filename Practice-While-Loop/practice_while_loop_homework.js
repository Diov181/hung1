// Bài 1
for (let i = 1500; i <= 2700; i++) {
    if (i % 5 == 0 && i % 7 == 0) {	
        console.log(i);
	}
}

// Bài 2
let btnAction = document.getElementById("btn-action");

btnAction.addEventListener('click', () => {
    let n = parseInt(document.getElementById("n").value);

    for (let i1 = 1; i1 < n; i1++) {
        
        if (i1 % 3 == 0 && i1 % 7 == 0){
            console.log("javascript");

        } else if (i1 % 3 == 0) {
            console.log("javas");
            
        } else if (i1 % 7 == 0) {
            console.log("script");

        }  else {
        console.log(i1);
    }
    }
})

