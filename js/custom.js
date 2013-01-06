jQuery(document).ready(function() {


	function affixOnResize(){
		if(window.innerWidth < 768){
			$('#fixed-logo-container').removeClass('affix').removeAttr('data-spy');
			$('#fixed-footer').removeClass('affix').removeAttr('data-spy');
		}else{
			$('#fixed-logo-container').attr('data-spy', 'affix');
			$('#fixed-footer').attr('data-spy', 'affix');

			$('[data-spy="affix"]').each(function () {
			  $(this).affix('refresh')
			});
		}
	}

	//only remove affix attributes if loading in a phone, otherwise only 
	//mess with these attributes on a resize
	if(window.innerWidth < 768){
		$('#fixed-logo-container').removeClass('affix').removeAttr('data-spy');
		$('#fixed-footer').removeClass('affix').removeAttr('data-spy');
	}

	$('body').resize(affixOnResize);

	


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