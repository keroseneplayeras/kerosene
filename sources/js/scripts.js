$(document).ready(function () {
    var url ="./sources/catalogo.json";

	//$("#container").load('ejemplo1.html');

    try{
    	$.ajax({
            url: url, // path to file
            type: "GET",
            async: true,
            contentType: "application/json; charset=utf-8",
    		dataType: "json", // type of file (text, json, xml, etc)
    		success: function(data) { // callback for successful completion
                $("#container").html(JSON.stringify(data));
    		},
    		error: function() { // callback if there's an error
    		  alert("error");
    		}
    	});   
     } catch ( e ) {
        console.log("ERROR: "+e);
     }

   /*$.getJSON(url, function (data) {
        alert(data.miapp.id);
		$("#container").html(data.miapp.id);	
	}); */

    jQuery(".switch_price_prod").click(function () {
        jQuery("[js-price-value]").html(jQuery(this).attr("data-price_label"));
        jQuery("[js-license-type]").val(jQuery(this).attr("data-type"));
        jQuery("[js-price-dropdown]").html(jQuery(this).attr("data-label"));
    });

    //Mobile preview Iframe action
    $('.btn-iframe-to-mobile-trigger').on('click', function (event) {
        event.preventDefault();
        $('.iframe-preview').addClass('iframe-preview--mobile');
    });
    $('.btn-iframe-to-desktop-trigger').on('click', function (event) {
        event.preventDefault();
        $('.iframe-preview').removeClass('iframe-preview--mobile');
    });

    //Theme submission preview iframe toggle
    $('.btn-iframe-to-preview-trigger').on('click', function (event) {
        event.preventDefault();
        $('.iframe-preview').attr('src', '//bootstrap-themes.github.io/dashboard');
    });
    $('.btn-iframe-to-details-trigger').on('click', function (event) {
        event.preventDefault();
        $('.iframe-preview').attr('src', location.origin + '/product/stripped');
    });

    //Setting initial frame
    $('#submitPreviewIframe').attr('src', location.origin + '/product/stripped');

    $('[js-handle="review-toggler"]').on('click', function (e) {
        e.preventDefault()
        $(this).tab('show')
        $(this).removeClass('active')
        $('.sub-nav-link.active').removeClass('active')
        $('.sub-nav-link[href="#reviews-tab"]').addClass('active')
        $('html, body').animate({
            scrollTop: $('.sub-nav-link[href="#reviews-tab"]').offset().top - 100
        }, 1000);
    });

});