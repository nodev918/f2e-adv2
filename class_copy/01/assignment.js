var log = console.log;

/* 
    畫圖練習
    把下面每一題用畫圖方式換出來變量內值的變化
    JS 的值類型有兩種：
    1. 基礎值類型 primitive values
    2. 引用值類型 object values

    基礎值類型是直接深拷貝
    引用值類型是淺拷貝（存的是記憶體 heap 區中所引用的 object 的地址）

    請畫圖！別用想的
*/

//1
{
  var a = 10;
  var b = "hello";
  var c = true;
  var d = null;
  var e = undefined;
  var f = Symbol("Sym");
  var g = BigInt(2 ^ 54);
}

//2
{
  var a = {};
  var b = { a: "a" };
  var c = [1, 2, 3];
  var d = function () {};
  var e = {
    a: 1,
    b: "hello",
    c: { name: "jojo" },
  };
}

//3
{
  var a = "jojo";
  var b = a;
  b = "bob";
  log(a); // "jojo"
}

//4
{
  var a = 666;
  var b = a;
  b++;
  log(a); // 667
}

//5
{
  var a = 666;
  var b = 777;
  a = a + b; // a = 1443
  b = a - b; // b = 666
  a = a - b; // a = 777
  log(a); // 777
  log(b); // 666
}

//6
{
  var a = { say: "hi" };
  var b = a;
  b.say = "hello";
  log(a.say); // "hello"
}

//7
{
  var a = ["a", "b", "c"];
  var b = a;
  b[2] = "J";
  log(a[2]); // "J"
}

//8
{
  var a = (x) => x + 7;
  var b = a;
  var c = b(0);
  var d = c;
  log(a(d)); //14
}

//9
{
  var a = 6;
  var b = function (x) {
    var c = x + a;
    return c;
  };
  var c = b(a);
  var d = b(c);
  log(d); //18
}

//10
{
  var a = { a: "bob" };
  var b = function (x) {
    var a = x;
    a.a = "john";
  };
  b(a);
  log(a.a); //john
}

//11
{
  var a = { a: "bob" };
  var b = function (x) {
    a = { b: "john" };
  };
  b(a);
  log(a.a); //undefined
}

//12
{
  var a = { a: "bob" };
  var b = function (x) {
    x = { b: "john" };
  };
  b(a);
  log(a.a); // "bob"
}

/* 
    表達式練習
    這是簡單表達式

        (666)
        ( 6 + 6 )
        ( (666) + (6 * 6) )
        (x => x + x)(6)
    
    這是複雜表達式
        (x => x + x)( (x => x + x)(6) )
        (x => x + x)( (x => x * x)(5) )
        (x => 100 - x)((x => x + x)( (x => x * x)(5) ))
    
    請寫出十種複雜表達式方式

    (x=>x+1)(1)
    a(1)
    -
    (x=>x+1)((x=>x+1)(2))    
    var a = x=>x+1
    a(a(2))
    -
    (x=>x+1)(2)*(x=>x+1)(2)
    var a = x=> x+1
    a(2)*a(2)
    -
    (x=>x+1)((x=>x+1)((x=>x+1)(1)))
    var a = x => x+1
    a(a(a(1)))
    -
    (x=>x+1)((x=>x+1)((x=>x+1)(3)))
    var a = x => x+1
    a(a(a(3)))
    -
    (x=>x+1)((x=>x+1)(2)*(x=>x+1)(2))
    var a = x => x+1
    a(a(2))*a(2)
    -
    (x=>x+1)((x=>x+1)((x=>x+1)(2)*(x=>x+1)(2)))
    var a = x => x+1
    a(a(a(2)*a(2)))
    -
    (x=>x+1)((x=>x+1)((x=>x+1)((x=>x+1)((x=>x+1)(3)))))
    var a = x => x+1
    a(a(a(a(3))))
    -
    (x=>x+1)(((a,b)=>a*b)(((p,q)=>(p+1,q+1))(3,4),5))
    var f1 = x => x+1
    var f2 = (a,b) => a*b
    var f3 = (p,q) => (p+1 ,q+1)
    f1(f2(f3(3,4),5))
    - 
    (y=>y+(x=>x+1)(2))(1)
    a = x => x + 1
    b = y => y + a(2)
    b(1)
    
*/

/* 
    將剛剛寫的十種複雜表達式改為賦值表達式
    如原本：
        (x => x + x)( (x => x + x)(6) )
    改成：
        var a = x => x + x
        a(a(6))

    原本：
        (x => 100 - x)((x => x + x)( (x => x * x)(5) ))

        var a = x => 100 - x
        var b = x => x + x
        var c = x => x * x
        a(b(c(5)))
*/

///////////////////////////////////////////////////////////

/* 
    函數也能當作參數與返回一個函數，請練習數種例子

    表達式寫法
        (f => f())(x => 9)
    賦值表達式
        var a = f => f()
        var b = x => 9
        a(b)

    表達式寫法
        ((x, f) => f(x))(10, x => x + 50)
    賦值表達式
        var a = (x, f) => f(x)
        var b = x => x + 50
        a(10, b)

    表達式寫法
        ((n, a ,b ,c) => a(b(c(n))))(10, x=> x+1, x=> x-10, x=> x * x )
    賦值表達式
        var a = ((n, a ,b ,c) => a(b(c(n))))
        var b = x=> x + 1
        var c = x=> x - 10
        var d = x=> x * x
        a(10, b, c, d)
*/

/* 
    稍微複雜一點的

    表達式寫法
        ((n => x => x + n)(50))(10)
    賦值表達式
        var a = (n) => {
            return x => x + n
        }
        var b = a(50)
        b(10)

    表達式寫法
        (((n, fn) => fn => fn(n))(50, x => 90 - x))(x => x * 2)
    賦值表達式
        var a = (n, fn) => fn => fn(n)
        var b = x => 90 - x
        var c = x => x * 2
        var d = a(50, b)
        d(c)    
*/

/**
 * var 小明 = 錢包(100)
 *
 * var 飲料 = x => x - 10
 * var 午餐 = x => x - 60
 *
 * 小明.使用(飲料)
 * 小明.使用(午餐)
 *
 * 小明.消費次數() // 2 使用兩次
 * 小明.紀錄()
 * 小明.查詢(1)
 * 小明.餘額()
 * //30
 *
 */
