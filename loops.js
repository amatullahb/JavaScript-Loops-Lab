//one to ten
for (let i=1; i<11; i++) {
    console.log(i);
}
//squares
for (let i=1; i<11; i++) {
    console.log(i*i);
}
//even under n
function evenUnder(n) {
    if (n > 2) {
        if (n % 2 == 0) {
            for (let i=2; i<n; i+=2) {
                console.log(i);
            }
            // reverse:
            // for (let i=(n-2); i>0; i-=2) {
            //     console.log(i);
            // }
        } else {
            for (let i=2; i<n; i+=2) {
                console.log(i);
            }
        }
    }
}
//sum
function sum(n, m) {
    let sum = 0;
    for (let i=n; i<m; i++) {
        sum += i;
    }
    return sum;
}
//are we there yet
let answer;
do {
    answer = prompt("Are we there yet?");
} while (answer !== "Yes");
console.log("Good!");
//triangle
let toPrint;
for (let i=1; i<6; i++) {
    toPrint += "*";
    console.log(toPrint)
}
//4x4 table square
let string;
for (let i=1; i<5; i++) {
    for (let j=1; j<5; j++) {
        string += `| ${j*i}`;
    }
    string += "|\n";
}
console.log(string);
//6x6 table square
let string;
for (let i=1; i<7; i++) {
    for (let j=1; j<7; j++) {
        string += `| ${j*i}`;
    }
    string += "|\n";
}
console.log(string);
//nxn table square
const n = prompt("Give number.");
let string;
for (let i=1; i<=n; i++) {
    for (let j=1; j<=n; j++) {
        string += `| ${j*i}`;
    }
    string += "|\n";
}
console.log(string);