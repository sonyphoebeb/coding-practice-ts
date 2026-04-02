let minChargeReq: number = 5;
let systems: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function minLaptopChargeReq(): number {
    let count: number = 0;
    for (let charge of systems) {
        if (charge >= minChargeReq) {
            count++;
        }
    }
    return count;
}

console.log(minLaptopChargeReq());
