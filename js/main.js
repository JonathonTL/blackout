var blackoutStart = 0;
var blackoutEnd = 0;

function scrollTo(element) {
	$('html, body').animate({
    'scrollTop': $(element).offset().top
	}, 800, 'swing');
}

function preloadImages(srcs, imgs, callback) {
	var increment = 100 / srcs.length;
	var width = 100;
	var img;
	var remaining = srcs.length;
	for (var i = 0; i < srcs.length; i++) {
		img = new Image();
		img.onload = function() {
			--remaining;
			width = 100 - (remaining * increment);
			$('#loading-bar').css('width', width + '%');
			//height = 100 - (remaining * increment);
			//$('#loading-column').css('height', height + '%');
			if (remaining <= 0) {
				callback();
			}
		};
		img.src = srcs[i];
		imgs.push(img);
	}
}

function showProfile(profile) {
	$('.overlay-section').addClass('hidden');
	$('#overlay-profile, #' + profile + '-profile').removeClass('hidden');
	$('#overlay').css('display', 'block');
	setTimeout(function(){ $('#overlay').css('opacity', '1'); }, 100);
}

function showVideo(video) {
	$('.overlay-section').addClass('hidden');
	$('#video-' + video).removeClass('hidden');
	$('#overlay').css('display', 'block');
	setTimeout(function(){ $('#overlay').css('opacity', '1'); }, 100);
}

function login() {
	if ($('#login-username').val().split(' ').join('') === 'Management' && $('#login-password').val().split(' ').join('') === 'Caribbean44') {
		$('#login-password').val('');
		$('#submit').html('Submit');
		$('#submit').css({ 'color': 'white', 'font-weight': '600' });
		window.open('https://sites.google.com/view/themaraj/dashboard');
	} else {
		$('#submit').html('Retry');
		$('#submit').css({ 'color': '#af0000', 'font-weight': '700' });
	}
}

function onLoad() {
	setTimeout(function(){ $('#loading-container').css('opacity', '0'); $('body').css('overflow-y', 'auto'); }, 1000);
	setTimeout(function(){ $('#loading-container').css('display', 'none'); }, 2000);
	setTimeout(function(){ $('.border.top, .border.bottom').css('height', '28px'); }, 1500);
	setTimeout(function(){ $('.border.left, .border.right').css('width', '28px'); }, 1500);

	blackoutStart = $('#love_dose').offset().top - 28;
	blackoutEnd = $('#anchor-about').offset().top - 28;
	$(window).scroll(function() {
		//if ($(window).scrollTop() < $(window).height() - 56 || $(window).scrollTop() > blackoutStart && $(window).scrollTop() < blackoutEnd) {
		if ($(window).scrollTop() > blackoutStart && $(window).scrollTop() < blackoutEnd) {
			if ($('#action-menu').hasClass('blackout') == false) {
				$('#action-menu').addClass('blackout')
			}
		} else {
			if ($('#action-menu').hasClass('blackout')) {
				$('#action-menu').removeClass('blackout')
			}
		}
	});
	$(window).resize(function() {
		blackoutStart = $('#pvp').offset().top - 28;
		blackoutEnd = $('#anchor-about').offset().top - 28;
	});
}

function load() {
	var imageSrc = ['./img/tmcd.png', './img/grain.png', './img/heat_on_me.png', './img/empire.png', './img/balenciaga.png', './img/empire.png', './img/caribbean.png', './img/pvp.png', './img/love_dose.png', './img/juan.png', './img/juan_black_white.png', './img/axel.png', './img/axel_black_white.png', './img/ilya.png', './img/ilya_black_white.png', './img/josh.png', './img/josh_black_white.png', './img/geremiahhh.png', './img/geremiahhh_black_white.png', './img/wavy.png', './img/wavy_black_white.png', './img/footer.png', './img/play.png', './img/soundcloud.png', './img/spotify.png', './img/apple_music.png', './img/tidal.png', './img/youtube.png', './img/spotify_mobile.png', './img/apple_music_mobile.png', './img/tidal_mobile.png', './img/youtube_mobile.png', './img/soundcloud_invert.png', './img/spotify_invert.png', './img/apple_music_invert.png', './img/instagram_invert.png', './img/twitter_invert.png', './img/facebook_invert.png', './img/soundcloud_icon.png', './img/twitter_icon.png', './img/instagram_icon.png', './img/login.png', './img/shop.png'];
	var img = [];

	preloadImages(imageSrc, img, onLoad);

	$('#login').click(function() {
		$('.overlay-section').addClass('hidden');
		$('#login-modal').removeClass('hidden');
		$('#overlay').css('display', 'block');
		setTimeout(function(){ $('#overlay').css('opacity', '1'); }, 100);
	});
	$('#close').click(function() {
		$('iframe').each(function(){
			this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
		});
		$('#overlay').css('opacity', '0');
		setTimeout(function(){ $('#overlay').css('display', 'none'); }, 1000);
	});
	$('#overlay').click(function() {
		if ($('#login-modal').hasClass('hidden')) {
			$('iframe').each(function(){
				this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
			});
			$('#overlay').css('opacity', '0');
			setTimeout(function(){ $('#overlay').css('display', 'none'); }, 1000);
		}
	});
	$('#submit').click(function() {
		login();
	});
	$(document).keypress(function(e) {
    if(e.which == 13) {
    	login();
    }
	});

	$('.chevron').click(function() {
		scrollTo('#anchor-music');
	});

	$('#action-music').click(function() {
		scrollTo('#anchor-music');
	});
	$('#action-video').click(function() {
		scrollTo('#love_dose');
	});
	$('#action-about').click(function() {
		scrollTo('#anchor-about');
	});
	$('#action-social').click(function() {
		scrollTo('#anchor-social');
	});
	$('.action-social').click(function() {
		scrollTo('#anchor-social');
	});
	$('.action-contact').click(function() {
		scrollTo('.footer');
	});

	$('img.juan').hover(function() {
    $(this).attr('src','./img/juan.png');
	}, function() {
			$(this).attr('src','./img/juan_black_white.png');
	});
	$('img.axel').hover(function() {
    $(this).attr('src','./img/axel.png');
	}, function() {
			$(this).attr('src','./img/axel_black_white.png');
	});
	$('img.ilya').hover(function() {
    $(this).attr('src','./img/ilya.png');
	}, function() {
			$(this).attr('src','./img/ilya_black_white.png');
	});
	$('img.josh').hover(function() {
    $(this).attr('src','./img/josh.png');
	}, function() {
			$(this).attr('src','./img/josh_black_white.png');
	});
	$('img.geremiahhh').hover(function() {
    $(this).attr('src','./img/geremiahhh.png');
	}, function() {
			$(this).attr('src','./img/geremiahhh_black_white.png');
	});
	/*$('img.jayson-banks').hover(function() {
    $(this).attr('src','./img/jayson_banks.png');
	}, function() {
			$(this).attr('src','./img/jayson_banks_black_white.png');
	});*/
	$('img.wavy').hover(function() {
    $(this).attr('src','./img/wavy.png');
	}, function() {
			$(this).attr('src','./img/wavy_black_white.png');
	});
	$('img.danny-vantam').hover(function() {
    $(this).attr('src','./img/danny_vantam.png');
	}, function() {
			$(this).attr('src','./img/danny_vantam_black_white.png');
	});

	$('.juan').click(function() {
		showProfile('juan');
	});
	$('.axel').click(function() {
		showProfile('axel');
	});
	$('.ilya').click(function() {
		showProfile('ilya');
	});
	$('.josh').click(function() {
		showProfile('josh');
	});
	$('.geremiahhh').click(function() {
		showProfile('geremiahhh');
	});
	$('.jayson-banks').click(function() {
		showProfile('jayson-banks');
	});
	$('.wavy').click(function() {
		showProfile('wavy');
	});

	$('#play-heat-on-me').click(function() {
		showVideo('heat-on-me');
	});
	$('#play-empire').click(function() {
		showVideo('soundcheck');
	});
	$('#play-balenciaga').click(function() {
		showVideo('balenciaga');
	});
	$('#play-caribbean').click(function() {
		showVideo('caribbean');
	});
	$('#play-pvp').click(function() {
		showVideo('pvp');
	});
	$('#play-love-dose').click(function() {
		showVideo('love-dose');
	});
}

$(document).ready(function() {
	load();
});
