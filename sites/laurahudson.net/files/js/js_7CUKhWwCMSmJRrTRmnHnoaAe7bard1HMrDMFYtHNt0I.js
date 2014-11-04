/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - http://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {

// Place your code here.

    // hide taxonomy page descriptions, but show 1st ¶
    $(document).ready(function() {
      $("#block-views-custom-taxonomy-pages-block .body p").slice(1).hide();
      $('#block-views-custom-taxonomy-pages-block .body').after('<div id="toggleLinks"><a class="toggle more">Read More</a><a class="toggle less">Read Less</a></div>');
      $("#block-views-custom-taxonomy-pages-block #toggleLinks a.less").hide();
      $("#toggleLinks a.more").click(function () {
        $("#block-views-custom-taxonomy-pages-block .body p").slice(1).slideToggle();
        $("#toggleLinks a.toggle").toggle();
      });
      $("#toggleLinks a.less").click(function () {
        $("#block-views-custom-taxonomy-pages-block .body p").slice(1).slideToggle();
        $("#toggleLinks a.toggle").toggle();
      });
    });
    // toggle visibility of the rest of them  


// /End Place your code here.

})(jQuery, Drupal, this, this.document);
;
