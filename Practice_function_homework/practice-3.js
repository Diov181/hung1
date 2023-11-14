// Viết hàm solveEquation() để giải phương trình 
// bậc nhất ax + b = 0 với a và b là 2 tham số đầu vào.
function solveEquation(a, b) {
   if (a === 0){
    if (b === 0){
        console.log(`Infinite`);
    }else {
        console.log(`No solution`);
    }
   }else {
    const solution = -b / a;
    console.log(`Solution: `, solution);
   }
}

solveEquation(2, -4);
solveEquation(0, 0);
solveEquation(0, -4);