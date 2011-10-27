var bool = true;
var num = 1;
var str = 'a';
var obj = {};
var obj2 = obj;

function returnTrue() {
    return true;
}

function loadTestBox() {
    $.getJSON('test.json', function (json) {
        $('#testBox').text(json['string']);
    });
}


$(function () {
    $('#clickTestBox').click(function () {
        $.getJSON('test.json', function (json) {
            $('#testBox').text(json['click']);
        });
    });
    $('#hoverTestBox').hover(
        function () {
            $(this).text('hover');
        },
        function () {
            $(this).text('out');
        });
});
