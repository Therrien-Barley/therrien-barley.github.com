jQuery(document).ready(function() {


	function affixOnResize(){
		if(window.innerWidth >= 768){
			$('#fixed-header-left').affix();
			$('#fixed-header-right').affix();
			$('#fixed-logo-container').affix();
			$('#fixed-footer').affix();
		}else{
			$('#fixed-header-left').removeClass('affix').removeClass('affix-top');
			$('#fixed-header-right').removeClass('affix').removeClass('affix-top');
			$('#fixed-logo-container').removeClass('affix').removeClass('affix-top');
			$('#fixed-footer').removeClass('affix').removeClass('affix-top');
		}

	}

	

	


	//$('#header-nav').affix();
	
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
});