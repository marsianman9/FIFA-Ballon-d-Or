window.onload = function() {
  mainNavHide();
  backToTop();
}
window.onscroll = function() {
  backToTopShow();
}

  // $('.main-nav').hide();
  function mainNavHide() {
    $('.btn-nav').click(function() {
      $(this).toggleClass('toggle');
    }).click(function() {
      $('.main-nav').slideToggle();
    })
  }

  // Back to Top
  function backToTop() {
    $('#goTop').click(function() {
      $('html,body').animate({
        scrollTop: $('#top').offset().top
      },600);
    })
  }

  // Back to Top Show
  function backToTopShow() {
    let scrollPos = window.scrollY;
    let goTopBtn = document.querySelector('.btn-goTop');

    if(scrollPos > 100) {
      goTopBtn.classList += ' btn-goTop-show';
    } else {
      goTopBtn.classList = 'btn-goTop';
    }
  }
