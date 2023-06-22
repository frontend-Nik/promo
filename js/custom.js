(function ($) {
    "use strict";

    jQuery(document).on("ready", function () {
        const burger = document.getElementById("burger");
        const ul = document.querySelector("nav ul");
        burger.addEventListener("click", () => {
          burger.classList.toggle("show-x");
          menuList.classList.toggle("show");
        });

        $(window).on("scroll", function () {
            if ($(this).scrollTop() > 0) {
              $(".theme-header").addClass("is-sticky");
            } else {
              $(".theme-header").removeClass("is-sticky");
            }
          });
    });

    $(document).ready(function(){
        $("#burger").click(function(){
          $(".overlay").toggleClass("show-overlay");
        });
      });

 
})(jQuery);