var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var first = (value, callback) => {
    callback(value + 2);
};
var second = (value, callback) => {
    callback(value + 3);
};
var third = (value, callback) => {
    callback(value + 4);
};
// callback
first(1, (firstResult, err) => {
    if (!err) {
        second(firstResult, (secondResult, err) => {
            if (!err) {
                third(secondResult, (thirdResult, err) => {
                    if (!err) {
                        console.log(thirdResult);
                    }
                });
            }
        });
    }
});
// promise
var firsts = (value) => {
    if (value <= 0)
        throw "value should be a positive number";
    return value + 2;
};
var seconds = (value) => {
    return value + 3;
};
var thirds = (value) => {
    return value + 4;
};
let promise = new Promise((resolve, reject) => {
    resolve(0);
});
promise.then(firsts).then(seconds).then(thirds).then(response => {
    console.log(response);
}).catch((reject) => {
    console.log(reject);
});
// Async Await
var firstss = (value) => __awaiter(this, void 0, void 0, function* () {
    return value + 2;
});
var secondss = (value) => __awaiter(this, void 0, void 0, function* () {
    return value + 3;
});
var thirdss = (value) => __awaiter(this, void 0, void 0, function* () {
    return value + 4;
});
(() => __awaiter(this, void 0, void 0, function* () {
    // using await
    let firstResult = yield firstss(1);
    let secondResult = yield secondss(firstResult);
    let thirdResult = yield thirdss(secondResult);
    console.log(thirdResult);
}))();
// Promise.all()
//  in resolved case
let p1 = new Promise((resolve, reject) => {
    resolve(1);
});
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2);
    }, 10);
});
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(3);
    }, 30);
});
let p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(4);
    }, 100);
});
Promise.all([p1, p2, p3, p4]).then(resolve => {
    console.log(resolve); // [1, 2, 3, 4]
}).catch(reject => {
    console.log(reject);
});
// in rejected case
let ps1 = new Promise((resolve, reject) => {
    resolve(1);
});
let ps2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2);
    }, 10);
});
let ps3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(3);
    }, 30);
});
let ps4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(4);
    }, 100);
});
Promise.all([ps1, ps2, ps3, ps4]).then(resolve => {
    console.log(resolve);
}).catch(reject => {
    console.log(reject);
});
//# sourceMappingURL=callbackVsPromise.js.map