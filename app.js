//Task 1 Multidimensional Array
document.write(`<h2>Task 1: Multidimensional Array</h2>`)

var arr = [['0 1 2 3'],['1 0 1 2'],['2 1 0 1']]
for(let i =0; i<arr.length; i++){
    document.write(arr[i],'<br>')
}

//Task 2 Print Counting 1to10
document.write(`<br>`)
document.write(`<br>`)
document.write(`<h2>Task 2: Print Numeric Counting 1 to 10</h2>`)
for (let i = 0; i <= 10; i++) {
    document.write(i,'<br>')
}

//Task 3 Table Of Any Number 
document.write(`<br>`)
document.write(`<br>`)
document.write(`<h2>Task 3: Table Of Any Number</h2>`)

var table = prompt("Enter Which Table You Want")
var startLength = prompt("Enter Start Length")
var endLength = prompt("Enter End Length")
document.write(`<h3>Multiplication Table Of ${table} Length ${endLength}</h3>`)
for (let i = startLength; i <= endLength; i++) {
    document.write(`${table} x ${i} = ${table*i} <br>`)
}

//Task 4  
document.write(`<br>`)
document.write(`<br>`)
document.write(`<h2>Task 4: Print Array Items</h2>`)

var fruits = ['apple','banana','mango','orange','strawberry']
document.write(fruits, '<br> <br>')
for (let i = 0; i < fruits.length; i++) {
    document.write(`Element at index ${i} is ${fruits[i]} <br>`)
}

//Task 5  
document.write(`<br> <br>`)
document.write(`<h2>Task 5</h2>`)

document.write(`<h3>Counting:</h3>`)
for (let i = 1; i <=15; i++) {
    document.write(i+',')
}
document.write(`<br> <br>`)
document.write(`<h3>Reverse Counting:</h3>`)
for (let i = 10; i >=1; i--) {
    document.write(i+',')
}

document.write(`<br> <br>`)

document.write(`<h3>Even:</h3>`)
for (let i = 0; i <=20; i+=2) {
    if(i % 2 == 0){
    document.write(i+',')
    }
}

document.write(`<br> <br>`)

document.write(`<h3>Odd:</h3>`)
for (let i = 1; i <=20; i++) {
    if(i % 2 != 0){
    document.write(i+',')
    }
}

document.write(`<br> <br>`)

document.write(`<h3>Series:</h3>`)
for (let i = 2; i <=20; i+=2) {
    document.write(i+'k,')
}

//Task 6
document.write(`<br> <br>`)
document.write(`<h2>Task 6: bakery items check</h2>`)

let items = ['cake','apple pie','cookie','chips','patties']
let user_search = prompt("🎉 Welcome to our bakery. What do you want to order sir/ma'am? ")
for (let i = 0; i < items.length; i++) {
    if(user_search == items[i]){
        alert(`${items[i]} is available at index ${i} in our bakery`)
    }
}

//Task 7
document.write(`<br> <br>`)
document.write(`<h2>Task 7</h2>`)

var arrNum = [24, 53, 78, 91, 12]
var largestNum = arrNum[0]
for (let i = 0; i < arrNum.length; i++) {
    if(arrNum[i] > largestNum){
        largestNum = arrNum[i]
    }
}
document.write(`<h3>Array items: ${arrNum}</h3>`)
document.write(`<h3>The largest number is ${largestNum}</h3>`)

//Task 8
document.write(`<br>`)
document.write(`<h2>Task 8</h2>`)

var num = [24, 53, 78, 91, 12]
var smallestNum = num[0]
for (let i = 0; i < num.length; i++) {
    if(num[i] < smallestNum){
        smallestNum = num[i]
    }
}
document.write(`<h3>Array items: ${num}</h3>`)
document.write(`<h3>The smallest number is ${smallestNum}</h3>`)


//Task 9
document.write(`<br>`)
document.write(`<h2>Task 9</h2>`)
for (let i = 5; i <= 100; i+=5) {
    document.write(i+',')
}

