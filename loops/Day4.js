// Activity 1: For Loop

// for(let i = 1; i <= 10; i++) 
//     console.log(i);

// let answer = [];
// for (let i = 1; i <= 10; i++) {
//     answer.push(i);
// }
// console.log(answer.join(' '));

let result = '';
for (let i = 1; i <= 10; i++) {
    result += i + ' ';
}
console.log(result.trim());

console.log();
for(let i = 1; i <= 10; i++) 
    console.log(`${5} * ${i} = ${5 * i}`);

// Activity 2: While Loop

console.log();
let sum = 0;
let i = 1;
while(i <= 10) {
    sum += i;
    i++;
}
console.log(sum);

console.log();
let j = 10;
while(j >= 1) {
    console.log(j);
    j--;
}

// Activity 3: Do... While Loop

console.log();
let k = 1
do {
    console.log(k);
    k++;
}while(k <= 5);

console.log()
function factorial(num) {
    let i = num-1;
    let answer = num;

    do{
        answer *= i;
        i--;
    }while(i >= 1);

    console.log(answer);
}
factorial(5)

// Activity 4: Nested Loops

console.log();
for(let i = 1; i <= 5; i++) {
    let stars = '';

    for(let j = 1; j <= i; j++)
        stars += '*' + " ";

    console.log(stars.trim())
}

// Activity 5: Loop Control Statements

console.log();
for(let i = 1; i <= 10; i++) {
    if(i == 5)
        continue;
    console.log(i);
}

console.log();
for(let i = 1; i <= 10; i++) {
    if(i ==7)
        break;
    console.log(i);
}