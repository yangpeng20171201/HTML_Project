$(function () {
	$('.topbar .wrap').append('<div class="gh"><a href="#"></a></div>');
	$('.topbar .gh').click(function(){
		if($(this).hasClass('curr')){
			$(this).removeClass('curr');
			$('.header').removeClass('active');
		}else{
			$(this).addClass('curr');
			$('.header').addClass('active');
		}

	})
})