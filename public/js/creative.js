(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // if (target.length) {
      //   $('html, body').animate({
      //     scrollTop: (target.offset().top - 87)
      //   }, 1000, "easeInOutExpo");
      //   return false;
      // }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      if($('#abt').hasClass('active'))
      {
        console.log("abt-->");
       
        document.getElementById('mainNav').style.background='#24d8c1';
        // document.getElementById('abt').style.color='#fff';
        document.getElementById('serv').style.color='#fff';
        document.getElementById('more').style.color='#fff';
        document.getElementById('cont').style.color='#fff';
        document.getElementById('insur').style.color='#fff';
        document.getElementById('logoName').style.color='#fff';
        document.getElementById('specOffr').style.color='#fff';
      
        if( document.getElementById('loginIcon')){
          document.getElementById('loginIcon').style.color='#fff';
        }
        if( document.getElementById('logoutIcon'))
        {
          document.getElementById('logoutIcon').style.color='#fff';
        }
        


      }
      else if($('#serv').hasClass('active'))
      {
        console.log("serv-->");
        document.getElementById('mainNav').style.background='white';
        document.getElementById('abt').style.color='rgb(33, 37, 41)';
       
        document.getElementById('more').style.color='rgb(33, 37, 41)';
        document.getElementById('cont').style.color='rgb(33, 37, 41)';
        document.getElementById('insur').style.color='rgb(33, 37, 41)';
        document.getElementById('logoName').style.color='rgb(33, 37, 41)';
        document.getElementById('specOffr').style.color='rgb(33, 37, 41)';
       
        // document.getElementById('loginIcon').style.color='rgb(33, 37, 41)';
        // document.getElementById('logoutIcon').style.color='rgb(33, 37, 41)';
        if( document.getElementById('loginIcon')){
          document.getElementById('loginIcon').style.color='rgb(33, 37, 41)';
        }
        if( document.getElementById('logoutIcon'))
        {
          document.getElementById('logoutIcon').style.color='rgb(33, 37, 41)';
        }
      }
      else if($('#more').hasClass('active'))
      {
        console.log("more-->");
        document.getElementById('mainNav').style.background='white';
        document.getElementById('abt').style.color='rgb(33, 37, 41)';
        document.getElementById('serv').style.color='rgb(33, 37, 41)';
        // document.getElementById('more').style.color='rgb(33, 37, 41)';
        document.getElementById('cont').style.color='rgb(33, 37, 41)';
        document.getElementById('insur').style.color='rgb(33, 37, 41)';
        document.getElementById('logoName').style.color='rgb(33, 37, 41)';
        document.getElementById('specOffr').style.color='rgb(33, 37, 41)';
       
        document.getElementById('loginIcon').style.color='rgb(33, 37, 41)';
        document.getElementById('logoutIcon').style.color='rgb(33, 37, 41)';
        // if( document.getElementById('loginIcon')){
        //   document.getElementById('loginIcon').style.color='rgb(33, 37, 41)';
        // }
        // if( document.getElementById('logoutIcon'))
        // {
        //   document.getElementById('logoutIcon').style.color='rgb(33, 37, 41)';
        // }
        
      }
      
      else if($('#specOffr').hasClass('active'))
      {
        console.log("specOffr-->");

        document.getElementById('mainNav').style.background='white';
        document.getElementById('abt').style.color='rgb(33, 37, 41)';
        document.getElementById('serv').style.color='rgb(33, 37, 41)';
        document.getElementById('more').style.color='rgb(33, 37, 41)';
        document.getElementById('cont').style.color='rgb(33, 37, 41)';
        document.getElementById('insur').style.color='rgb(33, 37, 41)';
        document.getElementById('logoName').style.color='rgb(33, 37, 41)';
        
        document.getElementById('loginIcon').style.color='rgb(33, 37, 41)';
        document.getElementById('logoutIcon').style.color='rgb(33, 37, 41)';
        //document.getElementById('specOffr').style.color='rgb(33, 37, 41)';
        // if( document.getElementById('loginIcon')){
        //   document.getElementById('loginIcon').style.color='rgb(33, 37, 41)';
        // }
        // if( document.getElementById('logoutIcon'))
        // {
        //   document.getElementById('logoutIcon').style.color='rgb(33, 37, 41)';
        // }
      }
      else if($('#insur').hasClass('active'))
      {
        console.log("insur-->");
        document.getElementById('mainNav').style.background='white';
        document.getElementById('abt').style.color='rgb(33, 37, 41)';
        document.getElementById('serv').style.color='rgb(33, 37, 41)';
        document.getElementById('more').style.color='rgb(33, 37, 41)';
        document.getElementById('cont').style.color='rgb(33, 37, 41)';
        // document.getElementById('insur').style.color='rgb(33, 37, 41)';
        document.getElementById('logoName').style.color='rgb(33, 37, 41)';
        
        document.getElementById('loginIcon').style.color='rgb(33, 37, 41)';
        document.getElementById('logoutIcon').style.color='rgb(33, 37, 41)';
        document.getElementById('specOffr').style.color='rgb(33, 37, 41)';
        // if( document.getElementById('loginIcon')){
        //   document.getElementById('loginIcon').style.color='rgb(33, 37, 41)';
        // }
        // if( document.getElementById('logoutIcon'))
        // {
        //   document.getElementById('logoutIcon').style.color='rgb(33, 37, 41)';
        // }
      }
      else if($('#cont').hasClass('active'))
      {
        console.log("cont-->");
        document.getElementById('mainNav').style.background='white';
        document.getElementById('abt').style.color='rgb(33, 37, 41)';
        document.getElementById('serv').style.color='rgb(33, 37, 41)';
        document.getElementById('more').style.color='rgb(33, 37, 41)';
        //document.getElementById('cont').style.color='rgb(33, 37, 41)';
        document.getElementById('insur').style.color='rgb(33, 37, 41)';
        document.getElementById('logoName').style.color='rgb(33, 37, 41)';
        document.getElementById('specOffr').style.color='rgb(33, 37, 41)';
        
        document.getElementById('loginIcon').style.color='rgb(33, 37, 41)';
        document.getElementById('logoutIcon').style.color='rgb(33, 37, 41)';
        // if( document.getElementById('loginIcon')){
        //   document.getElementById('loginIcon').style.color='rgb(33, 37, 41)';
        // }
        // if( document.getElementById('logoutIcon'))
        // {
        //   document.getElementById('logoutIcon').style.color='rgb(33, 37, 41)';
        // }
      }
      
      
      // $("#mainNav").addClass("navbar-shrink");
    } else {
      console.log("mainNav-->");
      $("#mainNav").removeClass("navbar-shrink");
      document.getElementById('mainNav').style.background='transparent';
      document.getElementById('abt').style.color='rgba(255,255,255,.7)';
      document.getElementById('serv').style.color='rgba(255,255,255,.7)';
      document.getElementById('more').style.color='rgba(255,255,255,.7)';
      document.getElementById('specOffr').style.color='rgba(255,255,255,.7)';
        document.getElementById('cont').style.color='rgba(255,255,255,.7)';
        document.getElementById('insur').style.color='rgba(255,255,255,.7)';
        document.getElementById('logoName').style.color='rgba(255,255,255,.7)';
       
        document.getElementById('loginIcon').style.color='rgba(255,255,255,.7)';
        document.getElementById('logoutIcon').style.color='rgba(255,255,255,.7)';
        // if( document.getElementById('loginIcon')){
        //   document.getElementById('loginIcon').style.color='rgba(255,255,255,.7)';
        // }
        // if( document.getElementById('logoutIcon'))
        // {
        //   document.getElementById('logoutIcon').style.color='rgba(255,255,255,.7)';
        // }
       

    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);

  // Magnific popup calls
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict
