// Preloader
TweenMax.to(".preloader", 2, {
	top: "-100%",
	ease: Expo.easeInOut,
	delay: 9.7
});

const svgText = anime({
	targets: '.path',
	loop: false,
	direction: 'alternate',
	strokeDashoffset: [anime.setDashoffset, 0],
	easing: 'easeInOutSine',
	duration: 900,
	delay: (el, i) => { return 1000 + i * 600 }
});

var tl = new TimelineMax();

tl.from(".preloader__loader", 1.6, {
	scaleY: "0%",
	y: 80,
	ease: Expo.easeInOut,
	delay: 7.1,
	transformOrigin: "50% 60%"
});
tl.to(".preloader__loader", 1.6, {
	height: "40vh",
	scaleY: "0%",
	ease: Expo.easeInOut,
	transformOrigin: "0% -60%"
});

// Page
TweenMax.to(".illustration__curtain", 2, {
	y: "-100%",
	ease: Expo.easeInOut,
	delay: 9.9
});

var navigationTl = new TweenMax.staggerFrom(".logo, .navigation__links", 2, {
	opacity: 0,
	y: 30,
	ease: Expo.easeInOut,
	delay: 10.3
}, 0.1);

var devLinkTl = new TweenMax.staggerFrom(".social, .mouse, .gmail", 2, {
	opacity: 0,
	y: 30,
	ease: Expo.easeInOut,
	delay: 11.3
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
		delay: (el, i) => { return 10900 + 50 * i }
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

var paragraphTl = new TweenMax.staggerFrom(".developerInfo__paragraph, .developerInfo__link", 2, {
	opacity: 0,
	y: 30,
	ease: Expo.easeInOut,
	delay: 10.5
}, 0.1);