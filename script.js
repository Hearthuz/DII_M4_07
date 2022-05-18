let place = [3]
place[0] = {
    'name': 'chaing mai university',
    'lat': 18.8046735,
    'long': 98.9528446,
}
place[1] = {
    'name': 'maya',
    'lat': 18.8047037,
    'long': 98.9440898,
}
place[2] = {
    'name': 'central chaing mai',
    'lat': 18.8048018,
    'long': 98.917825,
}
console.log(place[1])

let object = [5]
object[0] = {
    'name' : 'นาย ก นามสมมติ',
    'age' : 68,
    'salary': 75900,
}
object[1] = {
    'name' : 'นางสาว ข นามสมมติ',
    'age' : 35,
    'salary': 55400,
}
object[2] = {
    'name' : 'นาย ค นามสมมติ',
    'age' : 51,
    'salary': 81000,
}
object[3] = {
    'name' : 'นาง ง นามสมมติ',
    'age' : 76,
    'salary': 111000,
}
object[4] = {
    'name' : 'นางสาว จ นามสมมติ',
    'age' : 22,
    'salary': 20500,
}
function findSum(array, key){
    let sum = 0;
    for(i=0; i<array.length; i++){
        sum += array[i][key]
    }
    return sum;
}
function findAvg(array, key){
    sum = findSum(array, key);
    avg = sum/array.length;
    return avg;
}
function findTax(array, key){
    let totalTax = 0;
    let tax;
    for(i=0; i<array.length; i++){
        let income = array[i][key]*12;
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
        totalTax += tax;
    }
    let taxAvg = totalTax/array.length
    return taxAvg;
}
let totalSalary = findSum(object, 'salary')
let ageAverage = findAvg(object, 'age')
let taxAverage = findTax(object, 'salary')

console.log('Total salary : '+totalSalary)
console.log('Age average : '+ageAverage)
console.log('Tax average : '+taxAverage) 