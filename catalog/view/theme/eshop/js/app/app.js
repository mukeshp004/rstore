$(document).ready(() => {

    /* Search */
	$('#search input[name=\'search\']').parent().find('button').on('click', function() {
		var url = $('base').attr('href') + 'index.php?route=product/search';
		var params = {};

		var value = $('#search input[name=\'search\']').val();
		var category_id = $('#search input[name=\'category\']').val();

		if(value) {
			params['search'] = value;
			if(category_id) {
				params['category_id'] = $('#search input[name=\'category\']').val();			
			}

			url += `&${decodeURIComponent( $.param( params ) )}`;

			location = url;
		}
	});

	$('#search input[name=\'search\']').on('keydown', function(e) {
		if (e.keyCode == 13) {
			$('#search input[name=\'search\']').parent().find('button').trigger('click');
		}
	});

	/*====================================
	18. Nice Select JS
	======================================*/	
	// $('select').niceSelect();

	// $("input[type='number']").InputSpinner();

})