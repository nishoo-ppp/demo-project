var msg = "hello";
console.log(msg + " world");
var Addition = /** @class */ (function () {
    function Addition() {
    }
    Addition.prototype.sum = function (x, y) {
        return (x + y);
    };
    return Addition;
}());
var addition = new Addition();
var s = addition.sum(3, 6);
console.log("hey");
var arr = [1, 2, 3, , 4, 5, 6, 7, 9, 10];
arr.push(11);
arr.slice(3);
arr.slice(2, 6);
arr.splice(2, 5);
arr.splice(2, 2, 6);
