
/***********Header stickey********** */

$(window).scroll(function() {
  if ($(this).scrollTop() > 1){  
      $('header').addClass("sticky");
    }
    else{
      $('header').removeClass("sticky");
    }
  });

/************************************ */


$( document ).ready(function() {
// tabbed content
$(".date_tab_content").hide();
$(".date_tab_content:first").show();

/* if in tab mode */
$("ul.date-tabs li").click(function() {

  $(".date_tab_content").hide();
  var activeTab = $(this).attr("rel"); 
  $("#"+activeTab).fadeIn();		

  $("ul.date-tabs li").removeClass("active");
  $(this).addClass("active");
});

});
/*************************Date-tabber-end***************************/

$( document ).ready(function() {
  // tabbed content
  $(".date_tab_content2").hide();
  $(".date_tab_content2:first").show();
  
  /* if in tab mode */
  $("ul.date-tabs2 li").click(function() {
  
    $(".date_tab_content2").hide();
    var activeTab = $(this).attr("rel"); 
    $("#"+activeTab).fadeIn();		
  
    $("ul.date-tabs2 li").removeClass("active");
    $(this).addClass("active");
  });
  
  });



  $( document ).ready(function() {
    // tabbed content
    $(".breakup-tab-content").hide();
    $(".breakup-tab-content:first").show();
    
    /* if in tab mode */
    $("ul.breakup-tabs li").click(function() {
    
      $(".breakup-tab-content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
    
      $("ul.breakup-tabs li").removeClass("active");
      $(this).addClass("active");
    });
    
    });

/*************************************************************** */




$( document ).ready(function() {
  // tabbed content
  $(".tab_content").hide();
  $(".tab_content:first").show();
  
  /* if in tab mode */
  $("ul.sub-header-tabs li").click(function() {
  
    $(".tab_content").hide();
    var activeTab = $(this).attr("rel"); 
    $("#"+activeTab).fadeIn();		
  
    $("ul.sub-header-tabs li").removeClass("active");
    $(this).addClass("active");
  
  $(".tab_drawer_heading").removeClass("d_active");
  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
  
  });
  
  /* if in drawer mode */
  $(".tab_drawer_heading").click(function() {
    $(".tab_content").hide();
    var d_activeTab = $(this).attr("rel"); 
    $("#"+d_activeTab).fadeIn();
  
  $(".tab_drawer_heading").removeClass("d_active");
    $(this).addClass("d_active");
  
  $("ul.sub-header-tabs li").removeClass("active");
  $("ul.sub-header-tabs li[rel^='"+d_activeTab+"']").addClass("active");
  });
  
  //$('ul.sub-header-tabs li').last().addClass("tab_last");
  
  });

/*****************Side-bar-accordian ***************** */
$( document ).ready(function() {
$('body').on('click', '.sidebar-service', function(e) {
  event.preventDefault();
  $('.service-link').find('.service-box').stop().slideUp();
  $(this).closest('.service-link').find('.service-box').stop().slideToggle();
});

$(".sidebar-service").click(function(){
  $(this).toggleClass('up');
  $('.sidebar-service').not(this).removeClass('up');
});

});

/*******************Filter box********************/
$( document ).ready(function() {
  $('body').on('click', '.filter-heading', function(e) {
   // $('.filter-link').find('.filter-data').stop().slideUp();
    $(this).closest('.filter-link').find('.filter-data').stop().slideToggle();
  });
 
  $(".filter-heading").click(function(){
    $(this).toggleClass("up");  
    
  });



  $('.filter-row .filter').click(function(){
  $('.filter-box').css("right", "0");
   $('body').addClass('fixed');
  });

  $('.filter-box .close-icon').click(function(){
    $('.filter-box').css("right", "-375px");
    $('body').removeClass('fixed')
    });

    $('.filter-row .sort').click(function(){
      $('.sort-box').css({
        'opacity': '1',
        'z-index': '9'
      });
      
      });
    
      $('.sort-box .close-icon').click(function(){
        $('.sort-box').css({
          'opacity': '0',
          'z-index': '-1'
        });
        });

  });

/*************************End**************************** */

$(document).ready(function(){
  $("#view-datails2").click(function(){ 
    event.preventDefault();
    $("#data2").slideToggle();
  });
});


/*******************************************************/


/********************View Details arrow****************/
$(document).ready(function() {
  $('.view-datails').click(function() {
      $(this).toggleClass('active');
  });
});
/********************************************************/


$(function () {
  $(".toggle-menu").click(function () {
    $(".header-menu").slideToggle("slow");
  });
});







