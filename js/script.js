$(function () {
	$("header .nav .nav-item .nav-link").click(function () {
		$(this).removeClass("active");
		$(this).toggleClass("active");
	});
});