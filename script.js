$(() => {
	$('.header-button-h3').click(function() {
		$('.header-button-h3 h3').css({
			'color': '#000'
		});
		$(this).find('h3').css({
			'color': '#f30'
		});
	});
});