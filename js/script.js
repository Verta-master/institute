//Mobile menu
$('.menu__btn').click(function() {
  $(this).next().slideToggle();
  $('.menu').toggleClass('menu--closed');
  $('.menu').toggleClass('menu--opened');
});

$('.menu__open').click(function() {
  $(this).next().slideToggle();
});

//Scroll to menu anchor
$(document).ready(function () {
  $(document).on("scroll", onScroll);

  //smoothscroll
  $('.menu__item a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('.menu__item a').each(function () {
        $(this).removeClass('menu__link--active');
    })
    $(this).addClass('menu__link--active');

    var target = this.hash,
        menu = target;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top - 100
    }, 500, 'swing', function () {
        $(document).on("scroll", onScroll);
    });
  });
});

function onScroll(event){
  var scrollPos = $(document).scrollTop() + 150;
  if (scrollPos > 150) {
    $(".header").css({
      'background-color': 'rgba(26, 25, 30, 0.7)',
      'transition': 'background-color 0.5s ease'
    });
    $(".menu__sublist").css({
      'background-color': 'rgba(26, 25, 30, 0.5)',
    });
  } else {
    $(".header").css({
      'background-color': 'rgba(26, 25, 30, 0)',
      'transition': 'background-color 0.5s ease'
    });
    $(".menu__sublist").css({
      'background-color': 'rgba(26, 25, 30, 0)',
    });
  }
  $('.menu__item a').each(function () {
      event.preventDefault();
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('.menu__item a').removeClass("menu__link--active");
          currLink.addClass("menu__link--active");
      }
  });
}
