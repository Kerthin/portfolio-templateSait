(function() {

	var popupMenu = document.querySelector('.popupMenu'),
			revealer = new RevealFx(popupMenu),
			burger = document.querySelector('.burgerWrap');

	burger.onclick = function() {
		if (burger.classList.contains('js-burgerWrap_close') === true) {

			burger.classList.remove('js-burgerWrap_close');
			burger.classList.add('js-burgerWrap_open');

			revealer.reveal({
				bgcolor: '#f7e0b5',
				direction: 'tb',
				duration: 700,
				onCover: function(contentEl, revealerEl) {
					popupMenu.classList.add('js-popupMenu_open');
					contentEl.style.opacity = 1;
				}
			});
		} else {

			burger.classList.add('js-burgerWrap_close');
			burger.classList.remove('js-burgerWrap_open');

			revealer.reveal({
				bgcolor: '#f7e0b5',
				direction: 'bt',
				duration: 700,
				onCover: function(contentEl, revealerEl) {
					popupMenu.classList.remove('js-popupMenu_open');
					contentEl.style.opacity = 0;
				}
			});
		}
	}
	popupMenu.addEventListener('submit', function(ev) {ev.preventDefault();});
})();