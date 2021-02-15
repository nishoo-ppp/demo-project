var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var first = function (value, callback) {
    callback(value + 2);
};
var second = function (value, callback) {
    callback(value + 3);
};
var third = function (value, callback) {
    callback(value + 4);
};
// callback
first(1, function (firstResult, err) {
    if (!err) {
        second(firstResult, function (secondResult, err) {
            if (!err) {
                third(secondResult, function (thirdResult, err) {
                    if (!err) {
                        console.log(thirdResult);
                    }
                });
            }
        });
    }
});
// promise
var firsts = function (value) {
    if (value <= 0)
        throw "value should be a positive number";
    return value + 2;
};
var seconds = function (value) {
    return value + 3;
};
var thirds = function (value) {
    return value + 4;
};
var promise = new Promise(function (resolve, reject) {
    resolve(0);
});
promise.then(firsts).then(seconds).then(thirds).then(function (response) {
    console.log(response);
})["catch"](function (reject) {
    console.log(reject);
});
// Async Await
var firstss = function (value) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, value + 2];
    });
}); };
var secondss = function (value) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, value + 3];
    });
}); };
var thirdss = function (value) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, value + 4];
    });
}); };
(function () { return __awaiter(_this, void 0, void 0, function () {
    var firstResult, secondResult, thirdResult;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, firstss(1)];
            case 1:
                firstResult = _a.sent();
                return [4 /*yield*/, secondss(firstResult)];
            case 2:
                secondResult = _a.sent();
                return [4 /*yield*/, thirdss(secondResult)];
            case 3:
                thirdResult = _a.sent();
                console.log(thirdResult);
                return [2 /*return*/];
        }
    });
}); })();
// Promise.all()
var p1 = new Promise(function (resolve, reject) {
    resolve(1);
});
var p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(2);
    }, 10);
});
var p3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(3);
    }, 30);
});
var p4 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(4);
    }, 100);
});
Promise.all([p1, p2, p3, p4]).then(function (resolve) {
    console.log(resolve); // [1, 2, 3, 4]
})["catch"](function (reject) {
    console.log(reject);
});
// in rejected case
var ps1 = new Promise(function (resolve, reject) {
    resolve(1);
});
var ps2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(2);
    }, 10);
});
var ps3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject(3);
    }, 30);
});
var ps4 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(4);
    }, 100);
});
Promise.all([ps1, ps2, ps3, ps4]).then(function (resolve) {
    console.log(resolve);
})["catch"](function (reject) {
    console.log(reject);
});
