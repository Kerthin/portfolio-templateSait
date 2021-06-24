// Preloader
TweenMax.to(".preloader", 1.6, {
	top: "-120%",
	ease: Expo.easeInOut,
	delay: .5
});

// const svgText = anime({
// 	targets: '.path',
// 	loop: false,
// 	direction: 'alternate',
// 	strokeDashoffset: [anime.setDashoffset, 0],
// 	easing: 'easeInOutSine',
// 	duration: 600,
// 	delay: (el, i) => { return 1000 + i * 450 }
// });

// var tl = new TimelineMax();

// tl.from(".preloader__loader", 1.6, {
// 	scaleY: "0%",
// 	y: 80,
// 	ease: Expo.easeInOut,
// 	delay: 8.3,
// 	transformOrigin: "50% 50%"
// });
// tl.to(".preloader__loader", 1.6, {
// 	height: "40vh",
// 	scaleY: "0%",
// 	ease: Expo.easeInOut,
// 	transformOrigin: "0% -100%"
// });

// Page
var navigationTl = new TweenMax.staggerFrom(".logo, .navigation__links", 2, {
	opacity: 0,
	y: 30,
	ease: Expo.easeInOut,
	delay: .6
}, 0.1);

var portfolioParagraph = new TweenMax.staggerFrom(".portfolioCardContent__paragraph", 2, {
	opacity: 0,
	y: 30,
	ease: Expo.easeInOut,
	delay: .6
}, 0.1);

var portfolioCardRise = new TweenMax.staggerFrom(".portfolioCardWrap", 2, {
	opacity: 0,
	y: 30,
	ease: Expo.easeInOut,
	delay: .65
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

var textWrapper = document.querySelector('.portfolioCardContent__title');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
titleRise('.portfolioCardContent__title .letter');

var textWrapper = document.querySelector('.portfolioCardContent__paragraphTitle');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
titleRise('.portfolioCardContent__paragraphTitle .letter');