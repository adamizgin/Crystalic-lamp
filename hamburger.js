const menuButton = document.querySelector('.header-menu-button-wrapper');
let menuOpen = false;

menuButton.addEventListener('click', menuButtonClick);

function menuButtonClick() {
	if (!menuOpen) {
		menuButton.classList.add('open');
		menuOpen = true;

		$('.menu-button-line__before').css({
			'transform': 'rotate(45deg)'
		});
		$('.menu-button-line__middle').css({
			'transform': 'scale(1)',
			'background': 'transparent'
		});
		$('.menu-button-line__after').css({
			'transform': 'rotate(-45deg)'
		});

		$('#mobile-menu').css({
			'transform': 'translate(0%, 0%) scale(1)',
			'border-radius': '0',
			'top': '0',
			'right': '0'
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
			'transform': 'translateY(-13px)'
		});
		$('.menu-button-line__middle').css({
			'transform': 'scale(1)',
			'background': '#333'
		});
		$('.menu-button-line__after').css({
			'transform': 'translateY(13px)'
		});

		$('#mobile-menu').css({
			'transform': 'translate(50%, -50%) scale(0)',
			'border-radius': '50%'
		});
		setTimeout(function() {
			$('#mobile-menu').css({
				'top': '35px',
				'right': '35px'
			});
		}, 300);

		$('#mobile-menu-content').fadeOut(150);

		setTimeout(() => {
			$('#mobile-menu').css({
				'transition': 'transform 350ms ease-in-out, border-radius 550ms ease-in-out'
			});
		}, 350);
	}
}

$('#mobile-menu-content h2').click(menuButtonClick);
