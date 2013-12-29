$(function() {


    var toilet = new Object();

    var name, admin, ourPlanetName, visitorName;

    name = 'Василий';
    admin = 4;
    ourPlanetName = 'Earth';
    visitorName = 'Вася';
    admin = admin ++;
//    console.log(admin);

//    var yourName = prompt('What is your name?', '');
//    alert('Your name is ' + yourName);





    var lnk = $('.b-link');
    var trEven = $('tr:even');
    var trOdd = $('tr:odd');
    var table = $('table');
    var button = $('input[type=button]');
    var p = $('p');
    var h2 = $('h2');
    var spoiler = $('.spoiler');
    var revealer = $('<input type="button" value="Spoiler Revealer" class="blocked" />');
//    var dropped = $('<ol class="dropped_down"><li><a href="">dropped item 01</a></li><li><a href="">dropped item 02</a></li><li><a href="">dropped item 03</a></li></ol>')
    var dropped = '.dropped_down';
//    var drop_trig = $('.drop_wrap_cont li');


    $('.outBounce').hover(function () {
        $(dropped, this).animate({
            height: 'toggle'
        }, 1000, 'easeOutBounce');
    })

    $('.circ').hover(function () {
        $(dropped, this).animate({height: 'toggle'}, 1000, 'easeInOutCirc');
    })

    $('.expo').hover(function () {
        $(dropped, this).animate({height: 'toggle'}, 1000, 'easeOutExpo');
    })

    $('.inElastic').hover(function () {
        $(dropped, this).animate({height: 'toggle'}, 1000, 'easeInElastic');
    })

    $('.inOutBounce').hover(function () {
        $(dropped, this).animate({height: 'toggle'}, 1000, 'easeInOutBounce');
    })


    trEven.hover(function() {
        $(this).toggleClass('zebra');
    })
    trOdd.hover(function() {
        $(this).toggleClass('zebra');
    })

    spoiler.hide();
    revealer.insertBefore(spoiler);

    revealer.toggle(function() {
        $(this).animate({backgroundColor: '#00f'}, 2000).css({color: '#fff'});
        spoiler.delay(500).slideToggle();
    }, function() {
        $(this).animate({backgroundColor: '#000'}, 2000).css({color: '#ff0'});
        spoiler.delay(500).slideToggle();
    });



    button.insertBefore(h2).toggle(function() {
        p.animate({
            height: '+=120px',
            padding: '+=20px',
            width: '200px',
            backgroundColor: '#ff0',
            border: '2px solid red'
        }, 2000, 'easeOutBounce');
        h2.animate({
            height: '+=100px',
            padding: '+=20px',
            width: '200px',
            backgroundColor: '#0cc',
            border: '2px solid black',
            color: '#900'
        }, 2000, 'easeOutBounce')}, function() {
        p.animate({
            height: '-=120px',
            width: '90%',
            padding: '+=20px',
            backgroundColor: '#ccc',
            border: '2px solid red'
        }, 2000, 'easeInOutElastic');
        h2.animate({
            height: '-=100px',
            padding: '+=20px',
            width: '90%',
            backgroundColor: '#ccc',
            border: '2px solid black',
            color: '#333'
        }, 2000, 'easeInOutElastic')})


//    var clicker = $('<a class="b-link" href="#">New Tested Link</a>').insertAfter(revealer);

/*
    Core.getElementsByClass = function(theClass) {
        var elementArray = [];
        if (document.all) {
            elementArray = document.all;
        }
        else {
            elementArray = document.getElementsByTagName('*');
        }
        var matchedArray = [];
        var pattern = new RegExp('(^| )' + theClass + '( |$)');
        for (var i = 0; i < elementArray.length; i++) {
            if (pattern.test(elementArray[i].className)) {
                matchedArray[matchedArray.length] = elementArray[i];
            }
        }
        return matchedArray;
    };

    lnk.click(function() {
        alert('asdf');
        Core.getElementsByClass();
        var elementArray = Core.getElementsByClass('b-link');
        elementArray.onclick = function() {
            this.style.display = 'none';
        }
    })
*/

/*
    var elementArray = Core.getElementsByClass('b-link');
    elementArray.onclick = function() {
        this.style.background = "#f0f";
    }
*/

    /*
    lnk.click(function() {
    })
*/


//    <a class="b-link" href="#">New Tested Link</a>

});


