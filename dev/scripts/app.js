//Empty Namespace
var portfolio = {}

//Portfolio Initialize
portfolio.init = function(){
	portfolio.hamMenu();
}

//Hamburger Menu Function
portfolio.hamMenu = function(){
	let navBar = $('.nav-bar');
	let darkOverlay = $('.dark-overlay');
	//This is to toggle the Menu Open.
	$('.nav-hamburger').on('click', function(){
		navBar.addClass('nav-bar_open');
		darkOverlay.addClass('dark-overlay_on animated fadeIn');
	});
	//This is to toggle the Menu Closed.
	$('.nav-bar_close').on('click', function(){
		navBar.removeClass('nav-bar_open');
		darkOverlay.removeClass('dark-overlay_on');
	})
};

//Document Ready
$(function(){
	portfolio.init();
});