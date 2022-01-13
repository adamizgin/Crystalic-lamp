const menuButton = document.querySelector('.header-menu-button-wrapper');
let menuOpen = false;

menuButton.addEventListener('click', menuButtonClick);

function menuButtonClick() {
	if (!menuOpen) {
		menuButton.classList.add('open');
		menuOpen = true;

		$('.menu-button-line__before').css({
			'transform': 'rotate(45deg)',
			'background': '#eee'
		});
		$('.menu-button-line__middle').css({
			'transform': 'scale(1)',
			'background': 'transparent'
		});
		$('.menu-button-line__after').css({
			'transform': 'rotate(-45deg)',
			'background': '#eee'
		});

		$('#mobile-menu').css({
			'transform': 'translate(0%, 0%) scale(1)',
			'border-radius': '0',
		});
		$('h1').css({
			'color': '#fff'
		});

		$('#mobile-menu-content').hide().fadeIn(1000);

		setTimeout(() => {
			$('#mobile-menu').css({
				'transition': 'transform 350ms ease-in-out, border-radius 350ms ease-in-out'
			});
		}, 350);
	} else {
		menuButton.classList.remove('open');
		menuOpen = false;

		$('.menu-button-line__before').css({
			'transform': 'translateY(-13px)',
			'background': '#333'
		});
		$('.menu-button-line__middle').css({
			'transform': 'scale(1)',
			'background': '#333'
		});
		$('.menu-button-line__after').css({
			'transform': 'translateY(13px)',
			'background': '#333'
		});
		$('h1').css({
			'color': '#333'
		});

		$('#mobile-menu').css({
			'transform': 'translate(50%, -50%) scale(0)',
			'border-radius': '50%'
		});

		$('#mobile-menu-content').fadeOut(150);

		setTimeout(() => {
			$('#mobile-menu').css({
				'transition': 'transform 350ms ease-in-out, border-radius 550ms ease-in-out'
			});
		}, 350);
	}
}

$('#mobile-menu-content h2').click(menuButtonClick);
