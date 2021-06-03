// let cursor = document.getElementById("cursor");
// let close = document.getElementById("close");
let container = document.querySelector(".container");

let popupMenu = document.querySelector('.popupMenu');
let revealer = new RevealFx(popupMenu);

let wrapClass = document.querySelector('.presentation');
let titleVertical = document.querySelector('.presentSide__title');
let mainTitle = document.querySelector('.presentMain__title');
let demoLink = document.querySelector('.presentMain__demoLink');
let descriptTitle = document.querySelector('.presentMain__descriptTitle');
let descriptParagraph = document.querySelector('.presentMain__descriptParagraph');
let githubPage = document.querySelector('.lineInfoWrap__detailGithub');

let detailTitle_1 = document.querySelector('.js-detailItem__title_1');
let detailSubtitle_1 = document.querySelector('.js-detailItem__subtitle_1');
let detailParagraph_1 = document.querySelector('.js-detailItem__paragraph_1');
let detailTitle_2 = document.querySelector('.js-detailItem__title_2');
let detailSubtitle_2 = document.querySelector('.js-detailItem__subtitle_2');
let detailParagraph_2 = document.querySelector('.js-detailItem__paragraph_2');
let detailTitle_3 = document.querySelector('.js-detailItem__title_3');
let detailSubtitle_3 = document.querySelector('.js-detailItem__subtitle_3');
let detailParagraph_3 = document.querySelector('.js-detailItem__paragraph_3');
let detailTitle_4 = document.querySelector('.js-detailItem__title_4');
let detailSubtitle_4 = document.querySelector('.js-detailItem__subtitle_4');
let detailParagraph_4 = document.querySelector('.js-detailItem__paragraph_4');

let closeButton = document.querySelector(".closeButtonWrap");


let frames = {
	0: {
		wrapClass: 'calculator',
		title: 'Calculator',
		demoHref: 'https://kerthin.github.io/calculator-templateSait/',
		descriptTitle: 'Calculating your numbers',
		descriptParagraph: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae omnis reiciendis dignissimos cum, rem temporibus, consequatur ad ut facilis aspernatur deserunt dolore quidem cumque odit quo repudiandae veritatis enim, maiores soluta, repellendus!',
		github: "https://github.com/Kerthin/calculator-templateSait",

		detailTitle_1: 'Fillac Andini',
		detailSubtitle_1: 'UI/UX Designer',
		detailParagraph_1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, distinctio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, distinctio.',
		
		detailTitle_2: 'Hils Joe',
		detailSubtitle_2: 'Editor',
		detailParagraph_2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, distinctio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, distinctio.',
		
		detailTitle_3: 'Werfa Egle',
		detailSubtitle_3: 'Content Creator',
		detailParagraph_3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, distinctio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, distinctio.',
		
		detailTitle_4: 'Andinosas',
		detailSubtitle_4: 'Marketing',
		detailParagraph_4: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, distinctio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, distinctio.',
	},
	1: {
		wrapClass: 'music',
		title: 'Music',
		demoHref: 'https://kerthin.github.io/musicPlayer-templateSait/',
		descriptTitle: 'Listening your favorite  music',
		descriptParagraph: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae omnis reiciendis dignissimos cum, rem temporibus, consequatur ad ut facilis aspernatur deserunt dolore quidem cumque odit quo repudiandae veritatis enim, maiores soluta, repellendus!',
		github: "https://github.com/Kerthin/musicPlayer-templateSait",

		detailTitle_1: 'Fillas Andini',
		detailSubtitle_1: 'UI/UX Designer',
		detailParagraph_1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, distinctio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, distinctio.',
		
		detailTitle_2: 'Hils Joe',
		detailSubtitle_2: 'Editor',
		detailParagraph_2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, distinctio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, distinctio.',
		
		detailTitle_3: 'Werfa Egle',
		detailSubtitle_3: 'Content Creator',
		detailParagraph_3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, distinctio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, distinctio.',
		
		detailTitle_4: 'Andinosas',
		detailSubtitle_4: 'Marketing',
		detailParagraph_4: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, distinctio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, distinctio.',
	},
	2: {
		wrapClass: 'gwent',
		title: 'Gwent',
		demoHref: 'https://kerthin.github.io/gwentReact-templateSait/',
		descriptTitle: 'Create the best <br/> card deck',
		descriptParagraph: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae omnis reiciendis dignissimos cum, rem temporibus, consequatur ad ut facilis aspernatur deserunt dolore quidem cumque odit quo repudiandae veritatis enim, maiores soluta, repellendus!',
		github: "https://github.com/Kerthin/gwentReact-templateSait",

		detailTitle_1: 'Fillad Andini',
		detailSubtitle_1: 'UI/UX Designer',
		detailParagraph_1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, distinctio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, distinctio.',
		
		detailTitle_2: 'Hils Joe',
		detailSubtitle_2: 'Editor',
		detailParagraph_2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, distinctio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, distinctio.',
		
		detailTitle_3: 'Werfa Egle',
		detailSubtitle_3: 'Content Creator',
		detailParagraph_3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, distinctio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, distinctio.',
		
		detailTitle_4: 'Andinosas',
		detailSubtitle_4: 'Marketing',
		detailParagraph_4: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, distinctio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, distinctio.',
	},
	3: {
		wrapClass: 'prado',
		title: 'Prado',
		demoHref: 'https://kerthin.github.io/pradoMuseum-templateSait/',
		descriptTitle: 'Learning the best artists',
		descriptParagraph: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae omnis reiciendis dignissimos cum, rem temporibus, consequatur ad ut facilis aspernatur deserunt dolore quidem cumque odit quo repudiandae veritatis enim, maiores soluta, repellendus!',
		github: "https://github.com/Kerthin/pradoMuseum-templateSait",

		detailTitle_1: 'Fillaf Andini',
		detailSubtitle_1: 'UI/UX Designer',
		detailParagraph_1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, distinctio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, distinctio.',
		
		detailTitle_2: 'Hils Joe',
		detailSubtitle_2: 'Editor',
		detailParagraph_2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, distinctio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, distinctio.',
		
		detailTitle_3: 'Werfa Egle',
		detailSubtitle_3: 'Content Creator',
		detailParagraph_3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, distinctio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, distinctio.',
		
		detailTitle_4: 'Andinosas',
		detailSubtitle_4: 'Marketing',
		detailParagraph_4: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, distinctio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, distinctio.',
	}
};

let cards = document.getElementsByClassName("portfolioCard");
for (let i = 0; i < cards.length; i++) {
	cards[i].addEventListener(
		"click",
		function (i) {
			container.classList.add("active");
			// iframe.setAttribute("src", frames[i]);
			let penDebug = frames[i];
			// let penFull = penDebug.replace("debug", "pen");
			// penLink.setAttribute("href", penFull);

			wrapClass.classList.add(frames[i].wrapClass);
			titleVertical.innerHTML = frames[i].title;
			mainTitle.innerHTML = frames[i].title;
			demoLink.setAttribute("href", frames[i].demoHref);
			descriptTitle.innerHTML = frames[i].descriptTitle;
			descriptParagraph.innerHTML = frames[i].descriptParagraph;
			githubPage.setAttribute("href", frames[i].github);

			detailTitle_1.innerHTML = frames[i].detailTitle_1;
			detailSubtitle_1.innerHTML = frames[i].detailSubtitle_1;
			detailParagraph_1.innerHTML = frames[i].detailParagraph_1;

			detailTitle_2.innerHTML = frames[i].detailTitle_2;
			detailSubtitle_2.innerHTML = frames[i].detailSubtitle_2;
			detailParagraph_2.innerHTML = frames[i].detailParagraph_2;

			detailTitle_3.innerHTML = frames[i].detailTitle_3;
			detailSubtitle_3.innerHTML = frames[i].detailSubtitle_3;
			detailParagraph_3.innerHTML = frames[i].detailParagraph_3;

			detailTitle_4.innerHTML = frames[i].detailTitle_4;
			detailSubtitle_4.innerHTML = frames[i].detailSubtitle_4;
			detailParagraph_4.innerHTML = frames[i].detailParagraph_4;

			revealer.reveal({
				bgcolor: '#f7e0b5',
				direction: 'rl',
				duration: 700,
				onCover: function(contentEl, revealerEl) {
					popupMenu.classList.add('js-popupMenu_open');
					contentEl.style.opacity = 1;
				}
			});
		}.bind(null, i)
	);
}


closeButton.addEventListener(
	"click",
	function (i) {
		popupMenu.classList.remove('js-popupMenu_open');
		revealer.reveal({
			bgcolor: '#f7e0b5',
			direction: 'lr',
			duration: 700,
			delay: 1200,
			onCover: function(contentEl, revealerEl) {
				popupMenu.classList.remove('js-popupMenu_open');
				contentEl.style.opacity = 0;
			}
		});
	}
);

document.onkeydown = function (evt) {
	evt = evt || window.event;
	let isEscape = false;
	if ("key" in evt) {
		isEscape = evt.key === "Escape" || evt.key === "Esc";
	} else {
		isEscape = evt.keyCode === 27;
	}
	if (isEscape) {
		container.classList.remove("active");
		setTimeout(() => {
			// popupMenu.setAttribute("src", "");
			demoLink.setAttribute("href", "");
			wrapClass.setAttribute("class", "presentation");
		}, 1000);
	}
};

closeButton.addEventListener("click", function (event) {
	container.classList.remove("active");
	setTimeout(() => {
		// popupMenu.setAttribute("src", "");
		demoLink.setAttribute("href", "");
		wrapClass.setAttribute("class", "presentation");
	}, 1000);
});


// let frames = [
// 	"https://kerthin.github.io/cuphead-templateSait/",
// 	"https://kerthin.github.io/computerSpieleMuseum-templateSait/",
// 	"https://kerthin.github.io/musicPlayer-templateSait/",
// 	"https://kerthin.github.io/calculator-templateSait/",
// 	"https://kerthin.github.io/gwentReact-templateSait/",
// 	"https://kerthin.github.io/pradoMuseum-templateSait/",
// 	"https://codepen.io/cobra_winfrey/debug/OJXJeod",
// 	"https://codepen.io/cobra_winfrey/debug/PoqVQRq",
// 	"https://cdpn.io/cobra_winfrey/debug/qgEGMZ",
// 	"https://codepen.io/cobra_winfrey/debug/RwWYGxj"
// ];