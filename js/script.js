window.onload = function() {
  mainNavHide();
  msgSent();
  closeIcon();
  backToTop();
}
window.onscroll = function() {
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
    }
  }

  // Message sent
  function msgSent() {
    let btnMsgSent = document.querySelector('.message-send');
    let msgBanner = document.querySelector('.message-wrap');
    btnMsgSent.addEventListener('click', function() {
      msgBanner.classList += ' message-wrap-show';
    })
  }

  // Close Icon
  function closeIcon() {
    let msgBanner = document.querySelector('.message-wrap');
    let xIcon = document.querySelector('.close-icon');
    xIcon.addEventListener('click', function() {
      msgBanner.classList.remove('message-wrap-show');
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
