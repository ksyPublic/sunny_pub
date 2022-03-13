(function( $ ){
$(function(){

		
	/* select */
	$('#kst_sel select').bind('change',function(){
		$(this).siblings('label').text($(this).children('option:selected').text());
	});
	
	$(window).scroll(function(){
		var thg = $(this).scrollTop();
		if(thg>0){
			$('#header.main').addClass('h_scroll');
			$('.sub_location').addClass('sb_scroll');
		}else{
			$('#header.main').removeClass('h_scroll');
			$('.sub_location').removeClass('sb_scroll');
		}
	});
	
	/*$(".scroll").click(function () {
		var scrollPosition = $(".section.s2").offset().top; 
		$("html, body").animate({
			scrollTop: scrollPosition
		}, 500);
		
		$('.toTopBtn').click(function(){
			$('html,body').animate({scrollTop: 0},500);
		});

 	});*/
  
	
	$('.fp-viewing-p1 #header.pc .depth1').hover(function(){
		$('.fp-viewing-p1 #header.pc').addClass('h_scroll');
	},function(){
		$('.fp-viewing-p1 #header.pc').removeClass('h_scroll');
	});
	
	sublo();
	
	
	var responSize = 1263, //1280
		responPadMax = 1183, // 1196
		responPadJung = 1006 //1023
		responPadMin = 751 //768
	var device = '';
	var deviceCheck = function(){
		winWidth = $(window).width();
		if(winWidth >= responSize && winWidth >= responPadMax){
			if(device == 'pc'){
			}else{
				device = 'pc';
				eventreset(device);
				allm();

				pcmenu(device);
				//PC---------------------
			}
		}else if(winWidth <= responPadMax && winWidth >= responPadJung){
			if(device == 'pad'){
			}else{
				device = 'pad';
				eventreset(device);
				allm02();
				mbmenu(device);
				//pad-------------------
			}
			//---------------------------------------
		}else if(winWidth <= responPadJung && winWidth >= responPadMin){
			if(device == 'pad'){
			}else{
				device = 'pad';
				eventreset(device);
				allm02();
				mbmenu(device);
				nm_menu();
				//pad-------------------
			}
			//---------------------------------------
		}else{
			if(device == 'mb'){
			}else{
				device = 'mb';
				eventreset(device);
				allm02();
				mbmenu(device);
				nm_menu();
				

				//mb-------------------
			}
		}
	};deviceCheck();



	$(window).resize(function(){	
		deviceCheck();
		$('body').css('position','static');
		nopi();
	});
/* */
function eventreset(device){
	if($('#mnb_btn').size() > 0){
		$('#mnb_btn, #mnb_close').remove();
		$('.ov-bg').hide();
	}
	$('#gnb').unbind('mouseleave');
	$('.depth1').unbind('mouseleave');
	$('.depth1 > li').unbind('click');
	$(".depth1 > li").unbind('slideDown');
	$('.depth1 > li').unbind('mouseenter');
	$(".fix_menu, .sub_menu ul").unbind('slideUp');
	$('.fix_menu, .bus_visual, .depth3').attr('style','');
	$('.depth1 > li,.depth2 > li').removeClass('open');
	$('.all_menu').unbind('click');
	$('.ov-bg').hide();
	$('.sub_top').css('overflow','hidden');
	$('.net_menu').show();
	$('.mo_net_menu').unbind('click');
}
	
	
/*pc-menu*/
function pcmenu(device){
	$('#header').removeClass('mp').addClass('pc');
	$('.pc .fix_menu').hide();
	
	var gnbNum = -1;
	$(".pc .depth1 > li").each(function(i){
		$(this).on("mouseenter", function(){
				if(!$("#header").hasClass("on")){
					$("#header").addClass("on");
					$(".depth1 > li").eq(gnbNum).removeClass("active");
					$(".depth1 > li").eq(gnbNum).find(".fix_menu").hide();
					gnbNum = i;
					$(".depth1 > li").eq(gnbNum).find(".fix_menu").stop().slideDown(300);
					$(".depth1 > li").eq(gnbNum).addClass("active");
				}else{
					$(".depth1 > li").eq(gnbNum).find(".fix_menu").hide();
					$(".depth1 > li").eq(gnbNum).removeClass("active");
					gnbNum = i;
					$(".depth1 > li").eq(gnbNum).find(".fix_menu").show();
					$(".depth1 > li").eq(gnbNum).addClass("active");
				}
		});
	});
	
	
	$(".pc .depth1").mouseleave(function(){
		$(".pc .depth1 > li").find(".fix_menu").slideUp(300);
		$("#header.on").removeClass("on");
		$(".pc .depth1 > li").removeClass("active");
		$('.pc .gnb_banner .pp').hide();
		$('.pc .gnb_banner .gnb_banner_list').show();
		$('.pc .depth2 > li a.on').removeClass('on');
		$('.fp-viewing-p1 #header.pc').removeClass('h_scroll');
	});
	
	
	
	$('.pc .depth2 > li.li_depth4').mouseenter(function(){
		$('> a',this).addClass('on');
		$('.pc .gnb_banner .gnb_banner_list').hide();
		if($(this).find('.depth3').length > 0){
			$('.pc .gnb_banner').prepend('<ul class="pp li_depth4"></ul>');
			$('.pc .gnb_banner .pp').html($(this).find('.depth3').html());
			$('.pc .gnb_banner .gnb_banner_list').hide();
		}else{
			
		}
	})
		

	$('.pc .depth2 > li:not(.li_depth4)').mouseenter(function(){
		$('.pc .gnb_banner .pp').hide();
			$('.pc .gnb_banner .gnb_banner_list').show();
			$('.li_depth4 a.on').removeClass('on');
	});
	
	
}


function mbmenu(device){
	$('#header').removeClass('pc').addClass('mp');
}


function allm(){
	eventreset(device);
	$('.hidden_menu').removeClass('mp02').addClass('pc02');
	$('.hidden_menu').hide();
	$('.all_menu').click(function(){
		$('.hidden_menu').html($('#gnb').html());
		$('.hidden_menu').prepend('<a href="#none" class="hdb_btn" onclick="javascript:return false;"></a>');
		$('.hidden_menu .gnb_txt, .hidden_menu .gnb_banner').remove();
		$('.hidden_menu .depth1').removeClass('clr');
		$('.ov-bg').fadeIn();
		$('.hidden_menu').fadeIn();
		//$('body').css('position','fixed');
		
		$('.hdb_btn').click(function(){
			$('.ov-bg').fadeOut();
			$('.hidden_menu').fadeOut();
			$('body').css('position','static');
		});
		

		$(".hidden_menu .li_depth3 > a").click(function(){
			$(".hidden_menu .depth3").slideUp();
			$(".hidden_menu .li_depth4 > a").removeClass('on');
			if(!$(this).next().is(":visible"))
			{
				$(this).next().slideDown();
				$(this).addClass('on');
			}
		})
	
			
	});
	
}

function allm02(){
	eventreset(device);
	$('.hidden_menu').removeClass('pc02').addClass('mp02');
	$('.hidden_menu').hide();
	//$('body').css('position','fixed');
	$('.all_menu').click(function(){
		$('.hidden_menu').html($('#gnb').html());
		$('.hidden_menu').prepend('<a href="#none" class="hdb_btn" onclick="javascript:return false;"></a>');
		$('.hidden_menu .gnb_txt, .hidden_menu .gnb_banner').remove();
		$('.hidden_menu .depth1').removeClass('clr');
		$('.ov-bg').fadeIn();
		$('.hidden_menu').fadeIn();
		$('body').css('position','fixed');
		
		$('.hdb_btn').click(function(){
			$('.ov-bg').fadeOut();
			$('.hidden_menu').fadeOut();
			$('body').css('position','static');
		});
		
		$(".hidden_menu .depth1 > li > a").click(function(){
			$(".hidden_menu .fix_menu").slideUp();
			$(".hidden_menu .depth3").slideUp();
			$(".hidden_menu .li_depth4 > a").removeClass('on')
			
			$(".hidden_menu .depth1 > li > a").removeClass('on')
			if(!$(this).next().is(":visible"))
			{
				$(this).next().slideDown();
				$(this).addClass('on');
			}
		})
		
		$(".hidden_menu .li_depth3 > a").click(function(){
			$(".hidden_menu .depth3").slideUp(300);
			$(".hidden_menu .li_depth4 > a").removeClass('on')
			if(!$(this).next().is(":visible"))
			{
				$(this).next().slideDown(300);
				$(this).addClass('on');
			}
		})
		
		
		
		
			
	});
	
}

function sublo(){
	$(".sub_menu .sd_txt").click(function(){
		$(".sub_menu .sub_hidden").slideUp();
		$('.sub_top').css('overflow','visible');
		$(".sub_menu .sd_txt").removeClass('sp')
		if(!$(this).next().is(":visible"))
		{
			$(this).next().slideDown();
			$(this).addClass('sp');
		}
	})
}

function nm_menu(){
	$('.net_menu').hide();
	$('.mo_net_menu').text($('.net_menu .on a').text());	
	$('.mo_net_menu').append('<i></i>');
	$('.net_menu  li a').append('<i></i>');
	$('.mo_net_menu').click(function(){
		$('.net_menu').stop().slideToggle(300);
	});
}

/* height */
function nopi(){
	var sameHeight = 0;	//전체높이 처음에 0
	$('.box').ready(function(){	//.box클래스가 문서에 로딩되면 실행
		$('.box').css('height','');
		$('.box').each(function(){	//.box클래스애들 갯수만큼 반복
			var itemHeight = $(this).height();	//.box 높이 로 변경
			if(itemHeight >= sameHeight){	//.box클래스 높이가 크거나 같으면 
				sameHeight = itemHeight;	//전체높이가 이번 .box 높이 로 변경
			}
		});
		$('.box').css('height',sameHeight);	//.box 높이를 전체높이로 변경 inline에 css로 높이가 들어감
	});
};nopi();


	
	
});
})( jQuery );
