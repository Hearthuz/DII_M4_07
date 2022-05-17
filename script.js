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