let cardWrap = document.querySelector('.portfolioCardWrap');

let popupPortfolio = document.querySelector('.popupPortfolio');
let revealer = new RevealFx(popupPortfolio);

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
		wrapClass: 'presentation_gwent',
		title: 'Gwent.',
		demoHref: 'https://kerthin.github.io/gwentReact-templateSait/',
		descriptTitle: 'Create the best<br/> card deck',
		descriptParagraph: 'This project I created being under the impression of the card game Gwent, from the studio CD Projekt Red. I really liked the interface in the game, and I decided to try to recreate it in the browser using React.',
		github: 'https://github.com/Kerthin/gwentReact-templateSait',

		detailTitle_1: 'Tablet UI',
		detailSubtitle_1: 'UI/UX Design',
		detailParagraph_1: 'The site is adapted to various screen resolutions.',
		
		detailTitle_2: 'Cards Parameters',
		detailSubtitle_2: 'Sorting',
		detailParagraph_2: 'All submitted cards can be sorted by fractions, cost, types, and colors.',
		
		detailTitle_3: 'Decks',
		detailSubtitle_3: 'Create Deck',
		detailParagraph_3: 'On the right side of the site is a panel with card decks. They are purely decorative in nature. There is no deck collection function on the site.',
		
		detailTitle_4: 'Card Cost',
		detailSubtitle_4: 'Provision',
		detailParagraph_4: 'The various cards, in addition to the faction parameters, colors, etc., have a cost of provisions, with which you can sort the cards.',
	},
	1: {
		wrapClass: 'presentation_prado',
		title: 'Prado.',
		demoHref: 'https://kerthin.github.io/pradoMuseum-templateSait/',
		descriptTitle: 'Learning the best<br/> artists of the world',
		descriptParagraph: 'Website concept for the Spanish Prado Museum. The site where artists from different countries of the world are represented, whose paintings you can study on our site.',
		github: 'https://github.com/Kerthin/pradoMuseum-templateSait',

		detailTitle_1: "Artist's Choice",
		detailSubtitle_1: 'UI/UX Design',
		detailParagraph_1: 'In the menu, you just need to click on the picture you like and information about the selected artist will appear on the main page.',
		
		detailTitle_2: 'Infobox',
		detailSubtitle_2: 'Information',
		detailParagraph_2: 'To open and view information about the artist. you need to click on his portrait on the main page.',
		
		detailTitle_3: 'Synopsis',
		detailSubtitle_3: 'Information',
		detailParagraph_3: "Also in the block with the artist's paintings there is a section of the synopsis, which describes his brief biography.",
		
		detailTitle_4: 'Navigation',
		detailSubtitle_4: 'UI/UX Design',
		detailParagraph_4: 'The site has a menu where you can choose the artist you want to get information about and view his paintings.',
	},
	2: {
		wrapClass: 'presentation_spiele',
		title: 'Spiele.',
		demoHref: 'https://kerthin.github.io/computerSpieleMuseum-templateSait/',
		descriptTitle: 'Dive into the past of your<br/> favorite video games.',
		descriptParagraph: 'A Spanish-language blog dedicated to games and gaming culture in particular. Also on the site you can study the history of the gaming industry since the end of the 20th century.',
		github: 'https://github.com/Kerthin/computerSpieleMuseum-templateSait',

		detailTitle_1: 'Fillas Andini',
		detailSubtitle_1: 'Content',
		detailParagraph_1: 'The main articles are located on the main page of the site.',
		
		detailTitle_2: 'Hils Joe',
		detailSubtitle_2: 'UI/UX Design',
		detailParagraph_2: 'Articles dedicated to gaming exhibitions and games presented at them, which should be released soon.',
		
		detailTitle_3: 'Werfa Egle',
		detailSubtitle_3: 'UI/UX Design',
		detailParagraph_3: 'The "EN BREVE" section is dedicated to the upcoming gaming exhibitions.',
		
		detailTitle_4: 'Andinosas',
		detailSubtitle_4: 'UI/UX Design',
		detailParagraph_4: 'The "CALENDARIO" page, which presents all the gaming news from January to December.',
	},
	3: {
		wrapClass: 'presentation_cuphead',
		title: 'Cuphead.',
		demoHref: 'https://kerthin.github.io/cuphead-templateSait/',
		descriptTitle: "Don't Deal with<br/>the Devil.",
		descriptParagraph: 'A set of seven cards that I was inspired by the computer game Cuphead. The cards are made in accordance with the style of the game.',
		github: 'https://github.com/Kerthin/cuphead-templateSait',

		detailTitle_1: 'Cuphead',
		detailSubtitle_1: 'Character',
		detailParagraph_1: 'Kaphed is a small anthropomorphic cup with small red shorts, a curved tube with a red and white stripe, large crescent-shaped eyes and a small red nose.',
		
		detailTitle_2: 'Croaks',
		detailSubtitle_2: 'Character',
		detailParagraph_2: 'He had a fighting soul when he was still a little tadpole. One of the first bosses in the game.',
		
		detailTitle_3: 'Cagney Carnation',
		detailSubtitle_3: 'Character',
		detailParagraph_3: "His face is yellow, with a long and sharp nose. Cagney's usual expression is a creepy grin. His hands are long, which can transform into leaves.",
		
		detailTitle_4: 'King Dice',
		detailSubtitle_4: 'Character',
		detailParagraph_4: 'An anthropomorphic creature with a head in the form of a dice, having eyes with green pupils, a purple flattened nose, black eyebrows and a mustache.',
	},
	4: {
		wrapClass: 'presentation_calculator',
		title: 'Calculator.',
		demoHref: 'https://kerthin.github.io/calculator-templateSait/',
		descriptTitle: 'Add, divide, multiply and<br/> subtract any number.',
		descriptParagraph: 'A calculator made in the neomorphism style, on which you can perform various mathematical calculations. There is an adaptation for phones.',
		github: 'https://github.com/Kerthin/calculator-templateSait',

		detailTitle_1: 'Dark Mode',
		detailSubtitle_1: 'UI/UX Design',
		detailParagraph_1: 'In addition to the light theme, there is also a dark theme. You can enable it using the button in the upper-left corner.',
		
		detailTitle_2: 'Not a Number',
		detailSubtitle_2: 'Calculations',
		detailParagraph_2: 'In order not to get errors, you need to press the "=" button after each mathematical action.',
		
		detailTitle_3: 'Fractions',
		detailSubtitle_3: 'Calculations',
		detailParagraph_3: 'The calculator also has the ability to perform mathematical calculations with fractions.',
		
		detailTitle_4: 'Negative numbers',
		detailSubtitle_4: 'Calculations',
		detailParagraph_4: 'You can turn any number in the calculator into a negative using the "-/+" button.',
	},
	5: {
		wrapClass: 'presentation_player',
		title: 'Music.',
		demoHref: 'https://kerthin.github.io/musicPlayer-templateSait/',
		descriptTitle: 'Listen to your favorite songs<br/> on our music player.',
		descriptParagraph: 'A music player made in the style of neomorphism, in which you can listen to your favorite music by adding them to the data array. Adapted for phones.',
		github: 'https://github.com/Kerthin/musicPlayer-templateSait',

		detailTitle_1: 'Switching Music',
		detailSubtitle_1: 'Functionality',
		detailParagraph_1: 'You can switch the music in the player using the upper buttons shown as the right and left arrows.',
		
		detailTitle_2: 'Repeat Music',
		detailSubtitle_2: 'Functionality',
		detailParagraph_2: 'It is possible to put the music on repeat using the button located in the lower left corner. You need to click on it until the number "1" appears.',
		
		detailTitle_3: 'Rewind Music',
		detailSubtitle_3: 'Functionality',
		detailParagraph_3: 'With the help of the timeline located in the center of the player, you can rewind the music to the moment you need.',
		
		detailTitle_4: 'Random',
		detailSubtitle_4: 'Functionality',
		detailParagraph_4: 'You can also set random playback of your tracks using the lower right button in the form of intersecting arrows.',
	},
	6: {
		wrapClass: 'presentation_mobile',
		title: 'Oldsmobile.',
		demoHref: 'https://kerthin.github.io/retroCars-templateSait/',
		descriptTitle: 'The era when cars<br/>were created by artists.',
		descriptParagraph: 'A website designed for the presentation of retro cars, where you can look at the car from different angles, find out its cost, the size of the fuel tank and the amount of horsepower.',
		github: 'https://github.com/Kerthin/retroCars-templateSait',

		detailTitle_1: 'Navigation',
		detailSubtitle_1: 'UI/UX Design',
		detailParagraph_1: 'A menu for selecting cars.',
		
		detailTitle_2: 'Car Presentation',
		detailSubtitle_2: 'UI/UX Design',
		detailParagraph_2: 'Part of the page with the presentation of the car.',
		
		detailTitle_3: 'Model Info',
		detailSubtitle_3: 'Information',
		detailParagraph_3: 'Part of the page where you can find out the volume of the fuel tank, the cost and the number of horsepower of the car.',
		
		detailTitle_4: 'The End',
		detailSubtitle_4: 'UI/UX Design',
		detailParagraph_4: 'The final part of the car presentation.',
	},
	7: {
		wrapClass: 'presentation_artGallery',
		title: 'artGallery.',
		demoHref: 'https://kerthin.github.io/artGallery-templateSait/',
		descriptTitle: 'Artists who have contributed<br/>to the world of art.',
		descriptParagraph: '"Art gallery 19" talking about Russian art inspiration of the 19th century. It gives information that is related to the history own portraits.',
		github: 'https://github.com/Kerthin/artGallery-templateSait',

		detailTitle_1: 'Navigation',
		detailSubtitle_1: 'UI/UX Design',
		detailParagraph_1: 'The site has navigation, with which you can navigate through the pages of artists and their galleries.',
		
		detailTitle_2: 'Artists',
		detailSubtitle_2: 'UI/UX Design',
		detailParagraph_2: 'On the artists page, you can choose any artist you like to view his works on a separate page, as well as information about the artist himself.',
		
		detailTitle_3: 'Gallery',
		detailSubtitle_3: 'Information',
		detailParagraph_3: 'The site also has a gallery page where you can see the works of famous Russian artists with a proper description of the paintings.',
		
		detailTitle_4: 'Picture Details',
		detailSubtitle_4: 'Information',
		detailParagraph_4: 'On separate pages about specific artists, you can look at individual details of their main works, as well as see other works of the artists on the slider.',
	},
	8: {
		wrapClass: 'presentation_tree',
		title: 'Geometric.',
		demoHref: 'https://kerthin.github.io/trees-templateSait/',
		descriptTitle: 'Feel the geometry<br/> in our nature.',
		descriptParagraph: 'TRÜF studio in Santa Monica recently opened a great new series of minimal linear drawings, which I decided to repeat using HTML and CSS.',
		github: 'https://github.com/Kerthin/trees-templateSait',

		detailTitle_1: 'TRÜF Tree',
		detailSubtitle_1: 'UI/UX Design',
		detailParagraph_1: 'A tree layout designed by TRÜF studio from Santa Monica.',
		
		detailTitle_2: 'TRÜF Tree',
		detailSubtitle_2: 'UI/UX Design',
		detailParagraph_2: 'A tree layout designed by TRÜF studio from Santa Monica.',
		
		detailTitle_3: 'TRÜF Tree',
		detailSubtitle_3: 'UI/UX Design',
		detailParagraph_3: 'A tree layout designed by TRÜF studio from Santa Monica.',
		
		detailTitle_4: 'TRÜF Tree',
		detailSubtitle_4: 'UI/UX Design',
		detailParagraph_4: 'A tree layout designed by TRÜF studio from Santa Monica.',
	},
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
					popupPortfolio.classList.add('js-popupPortfolio_open');
					contentEl.style.opacity = 1;
				}
			});

			setTimeout(() => {
				cardWrap.classList.add('portfolioCardWrap_eventsNone');
			}, 250);
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
		popupPortfolio.classList.remove('js-popupPortfolio_open');
		wrap.classList.remove('presentation_open');

		revealer.reveal({
			bgcolor: '#f7e0b5',
			direction: 'lr',
			duration: 700,
			delay: 1200,
			onCover: function(contentEl, revealerEl) {
				popupPortfolio.classList.remove('js-popupPortfolio_open');
				contentEl.style.opacity = 0;
			}
		});

		setTimeout(() => {
			demoLink.setAttribute("href", "");
			wrap.setAttribute("class", "presentation");
			cardWrap.classList.remove('portfolioCardWrap_eventsNone');
		}, 2550);
	}
);