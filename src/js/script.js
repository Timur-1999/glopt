$(document).ready(function(){
    $('.carousel').slick({
      slidesToShow: 3,
      variableWidth: true,
      centerMode: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="../icons/arrow/arrow-left.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="../icons/arrow/arrow-right.png"></button>',
    });
  });