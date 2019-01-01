window.onload = function() {
  mainNavHide();
  backToTop();
  blogRow1Show();
}
window.onscroll = function() {
  backToTopShow();
  candiateHeadEx();
  blogShow();
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

  // Candidates header expand
  function candiateHeadEx() {
    let canHead = document.querySelector('.candidates-header');
    let canHeadPos = canHead.getBoundingClientRect().top;
    let scrollPos = window.scrollY;

    if (scrollPos > canHeadPos) {
      canHead.classList += ' candidates-header-ex';
    }
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

  // Blog Show
  function blogRow1Show() {

    let img1 = document.querySelector('.img1');
    let content1 = document.querySelector('.content1');

    img1.classList += ' img1-show';
    content1.classList += ' content1-show';
  }

    function blogShow() {
      let scrollPos = window.scrollY;
      // Row 2
      let row2 = document.querySelector('.blog-row-2');
      let row2Pos = row2.getBoundingClientRect().top;
      let img2 = document.querySelector('.img2');
      let content2 = document.querySelector('.content2');
      // Row 3
      let row3 = document.querySelector('.blog-row-3');
      let row3Pos = row3.getBoundingClientRect().top;
      let img3 = document.querySelector('.img3');
      let content3 = document.querySelector('.content3');

      if (scrollPos > row2Pos) {
        img2.classList += ' img2-show';
        content2.classList += ' content2-show';
      }
      if (scrollPos > row3Pos) {
        img3.classList += ' img3-show';
        content3.classList += ' content3-show';
      }
    }
