let msg : string = "hello";
console.log(msg+" world");
class Addition {
    sum(x: number, y: number) {
        return (x+y);
    }
}
let addition = new Addition();
let s = addition.sum(3, 6);
console.log("hey", s);

let arr = [1, 2, 3 ,4 ,5 ,6, 7, 9, 10];
arr.push(11);
arr.slice(3);
let a = arr.slice(2, 6);
console.log(a);
arr.splice(2, 5);
arr.splice(2, 2, 6);
arr.push(12);