// Preloader
TweenMax.to(".preloader", 2, {
	top: "-100%",
	ease: Expo.easeInOut,
	delay: 10.9
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
	delay: 8.3,
	transformOrigin: "50% 60%"
});
tl.to(".preloader__loader", 1.6, {
	height: "40vh",
	scaleY: "0%",
	ease: Expo.easeInOut,
	transformOrigin: "0% -60%"
});