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
