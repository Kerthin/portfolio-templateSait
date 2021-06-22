// Preloader
TweenMax.to(".preloader", 1.6, {
	top: "-120%",
	ease: Expo.easeInOut,
	delay: .5
});

// Page
var navigationTl = new TweenMax.staggerFrom(".logo, .navigation__links", 2, {
	opacity: 0,
	y: 30,
	ease: Expo.easeInOut,
	delay: .6
}, 0.1);

TweenMax.to(".illustration__curtain", 2, {
	y: "-100%",
	ease: Expo.easeInOut,
	delay: .6
});

var devLinkTl = new TweenMax.staggerFrom(".social, .mouse, .gmail", 2, {
	opacity: 0,
	y: 30,
	ease: Expo.easeInOut,
	delay: .7
}, 0.1);

var paragraphTl = new TweenMax.staggerFrom(".developerInfo__paragraph, .developerInfo__link", 2, {
	opacity: 0,
	y: 30,
	ease: Expo.easeInOut,
	delay: .6
}, 0.1);

// Title
function titleRise(targetsName) {
	anime.timeline().add({
		targets: targetsName,
		translateY: [200,0],
		translateZ: 0,
		opacity: [0,1],
		easing: "easeOutExpo",
		duration: 2000,
		delay: (el, i) => { return 1200 + 50 * i }
	});
}

var textWrapper = document.querySelector('.developerInfo__greeting');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
titleRise('.developerInfo__greeting .letter');

var textWrapper = document.querySelector('.developerInfo__name');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
titleRise('.developerInfo__name .letter');

var textWrapper = document.querySelector('.developerInfo__subtitle');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
titleRise('.developerInfo__subtitle .letter');