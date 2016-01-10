$(function () {

    var url = window.location.pathname,
        url = url.split('/').pop();
    // now grab every link from the navigation
    $('#myNavbar > ul > li > a').each(function () {
        // and test its normalized href against the url pathname regexp
        if (url == (this.href.split('/').pop())) {
            var $parent = $(this).parent();
            $parent.addClass('active');
        }
    });

});

$(document).ready(function () {
    $('#brent-click').click(function (e) {
        $(this).find('i').toggleClass('fa-angle-up').toggleClass('fa-angle-down');
    })
    $('#jay-click').click(function (e) {
        $(this).find('i').toggleClass('fa-angle-up').toggleClass('fa-angle-down');
    })
    $('#craig-click').click(function (e) {
        $(this).find('i').toggleClass('fa-angle-up').toggleClass('fa-angle-down');
    })
});

$(function () {
    var theYear = new Date().getFullYear();
    $('#copy-year').html(theYear);
});
