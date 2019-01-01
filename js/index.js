window.onload = function() {
  mainNavHide();
  backToTop()
}
window.onscroll = function() {
  backToTopShow();
  candiateHeadEx();
  candidatesShow();
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

  // Candidates Show
  function candidatesShow() {
    let scrollPos = window.scrollY;
    let candidatesCont = document.querySelector('.candidates-content');
    let candidatesContPos = candidatesCont.getBoundingClientRect().top;
    let boxNeymar = document.querySelector('.box-neymar');
    let boxMessi = document.querySelector('.box-messi');
    let boxRonaldo = document.querySelector('.box-ronaldo');

    if (scrollPos > candidatesContPos) {
      boxNeymar.classList += ' box-neymar-show';
      boxMessi.classList += ' box-messi-show';
      boxRonaldo.classList += ' box-ronaldo-show';
    } else {
      boxNeymar.classList = 'box box-neymar';
      boxMessi.classList = 'box box-messi';
      boxRonaldo.classList = 'box box-ronaldo';
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
