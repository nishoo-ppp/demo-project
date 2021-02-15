var first = (value:number, callback)=>{
    callback(value+2);
}
var second = (value:number, callback)=>{
    callback(value+3);
}
var third = (value:number, callback)=>{
    callback(value+4);
}
// callback
first(1, (firstResult, err)=>{
    if(!err){
        second(firstResult, (secondResult, err)=>{
            if(!err){
                third(secondResult, (thirdResult, err)=>{
                    if(!err){
                        console.log(thirdResult);
                    }
                })
            }
        })
    }
})

// promise
var firsts = (value:number)=>{
    if(value <= 0)
        throw "value should be a positive number";
    return value+2;
}
var seconds = (value:number)=>{
    return value+3;
}
var thirds = (value:number)=>{
    return value+4;
}
let promise: Promise<number> = new Promise((resolve, reject)=>{
    resolve(0);
});
promise.then(firsts).then(seconds).then(thirds).then(response=>{
    console.log(response);
}).catch((reject)=>{
    console.log(reject);
});

// Async Await

var firstss = async(value:number)=>{
    return value+2;
}
var secondss = async(value:number)=>{
    return value+3;
}
var thirdss = async(value:number)=>{
    return value+4;
}
(async()=>{
// using await
  let firstResult = await firstss(1);
  let secondResult = await secondss(firstResult);
  let thirdResult = await thirdss(secondResult);
  console.log(thirdResult);
})();

// Promise.all()
//  in resolved case
let p1: Promise<number> = new Promise((resolve, reject)=>{
  resolve(1);
});
let p2: Promise<number> = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve(2);
  }, 10);
    
});
let p3: Promise<number> = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(3);
    }, 30);
});
let p4: Promise<number> = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(4);
    }, 100);
});
Promise.all([p1, p2, p3, p4]).then(resolve=>{
    console.log(resolve);// [1, 2, 3, 4]
}).catch(reject=>{
    console.log(reject);
})
// in rejected case
let ps1: Promise<number> = new Promise((resolve, reject)=>{
    resolve(1);
  });
  let ps2: Promise<number> = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(2);
    }, 10);
      
  });
  let ps3: Promise<number> = new Promise((resolve, reject)=>{
      setTimeout(()=>{
        reject(3);
      }, 30);
  });
  let ps4: Promise<number> = new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve(4);
      }, 100);
  });
  Promise.all([ps1, ps2, ps3, ps4]).then(resolve=>{
      console.log(resolve);
  }).catch(reject=>{
      console.log(reject);
  })
  



