(function( $ ){
$(function(){
	 /**/
	 $('#fullpage').fullpage({
         licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        anchors: ['p1', 'p2', 'p3','p4'],
		fitToSection:false,
		menu:'#fix-nav',
       responsiveWidth: 1024,
        afterResponsive: function(isResponsive){
        },
		onLeave: function(index, nextIndex, direction){	//떠날때
			$('#header').addClass('h_scroll');
		},
		afterLoad: function(anchorLink, index){	//이동후
			console.log(anchorLink);
			$('#header').attr('data-fx','h_scroll');
			$('.fp-viewing-p1 #header').removeClass('h_scroll');
		},
    });
	
	
});
})( jQuery );
