let income=999999;
let tax;
if(income > 5000000){
    tax = ((income - 5000000)*0.35)+1265000
}
else if (income > 2000000) {    
    tax = ((income - 2000000)*0.30)+365000
}
else if(income > 1000000){
    tax = ((income - 1000000)*0.25)+115000
}
else if (income > 750000) {    
    tax = ((income - 750000)*0.20)+65000
}
else if (income > 500000) {    
    tax = ((income - 500000)*0.15)+27500
}
else if (income > 300000) {    
    tax = ((income - 300000)*0.10)+7500
}
else if (income > 150000) {    
    tax = ((income - 150000)*0.05)
}
else{
    tax = 0
}
console.log(tax)

let n=5;
let fact=1;
for(let i=1; i <= n; i++){
    fact = fact*i;
}
console.log(fact)

let j=1;
let m=5;
let fact2=1;
while(j <= m){
    fact2 = fact2 * j;
    j++;
}
console.log(fact2)

let x=9;
let temp = 0;
let f1 = 1;
let f2 = 1;
for(let k=1; k<x; k++){
    temp = f1+f2;
    f1 = f2
    f2 = temp;
}
console.log(f1)

let prime = 17;
let isPrime = true;
for(let l=2; l<prime; l++){
    if(prime%l == 0){
        isPrime = false;
        break;
    }
}
console.log(isPrime);

prime = 59
for(i=2; i<=prime; i++){
    isPrime = 1;
    for(let l=2; l<i; l++){
        if(i%l == 0){
            isPrime = 0;
            break;
        }
    }
    if(isPrime != 0){
        console.log(i)
    }
}