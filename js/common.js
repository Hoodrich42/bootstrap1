$(function () {
    var tabContainers = $('div.tabs > div');
    tabContainers.hide().filter(':first').show();
    $('div.tabs ul.tabNavigation a').click(function () {
        tabContainers.hide();
        tabContainers.filter(this.hash).show();
        $('div.tabs ul.tabNavigation a').removeClass('selected');
        $(this).addClass('selected');
        return false;
    }).filter(':first').click();
});

$(function(){
    $(".all").on("change", function() {
        var groupId = $(this).data('id');
        $('.one[data-id="' + groupId + '"]').prop("checked", this.checked);
    });
    $(".one").on("change", function() {
        var groupId = $(this).data('id');
        var allChecked = $('.one[data-id="' + groupId + '"]:not(:checked)').length == 0;
        $('.all[data-id="' + groupId + '"]').prop("checked", allChecked);
    });
	$('.catalog-page .left-filter form .item .name').click(function() {
		$(this).toggleClass('active');
		$(this).next('.content').slideToggle();
	});
	$('.catalog-page .left-filter form .item .content .more-link').click(function() {
		$(this).hide();
		$(this).prev('.hidden-items').show();
	});
	$('.catalog-page .filter .filter-button, .catalog-page .left-filter form .filter-name .close').click(function() {
		$('.catalog-page .filter').toggleClass('other');
		$('.catalog-page .left-filter').toggleClass('opened');
		$('.catalog-page .list').toggleClass('small');
	});
	$('.menubg, .mobile-menu .close').click(function() {
		$('.menubg').fadeOut();
		$('.mobile-menu').removeClass('opened');
	});
	$('.header .menu-button').click(function() {
		$('.menubg').fadeIn();
		$('.mobile-menu').addClass('opened');
	});
	$('.index-popular-block .owl-carousel').owlCarousel({
	    items: 4,
	    loop: true,
	    nav: true,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            autoWidth: true,
	            nav: true,
	            loop: true
	        },
	        991:{
	            items: 4,
	            nav: true,
	            loop: true
	        }
	    }
	});
	$('.index-clients-block .owl-carousel').owlCarousel({
	    items: 2,
	    loop: true,
	    nav: true
	});
	$('.stock-images-block .owl-carousel').owlCarousel({
	    items: 8,
	    nav: true,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items: 2,
	            nav: true
	        },
	        576:{
	            items: 3,
	            nav: true
	        },
	        718:{
	            items: 4,
	            nav: true
	        },
	        991:{
	            items: 5,
	            nav: true
	        },
	        1140:{
	            items: 6,
	            nav: true
	        },
	        1410:{
	            items: 8,
	            nav: true
	        }
	    }
	});
	$('.blog-block .owl-carousel').owlCarousel({
	    items: 3,
	    loop: true,
	    nav: true,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items: 1,
	            nav: true,
	            loop: true
	        },
	        576:{
	            autoWidth: true,
	            nav: true,
	            loop: true
	        },
	        992:{
	            items: 2,
	            nav: true,
	            loop: true
	        },
	        1200:{
	            items: 3,
	            nav: true,
	            loop: true
	        }
	    }
	});
});