log = console.log

// var a = Promise.resolve()
// var b = new Promise( xxx =>{
//     xxx()
// })
// log(a)
// var k = Promise.resolve(666)
// var j = Promise.resolve(k)

// 當機 範例 注意！注意！注意！ 別執行 會當機
var ppp = {
    then: (xx) => {
        xx(ppp)
    }
}
Promise.resolve(ppp)
ppp.then()



/* 
開始
            __________
           |  __  __  |
           | |  ||  | |
           | |  ||  | |
           | |__||__| |
           |  __  __()|
           | |  ||  | |
           | |  ||  | |
           | |  ||  | |
           | |  ||  | |
           | |__||__| |
           |__________|

                        
*/
// 一個樸素的使用 Promise 範例
var ppp = new Promise((resolve, reject) => {
    resolve(x)
    reject(x)
})
/*  

這時 ppp 指向一個 "特殊的對象" 
這個 "特殊的對象" 做一些事情之後會取得一個結果 x (結果只有兩種狀態：[成功]狀態、[失敗]狀態)
這個 "特殊的對象" 擁有一個 then 方法，方法有兩個指定參數 

A)
結果是[成功]狀態的情況：
    then 方法 第一個 參數如果是一個 函數
    x 會做為函數參數調用之
B)
結果是[失敗]狀態的情況：
    then 方法 第二個 參數如果是一個 函數
    x 會做為函數參數調用之

*/


// 當使用語法糖 Promise.resolve() 時
Promise.resolve(x)

// 就等價於 ===> 執行了這段
new Promise(resolve => {
    resolve(x)
})
// 就等價於 ===> 結果 x 確定是[成功]了 ------------------------------ [邏輯 x 點] 注意注意！

// 等於上面的 A) 等於上面的 A) 等於上面的 A) 等於上面的 A) 等於上面的 A) // 這裡很重要！這裡很重要！這裡很重要！

// 所以調用 then 方法的 第一個 參數中的「函數」

new Promise(dothing => {
    dothing(x)
}) // return 了一個 你沒看見的object

'你沒看見的object'.then(x => dothing(x))


// x 如果是一個正常的「值」
// 狀況很單純．x 就是調用 then 函數裡面的第一個參數 function，並將 x 做為參數傳進去

x = 3

'你沒看見的object'.then(x => dothing(x))


// x 如果是一個正常的「引用」
// 也沒問題，就是 dothing 函數接收了一個 引用

x = { a: 1, b: 2, c: 3 }

'你沒看見的object'.then(x => dothing(x))


// x 如果是一個 Promise ==> 這時候與  [邏輯 x 點] 矛盾了
// 因為你的結果不可能既是 成功 同時又 不確定
// 所以 

Promise.resolve(
    new Promise(dothing => {
        dothing(x)
    })
)
// 等於
new Promise(dothing => {
    dothing(x)
})





// 因此利用 Promise.resolve 提前「結果」的特性，可以實現有趣的玩法

function 吃(菜) { log(菜) }
function 喝口水() { log('喝水')}

const 菜 = ['前菜', '主食','甜點']
let 順序 = Promise.resolve()
菜.forEach(菜 => { 
    順序 = 順序.then(() => (
        吃(菜)
    )).then(喝口水)
})

// 等於下面這樣
// Promise.resolve()
//     .then(() => 吃('前菜'))
//     .then(喝口水)
//     .then(() => 吃('主食'))
//     .then(喝口水)
//     .then(() => 吃('甜點'))
//     .then(喝口水)

// https://weihanglo.tw/posts/2017/javascript-concurrency-promise/



/* 
因為 Promise.resolve() 沒有傳直進去的意思就是 
我已經異步成功啦 接下來要幹嘛～
完全可以當作一個併發的 context 操作 
*/

// (原來是 消除 過程直接跳到 結果的替身啊)
Promise.resolve().then(
    ()=>{
        // 可以併發幹很多事
    }
)

/* 
如果只是想用這個特性做併發～
Promise.resolve 與 Promise.reject 是等價的
兩個都失去了作為 異步等待的動作 直接執行後面的回調
差別在於 一個是執行 第一個參數的回調 一個是執行第二的參數的回調
*/
Promise.resolve(1).then(
    (r)=>{
        log(r)
    }
)
Promise.reject(2).then( null,
    (r)=>{
        log(r)
    }
)
