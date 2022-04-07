
var log = console.log


// 括號就是表達式
// 後面括號 是 前面括號 的參數


{
    // 括號就是表達式
    // 後面括號的「值」是前面括號 的「參數」
    (1)
    (x => x + 1)(3)
    (x => x * x)((x => x + 1)(3))
    (x => x + 10)((x => x * x)((x => x + 1)(3)))


    // 函數可以當參數輸入
    ((x, f) => f(x))(3, x => x * x)

    // 等同於
    const a = ((x, f) => f(x))
    a(3, x => x * x)



    // 輸入兩個函數參數，輸出一個函數
    const fn = (g, f) => (x => f(g(x)))
    fn(x => x * x, x => x + 6)(5)


    // 輸入三個函數參數，輸出一個函數
    const fn2 = (f, g, k) => (x => k(g(f(x))))
    fn2(x => x - 9, x => x * x, x => x + 6)(5)


    // 輸入 n 個函數參數，輸出一個函數
    const fn3 = (...fns) => x => fns.reduce((y, f) => f(y), x)
    fn3(x => x - 9, x => x * x, x => x + 6)(10)

}




{
    const a = n => n - 1
    const b = n => n * 2
    const c = n => n + 99

    // pipe   then      
    function pipe(n, ...arr) {
        var box = n
        arr.forEach((i) => {
            box = i(box)
        }
        )
        return box
    }

    log(pipe(10,a,b,c))

    // 封裝   高階函數    最小型的狀態管理
    function 錢包(r) {
        var box = r
        return function t(fn) {
            box = fn(box)
            return box
        }
    }

    var 我的錢包 = 錢包(500)
    log(我的錢包(c))

    // 每個人有自己的錢包互不干擾
    var A = 錢包(1500)
    var B = 錢包(570)
    var C = 錢包(800)

    log(A(b))
}