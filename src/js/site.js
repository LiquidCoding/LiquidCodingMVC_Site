//$(document).ready(function () {
//    $('.nav li a').click(function (e) {
//
//        $('.nav li').removeClass('active');
//
//        var $parent = $(this).parent();
//        if (!$parent.hasClass('active')) {
//            $parent.addClass('active');
//        }
//        e.preventDefault();
//    });
//});
$(function () {
    var theYear = new Date().getFullYear();
    $("#copy-year").html(theYear);
});
