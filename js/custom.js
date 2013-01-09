jQuery(document).ready(function() {

	//$('.jumbotron').append('<div>size: '+ window.innerWidth +'</div>');


	//initialize mobile phone
	if(window.innerWidth <= 768){
		$('#fixed-logo-container').removeClass('affix').removeAttr('data-spy');
		$('#fixed-footer').removeAttr('data-spy');
		$('body').css('backgroundColor','yellow');

	}else{//initialize non-phone
		//vertically center jumbotron
		var jh = $('.jumbotron').height();
		var wh = window.innerHeight;
		var hh = $('#header-nav').height();
		var m = (wh-hh-jh)/2;
		$('.jumbotron').css('marginTop', m).css('marginBottom', m);

		$('body').css('backgroundColor','');
	}


	$('.video-container').each(function(){
		if(window.innerWidth >= 1200){
			$(this).css('width', '1024px');
			$(this).css('height', '401px');
		}else if(window.innerWidth > 768){
			$(this).css('width', '924px');
			$(this).css('height', '362px');
		}
	});



	/*
		
	function affixOnResize(){
		if(window.innerWidth < 768){
			$('#fixed-logo-container').removeClass('affix');
			$('#fixed-footer').removeClass('affix');
		}else{
			$('#fixed-logo-container').addClass('affix').attr('data-spy','affix');
			$('#fixed-footer').addClass('affix').attr('data-spy','affix');
		}
	}
	$('body').resize(affixOnResize);
	*/

	/*
	$('#gf').text('GitHub Followers');
    $('#gfr').text('GitHub Repos');		
	
	JSONP( 'https://api.github.com/users/erjjones?callback=?', function( response ) {
		var data = response.data;
		$('#gf').text(data.followers + ' GitHub Followers');
        $('#gfr').text(data.public_repos + ' GitHub Repos');
	});
	
	function JSONP( url, callback ) {
		var id = ( 'jsonp' + Math.random() * new Date() ).replace('.', '');
		var script = document.createElement('script');
		script.src = url.replace( 'callback=?', 'callback=' + id );
		document.body.appendChild( script );
		window[ id ] = function( data ) {
			if (callback) {
				callback( data );
			}
		};
	}	
	
	
	$('#ghw').githubWidget({
			'username': 'Erjjones',
			'displayActions': false,
			'firstCount': 10,
			'displayHeader': false,
			'displayLastCommit': false,
			'displayAccountInformations': false,
			'displayLanguage': false
		});
	*/
});