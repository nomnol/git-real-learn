$(function() {

//    alert($('tr').length);

//    medLnk.setAttribute('href', 'http://ya.ru/');
    var button = $('<input/>', {
        type: 'button',
        val: 'Сосать!',
        class: 'forStyle'
    }).appendTo('.main');
    var link = $('<a/>', {
        href: 'http://w3schools.com/',
        class: 'my_link',
        html: $('<img/>', {
            src: './i/otsos.gif',
            alt: ''
        }),
        click: function() {
            $(this).hide();
        }
    }).insertAfter(button).hide();
    button.click(function() {
        link.fadeToggle();
    })
    var tr = $('tr');

    tr.hover(function() {
        $(this).addClass('odd');
    }, function() {
        $(this).removeClass('odd')
    })

    var medLnk = $('.a-link-med');
    var discl = $('.disclaimer');
    medLnk.click(function() {
        discl.toggle();
        if ($(discl).is(':visible')) {
            $(this).val('show');

        }
        else {
            $(this).val('hide');
        }
        return false;
    })


//    trFirst.css('font-weight', 'normal');

})