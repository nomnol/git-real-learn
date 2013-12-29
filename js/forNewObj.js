window.onload = function initAll() {

    var medLnk = document.getElementsByTagName('a')[0];
    medLnk.setAttribute('href', 'http://ya.ru/');
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

    alert('asdf');
}

