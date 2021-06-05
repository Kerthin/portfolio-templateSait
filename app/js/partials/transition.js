let popupMenu = document.querySelector('.popupMenu');
let revealer = new RevealFx(popupMenu);

let wrap = document.querySelector('.presentation');
let titleVertical = document.querySelector('.presentSide__title');
let mainTitle = document.querySelector('.presentMain__title');
let demoLink = document.querySelector('.presentMain__demoLink');
let descriptTitle = document.querySelector('.presentMain__descriptTitle');
let descriptParagraph = document.querySelector('.presentMain__descriptParagraph');
let githubPage = document.querySelector('.lineInfoWrap__detailGithub');

let detailTitle_1 = document.querySelector('.js-detailItem__title_1'),
		detailSubtitle_1 = document.querySelector('.js-detailItem__subtitle_1'),
		detailParagraph_1 = document.querySelector('.js-detailItem__paragraph_1'),
		detailTitle_2 = document.querySelector('.js-detailItem__title_2'),
		detailSubtitle_2 = document.querySelector('.js-detailItem__subtitle_2'),
		detailParagraph_2 = document.querySelector('.js-detailItem__paragraph_2'),
		detailTitle_3 = document.querySelector('.js-detailItem__title_3'),
		detailSubtitle_3 = document.querySelector('.js-detailItem__subtitle_3'),
		detailParagraph_3 = document.querySelector('.js-detailItem__paragraph_3'),
		detailTitle_4 = document.querySelector('.js-detailItem__title_4'),
		detailSubtitle_4 = document.querySelector('.js-detailItem__subtitle_4'),
		detailParagraph_4 = document.querySelector('.js-detailItem__paragraph_4');

let presentPage = document.querySelector('.presentMain'),
		closeButton = document.querySelector(".closeButtonWrap");


let projectInfoArray = {
	0: {
		wrapClass: 'gwent',
		title: 'Gwent',
		demoHref: 'https://kerthin.github.io/gwentReact-templateSait/',
		descriptTitle: 'Create the best <br/> card deck',
		descriptParagraph: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae omnis reiciendis dignissimos cum, rem temporibus, consequatur ad ut facilis aspernatur deserunt dolore quidem cumque odit quo repudiandae veritatis enim, maiores soluta, repellendus!',
		github: "https://github.com/Kerthin/gwentReact-templateSait",

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

let portfolioCard = document.getElementsByClassName("portfolioCard");

for (let i = 0; i < portfolioCard.length; i++) {
	portfolioCard[i].addEventListener(
		"click",
		function (i) {
			wrap.classList.add(projectInfoArray[i].wrapClass);
			titleVertical.innerHTML = projectInfoArray[i].title;
			mainTitle.innerHTML = projectInfoArray[i].title;
			demoLink.setAttribute("href", projectInfoArray[i].demoHref);
			descriptTitle.innerHTML = projectInfoArray[i].descriptTitle;
			descriptParagraph.innerHTML = projectInfoArray[i].descriptParagraph;
			githubPage.setAttribute("href", projectInfoArray[i].github);

			detailTitle_1.innerHTML = projectInfoArray[i].detailTitle_1;
			detailSubtitle_1.innerHTML = projectInfoArray[i].detailSubtitle_1;
			detailParagraph_1.innerHTML = projectInfoArray[i].detailParagraph_1;

			detailTitle_2.innerHTML = projectInfoArray[i].detailTitle_2;
			detailSubtitle_2.innerHTML = projectInfoArray[i].detailSubtitle_2;
			detailParagraph_2.innerHTML = projectInfoArray[i].detailParagraph_2;

			detailTitle_3.innerHTML = projectInfoArray[i].detailTitle_3;
			detailSubtitle_3.innerHTML = projectInfoArray[i].detailSubtitle_3;
			detailParagraph_3.innerHTML = projectInfoArray[i].detailParagraph_3;

			detailTitle_4.innerHTML = projectInfoArray[i].detailTitle_4;
			detailSubtitle_4.innerHTML = projectInfoArray[i].detailSubtitle_4;
			detailParagraph_4.innerHTML = projectInfoArray[i].detailParagraph_4;

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

presentPage.addEventListener(
	"click",
	function (i) {
		wrap.classList.add("presentation_open");
	}
);

closeButton.addEventListener(
	"click",
	function (i) {
		popupMenu.classList.remove('js-popupMenu_open');
		wrap.classList.remove("presentation_open");

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

		setTimeout(() => {
			demoLink.setAttribute("href", "");
			wrap.setAttribute("class", "presentation");
		}, 1000);
	}
);