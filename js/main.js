$(function(){

	var toto = $(window).height();
	console.log(toto);

	$(document).scroll(
		function(){
			var position = $(this).scrollTop();
			
			if( position > toto ){
				$(".navFixe").css({
					'position':'fixed',
					'top':100
				});
			} else {
				$(".navFixe").css({'position':'absolute',
									'top':100
								});
				$(".navFixe .navWorks").addClass('navActive');

}
		});



	$('[data-nav-fixe]').on('click', function(e){

		e.preventDefault();

		var navItem = $(this).data('nav-fixe');

		var section = $('.'+navItem+ ' .jsDebut').offset().top;



		console.log(navItem);

		$('html, body').animate({
			
			scrollTop: section - 100

	    }, 1000, 'easeOutCubic');  
	});





	$('.navProjet div:nth-child(1)').on('click',function(){
		$('.carousselProjets').animate({'left':0});
		$('.navProjet div').removeClass('pastilleActive');
		$(this).addClass('pastilleActive');
	});
	$('.navProjet div:nth-child(2)').on('click',function(){
		$('.carousselProjets').animate({'left':-765});
		$('.navProjet div').removeClass('pastilleActive');
		$(this).addClass('pastilleActive');
	});
	$('.navProjet div:nth-child(3)').on('click',function(){
		$('.carousselProjets').animate({'left':-1530});
		$('.navProjet div').removeClass('pastilleActive');
		$(this).addClass('pastilleActive');
	});





	$('.jsBtnClose').on('mouseover',function(){
		$(this).addClass('Hover');
	});

	$('.jsBtnOpen').on('mouseout',function(){
		$('.jsBtnClose').removeClass('Hover');
	});

	$('.jsBtnOpen').on('click',function(){
		$('.portfolioContainer').slideUp();
		$('html, body').animate({scrollTop: $('.works').offset().top -100}, 600, 'easeOutCubic');
	})





var projetactif;
var totalProjets=9;
    
    
    $('.Vign').on('click',function(){

		$('.portfolioContainer').slideDown();
		$('.taf').hide();
		projetactif=Number($(this).data('projet'));
		$('.portfolioContainer').find('.projet'+projetactif).fadeIn();

		$('html, body').animate({scrollTop: $('.portfolioContainer').offset().top}, 600, 'easeOutCubic');
	});




	$('.next').on('click',function(e){

		if (projetactif<totalProjets) {
			$('.portfolioContainer').find('.projet'+projetactif).fadeOut();
			projetactif= projetactif+1;
			//console.log(projetactif);
			$('.portfolioContainer').find('.projet'+projetactif).fadeIn();
		}
		
	});


	$('.prev').on('click',function(e){
		if (projetactif>1) {
			$('.portfolioContainer').find('.projet'+projetactif).fadeOut();
			projetactif= projetactif-1;
			//console.log(projetactif);
			$('.portfolioContainer').find('.projet'+projetactif).fadeIn();
		}
		
	});
	

	$('.navFixe li').on('click',function(){
		$('.navFixe li').removeClass('navActive')
		$(this).addClass('navActive')
	});


    

// Waypoints
			$('div').waypoint(function() {
				
				var data = $(this.element).attr('id');
				$('li[data-link="'+data+'"]').addClass('navActive').siblings().removeClass('navActive');

			})


			$('div').waypoint(function() {
				
				var data = $(this.element).attr('id');
				$('li[data-link="'+data+'"]').addClass('navActive').siblings().removeClass('navActive');

			});
    
// Menu Book
        
     $('.ProjetVign1').on('click',function(){
 
      $('.ProjetOuvert1').slideToggle();
 
   });

});





// StopScrolling

var trapScroll;

(function($){  
  
  trapScroll = function(opt){
    
    var trapElement;
    var scrollableDist;
    var trapClassName = 'trapScroll-enabled';
    var trapSelector = '.trapScroll';
    
    var trapWheel = function(e){
      
      if (!$('body').hasClass(trapClassName)) {
        
        return;
        
      } else {  
        
        var curScrollPos = trapElement.scrollTop();
        var wheelEvent = e.originalEvent;
        var dY = wheelEvent.deltaY;

        // only trap events once we've scrolled to the end
        // or beginning
        if ((dY>0 && curScrollPos >= scrollableDist) ||
            (dY<0 && curScrollPos <= 0)) {

          opt.onScrollEnd();
          return false;
          
        }
        
      }
      
    }
    
    $(document)
      .on('wheel', trapWheel)   
      .on('mouseleave', trapSelector, function(){
        
        $('body').removeClass(trapClassName);
      
      })
      .on('mouseenter', trapSelector, function(){   
      
        trapElement = $(this);
        var containerHeight = trapElement.outerHeight();
        var contentHeight = trapElement[0].scrollHeight; // height of scrollable content
        scrollableDist = contentHeight - containerHeight;
        
        if (contentHeight>containerHeight)
          $('body').addClass(trapClassName); 
      
      });       
  } 
  
})($);

var preventedCount = 0;
var showEventPreventedMsg = function(){  
  $('#mousewheel-prevented').stop().animate({opacity: 1}, 'fast');
}
var hideEventPreventedMsg = function(){
  $('#mousewheel-prevented').stop().animate({opacity: 0}, 'fast');
}
var addPreventedCount = function(){
  $('#prevented-count').html('prevented <small>x</small>' + preventedCount++);
}

trapScroll({ onScrollEnd: addPreventedCount });
$('.trapScroll')
  .on('mouseenter', showEventPreventedMsg)
  .on('mouseleave', hideEventPreventedMsg);      
$('[id*="parent"]').scrollTop(100);

//Owl Carousel 2
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      nav:false,
      margin:0,
      responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        720:{
            items:2,
        },
        1200:{
            items:3,
        }
    }
  });
});
