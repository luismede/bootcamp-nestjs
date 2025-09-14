const randomTimeOut = (min = 800, max = 3000) => Math.floor(Math.random() * (max - min) + min);

function f1(callback) {
  setTimeout(() => {
    console.log('f1');
    if (callback) callback();
  }, randomTimeOut())
}

function f2(callback) {
  setTimeout(() => {
    console.log('f2')
    if (callback) callback();
  }, randomTimeOut())

}

function f3(callback) {
  setTimeout(() => {
    console.log('f3')
    if (callback) callback();
  }, randomTimeOut())
}


// f1(function() {
//  f2(function() {
//    f3(function() {
//      console.log("End functions")
//    })
//  })
// })
//

f1 (f1Callback);
function f1Callback() {
  f2(f2Callback);
}
 
function f2Callback() {
  f3(f3Callback);
}

function f3Callback(){
  console.log("End functions")
}
