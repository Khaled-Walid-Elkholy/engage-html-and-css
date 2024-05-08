

let FeatureOffSet =  $('#Feature').offset().top;

$(window).scroll(function(){
    // $('navbar').css('background-color' , red);
  let winScroll= $(window).scrollTop();
  if(winScroll > FeatureOffSet - 20){
    $('nav').css('backgroundColor' , 'rgba(0,0,0,0.8)');
    $('#arrow').fadeIn(500)
  }
  else
  {
    $('nav').css('backgroundColor' , 'transparent');
    $('#arrow').fadeOut(500)

  }
});


$("a[href^='#']").click(function(e){
    let linkHref = $(e.target).attr('href');
    let sectionOffSet = $(linkHref).offset().top;
    $("html , body").animate({scrollTop:sectionOffSet}, 2000)


  });

  $('#arrow').click(function(){
    $("html , body").animate({scrollTop:0}, 1000);
  });0


  $(document).ready(function(){
    $('#loading .spinner').fadeOut(1000 , function(){
      $('#loading').fadeOut(1000 , function(){
        $('#loading').remove();
          $('body').css('overflow', 'auto')

      });
    });
  });