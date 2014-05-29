/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can 
 * always reference jQuery with $, even when in .noConflict() mode.
 *
 * Google CDN, Latest jQuery
 * To use the default WordPress version of jQuery, go to lib/config.php and
 * remove or comment out: add_theme_support('jquery-cdn');
 * ======================================================================== */

(function($) {

// Use this variable to set up the common and page specific functions. If you 
// rename this variable, you will also need to rename the namespace below.
var Roots = {
  // All pages
  common: {
    init: function() {
      // JavaScript to be fired on all pages
    $('#signup').bind('touchstart', function(e) {
        $(this).toggleClass('hover_effect');    
    });
    $('#signup').bind('touchend', function(e) {
        $(this).toggleClass('hover_effect');    
    });
  } 
  },
  // Home page
  home: {
    init: function() {
      // JavaScript to be fired on the home page
    }
  },
  // About us page, note the change from about-us to about_us.
  about_us: {
    init: function() {
      // JavaScript to be fired on the about us page
    }
  },
  media: {
  init: function() {

    $("#media-carousel").owlCarousel({
       itemsCustom : [
       [0, 2],
       [480, 2],
       [768, 3],
       [1200, 3],
       [1600, 3]
       ],
       navigation : true,
       navigationText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
       pagination: false,
       scrollPerPage : true
      });
      
      $('.instagram-grid').embedagram({
        instagram_id: 181459823,
        thumb_width: 200,
        limit: 12
      }); 
    }
  },
single_videos: {
  init: function() {
    $("#media-carousel").owlCarousel({
       itemsCustom : [
       [0, 2],
       [480, 2],
       [768, 3],
       [1200, 3],
       [1600, 3]
       ],
       navigation : true,
       navigationText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
       pagination: false,
       scrollPerPage : true
      });
    $('.instagram-grid').embedagram({
        instagram_id: 181459823,
        thumb_width: 200,
        limit: 12
      }); 
    }
  },
photos: {
  init: function() {
  }  
  }
};

// The routing fires all common scripts, followed by the page specific scripts.
// Add additional events for more control over timing e.g. a finalize event
var UTIL = {
  fire: function(func, funcname, args) {
    var namespace = Roots;
    funcname = (funcname === undefined) ? 'init' : funcname;
    if (func !== '' && namespace[func] && typeof namespace[func][funcname] === 'function') {
      namespace[func][funcname](args);
    }
  },
  loadEvents: function() {
    UTIL.fire('common');

    $.each(document.body.className.replace(/-/g, '_').split(/\s+/),function(i,classnm) {
      UTIL.fire(classnm);
    });
  }
};
  

$(document).ready(UTIL.loadEvents);



})(jQuery); // Fully reference jQuery after this point.

