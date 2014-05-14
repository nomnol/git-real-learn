function pow(x, n) {
    // пока n!=1, сводить вычисление pow(..,n) к pow(..,n-1)
    if(n != 1) {
        return x * pow(x, n - 1)
    }
    else {
        return x;
    }
//    return (n != 1) ? x * pow(x, n - 1) : x;
}
alert(pow(2, 1)); // 8


/**
 * Возводит x в степень n (комментарий JSDoc)
 *
 * @param {number} x число, которое возводится в степень
 * @param {number} n степень, должна быть целым числом больше 1
 *
 * @return {number} x в степени n
 */
/*
function pow(x, n) {
    var result = x;
    for(var i = 1; i < n; i++) {
        result *= x;
        console.log(result);
    }
    return result;
}

var x = prompt("x?", '');
var n = prompt("n?", '');

if(n <= 1) {
    alert('Степень ' + n + 'не поддерживается, введите целую степень, большую 1');
} else {
    alert(pow(x, n));
}
*/


/*
function pow(x, n) {
    return Math.pow(x, n);
}

console.log(pow(2, 3));
*/

/*
function returnLessNum(a, b) {
    if(a > b) {
        return a;
    }
    else if (a == b) {
        return a;
    }
    else {
        return b;
    }
}
console.log(returnLessNum(-4, 2));
*/

/*
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
*/
/*

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  return confirm('Родители разрешили?');
}


var age = prompt('Ваш возраст?');

if (checkAge(age)) {
  alert('Доступ разрешен');
} else {
  alert('В доступе отказано');
}




*/


/*
function calcD(a, b, c) {
  return b*b - 4*a*c;
}

var test = calcD(-4, 2, 1);
console.log(test); // 20
*/


/*
function showMessage(from, text) {
    if(text === undefined) {
        text = 'текст не передан';
    }
    alert(from + ": " + text);
}
showMessage("Маша", "Привет!"); // Маша: Привет!
showMessage("Маша"); // Маша: текст не передан
*/



/*
function showMessage(from, text) {
    from = '**' + from + '**';  // (1), красиво оформили from
    alert(from + '\n\n' + text);
}
var from = 'Маша', msg = 'Привет!'; // (2)
showMessage(from, msg); // значения будут скопированы в параметры
alert(from); // перезапись в строке (1) не повлияет на внешнюю переменную
*/


/*
function showMessage(from, text) { // параметры from, text
    from = "** " + from + " **"; // здесь может быть сложный код оформления
    alert(from + '\n\n' + text);
}
showMessage('Маша', 'Привет!');
showMessage('Маша', 'Как дела?');


*/

/*
function count() {
    var i, j;
    for(i = 0; i < 3; i ++) {
        j = i * 2;
    }
    console.log(i); // i=3
    console.log(j); // j=4
}

count();
*/

/*
function doNothing() {
  return;
}

console.log(doNothing() === undefined); // true
*/


/*
function doNothing() {}
console.log(doNothing());
*/
/*
function checkAge(age) {
  age = 18 ? return true : return confirm('Родители разрешили?');
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
*/



/*
function checkAge(age) {
    if(age > 18) {
        return true;
    }
    else {
        var conf = confirm('Родители разрешили?');
        if(conf) {
            return true;
        }
    }
}

var age = prompt('Введите ваш возраст', '');

if(checkAge(age)) {
    console.log('Доступ разрешен');
}
else {
    console.log('В доступе отказано');
}
*/



/*
function calcD(a, b, c) {
   return b*b - 4*a*c;
}

var test = calcD(-4, 2, 1);
console.log(test); // 20
*/


/*
function showMessage(from, text) {
    text = text || 'текст не передан';
    console.log(from, text);
}

var from = from, text = text;
showMessage('asdf')
console.log(from, text);
*/

/*
function showMessage(from, text) {
    if(text == undefined) {
        text = 'текст не передан';
    }
    console.log(from + ": " + text);
}
showMessage("Маша", "Привет!"); // Маша: Привет!
showMessage("Маша"); // Маша: текст не передан

*/
/*
function showMsg (from, text) {
    from = '*** ' + from + ' ***';
    console.log(from + '\n\n' + text);
}
var from = 'are', text = 'vai';
showMsg('are', 'vai');
console.log(from);
*/

/*
var userName = 'Dave';

function showMsg() {
    var userName = 'Ara'
    var msg = 'Hi my name is ' + userName;
    console.log(msg);
}

showMsg();
console.log(userName);
*/

/*
function count() {
    var i, j;
    for(i = 0; i < 3; i++) {
        j = i * 2;
    }
    alert(i);
    alert(j);
}
*/
/*function count() {
    for(var i = 0; i < 3; i ++) {
        var j = i * 2;
    }
    console.log(i); // i=3, на этом значении цикл остановился
    console.log(j); // j=4, последнее значение, на котором цикл сработал, было i=2
}

count()*/
/*
function msg() {
    var msggg = 'asdf qwer';
    console.log(msggg);
    return msggg;
}

msg();
console.log(msg());
*/

/*
console.log(i);
i = 5;
{var i;}
*/


/*
alert(a in window);
alert(a);
alert(f);
alert(g);

var a;
function f(){}
var g = function() {}


*/


/*
var f = function sayHi(n) {
  alert(n);
  sayHi = 0;
  alert('asdf');
};

f(1);
f(2);
*/


/*
function g() {
    return 1;
}
alert(g);

(function g() {
    return 1;
})
alert(g);
*/

/*
function f(n) {
  return n ? n * f(n - 1) : 1;
};

alert(f(5)); // 120
*/


/*
var func = function sayHi() {
    console.log('asdf');
    sayHi()
}
*/


/*
function g() {
    console.log('asdf');
}

var f = g;

g = function() {
    console.log('qwer');
}
console.log(f);
console.log(g);
*/

/*
var result = (function(a, b) {
    return a + b;
})(2, 4);

console.log(result);


*/


/*
!function () {
    console.log('immediately invoked');
    var con = function() {
        return console.log('con');
    }
    con();
}()

*/
/*
var age = prompt('insert your age', '');
var sayHi;

if(age >= 18) {
    sayHi = function() {console.log('ok, welcome!, your age is ' + age);}
}
else {
    sayHi = function() {console.log('no, you\'re to young');}
}

sayHi();
*/

/*
sayHi();
var sayHi = function() {
    alert('asdf');
}
*/

/*
var arr = [1, 2, function al(person) {console.log(person);}, 'person'];
var fan = arr[2];
fan('jkk')
*/

/*
var num = 20;
if(num >= 17) {
    function sayHi() {
        console.log('asdf');
    }
}
else {
    function sayHi() {
        console.log('qwer');
    }
}

console.log(sayHi());
*/

/*
sayHi('Peter');

function sayHi(person) {
    console.log(person);
}
*/


/*
function func() {}

var func = 5;
console.log(func);
*/

/*
function func() {
    console.log(1);
}

var g = func;
func = null;
g();
func();

*/
/*
function sayHi(person) {
    console.log('Hi ' + person);
}

var result = sayHi;

result('asdf')
sayHi('qwer')
*/




/*
var a = + prompt('a?', '')
switch(a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2, 3');
        break;
}
*/

/*var a = + prompt('a?', '');


if (a == 0) {
  alert(0);
}
if (a == 1) {
  alert(1);
}

if (a == 2 ||  a == 3) {
  alert('2,3');
}
*/

/*
var arg = prompt('Insert number');
switch(arg) {
    case "0":
    case "1":
        alert('Один или ноль');
    case "2":
        alert('Два');
        break;
    case "3":
        alert('Никогда не выполнится');
    case null:
        alert('Отмена');
        break;
    default :
        alert('Неизвестное значение ' + arg)
}
*/

/*
var browser = prompt('Insert your browser', '');

if(browser == 'IE') {
    alert('О, да у вас IE!');
}
else if(browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
    alert('Да, и эти браузеры мы поддерживаем');
}
else {
    alert('Мы надеемся, что и в вашем браузере все ок!');
}
*/

/*
switch (browser) {
  case 'IE':
    alert('О, да у вас IE!');
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert('Да, и эти браузеры мы поддерживаем');
    break;

  default:
    alert('Мы надеемся, что и в вашем браузере все ок!');
}
*/



/*
var a = 2 + 2;
switch(a) {
    case 4:
        alert('Верно!');
        break;
    case 3:                    // (*)
    case 5:                    // (**)
        alert('Неверно!');
        break;
    default:
        alert('Я таких значений не знаю');
}
*/

/*
var a = 2 + 2;
switch(a) {
    case 3:
        alert('Неверно!');
        break;
    case 4:                    // (*)
    case 5:                    // (**)
        console.log('верно!');
        break;
    default:
        alert('Я таких значений не знаю');
}
*/
/*
var a = 1;
var b = '2';
switch(a) {
    case (+ b) - 1:
        console.log('a is true');
        break;
    default:
        alert('нет-нет, выполнится вариант выше')
}
*/
/*
var a = 2 + 2;
switch(a) {
    case 3:
        alert('Маловато');
        break;
    case 4:
        alert('В точку!');
        break;
    case 5:
        alert('Перебор');
        break;
    default:
        alert('Я таких значений не знаю');
}
*/


/*
var x = 1;
for(var i = 0; i < x; i ++) {
    x ++;
    switch(x) {
        case 4:
            console.log(x);
        case 5:
            console.log(x);
    }
    if(i == 11) {
        console.log(i);
        break;
    }
}
*/

/*
document.ready(test())


function test() {
    for (var i = 0; i <= 10; i ++ ) {
        console.log(i);
    }
    return i;
}
*/

/*
nextPrime:
    for (var i = 2; i < 20; i++) {
        for (var j = 2; j < i; j++) {
            console.log(j);
            if (i % j == 0) continue nextPrime;
        }
        console.log(i); // простое
    }
*/


/*
var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};

var vehicles = [vehicle1, vehicle2, vehicle3];

for (var i = 0; i < vehicles.length; i ++ ) {
    vehicles[i].weapon = '';
    vehicles[i].submersible = true;
    console.log(vehicles[i]);
}
*/

/*
my: {
    console.log('codeee');
    for(;;) {
        for(var i = 0; i < 5; i ++) {
            if(i == 4) {
                break my;
            }
        }
    }
}
*/
//console.log(+'01');

/*
var age = false;
console.log(typeof age);
*/
/*
var asdf = "asdf" * 1;
console.log(typeof asdf);
*/

/*
var checkValue = function(i) {
    if(i % 2 == 0) {
        return i;
    }
}

for (var i = 0; i < 100; i ++ ) {
    if(!checkValue(i)) {
        console.log(i);
    }
    else {
        continue;
    }
}

*/

/*
for(var i = 0; i < 20; i ++) {
    if(i % 2 == 0) {
        continue;
    }
    console.log(i);
}
*/


/*
var i = 0;
while(1) {
    i ++;
    if(i == 5) {
        break;
    }
    console.log(i);
}

console.log('Last "i" is: ' + i);
*/
