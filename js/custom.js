jQuery(document).ready(function() {


	function affixOnResize(){
		if(window.innerWidth < 768){
			$('#fixed-logo-container').removeClass('affix');
			$('#fixed-footer').removeClass('affix');
		}else{
			$('#fixed-logo-container').addClass('affix').attr('data-spy','affix');
			$('#fixed-footer').addClass('affix').attr('data-spy','affix');
		}
	}

	if(window.innerWidth < 768){
		$('#fixed-logo-container').removeClass('affix').removeAttr('data-spy');
		$('#fixed-footer').removeAttr('data-spy');
	}
	$('body').resize(affixOnResize);

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