
$(document).ready(function () {
    $("button").click(function () {
        $("#test").fadeIn();
    });
});


// Add FadeIn, Add fadeOut for a terms and conditions
$(document).ready(function(){
    $(".btn1").click(function(){
      $(".panel").fadeOut();
    });
    $(".btn2").click(function(){
      $(".panel").fadeIn();
    });
  });

// Add FadeIn, Add fadeOut for a terms and conditions
$(document).ready(function(){
    $(".flip").click(function(){
      $(".panel").fadeToggle(3000);
    });
  });

  


//   Add a hover to a "read more" button that runs a slideUp and SlideDown to another item: on the page
  $(document).ready(function(){
    $("#read").hover(function(){
      $("#para").slideToggle("slow");
    });
});



// Add a show and hide effect using the toggle method:
$(document).ready(function(){
    $("#shop").click(function(){
      $("#shopPara").toggle();
    });
  });




function myFunction() {
   var element = document.getElementById("container");
   element.classList.toggle("dark-mode");
}


var darkMode;
if (localStorage.getItem('dark-mode')) { 
  // if dark mode is in storage, set variable with that value
  darkMode = localStorage.getItem('dark-mode'); 
}else { 
  // if dark mode is not in storage, set variable to 'light'
  darkMode ='light'; 
}
// set new localStorage value
localStorage.setItem('dark-mode', darkMode);
if (localStorage.getItem('dark-mode') =='dark') {
  // if the above is 'dark' then apply .dark to the body
  $('body').addClass('dark'); 
  // hide the 'dark' button
  $('.dark-button').hide();
  // show the 'light' button
  $('.light-button').show();
}
// Enable the Dark/Light Mode toggle buttons

$('.dark-button').on('click',function() { 
      $('.dark-button').hide();
      $('.light-button').show();
      $('body').addClass('dark'); 
      // set stored value to 'dark'
      localStorage.setItem('dark-mode','dark');
    });
    $('.light-button').on('click',function() { 
      $('.light-button').hide();
      $('.dark-button').show();
      $('body').removeClass('dark');
      // set stored value to 'light'
      localStorage.setItem('dark-mode','light');  
    });
    
    

    // use jQuery to target and add the "alt" and "title" attributes to the images
    jQuery(document).ready(function($) {
        $("img:not([title])").each(function() {
                if($(this).attr("alt") != '') $(this).attr("title", $(this).attr("alt"));
                else $(this).attr("title", $(this).attr("src"));
        });
    });