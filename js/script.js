/*
スライドメニューパネル
=================================================== */
const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const menuPanel = document.querySelector('#menu-panel');
const menuItems = document.querySelectorAll('#menu-panel li');
const menuOptions = {
  duration: 1400,
  easing: 'ease',
  fill: 'forwards',
};

menuOpen.addEventListener('click', () => {
  menuPanel.animate({ translate: ['100vw', 0] }, menuOptions);
});

menuClose.addEventListener('click', () => {
  menuPanel.animate({ translate: [0, '100vw'] }, menuOptions);
});

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    menuPanel.animate({ translate: [0, '100vw'] }, menuOptions);
  });
});

/*
スクロールで要素を表示(FADE IN)
=================================================== */
const animateFade = (entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.animate(
        {
          opacity: [0, 1],
          filter: ['blur(.4rem)', 'blur(0)'],
        },
        {
          duration: 2000,
          easing: 'ease',
          fill: 'forwards',
        }
      );
      obs.unobserve(entry.target);
    }
  });
};
const fadeObserver = new IntersectionObserver(animateFade);
const fadeElements = document.querySelectorAll('.fadein');
fadeElements.forEach((fadeElement) => {
  fadeObserver.observe(fadeElement);
});

/*
スクロールで要素を動かす(BUS)
=================================================== */
const animateBus = (entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (window.outerWidth < 768) {
        entry.target.animate(
          {
            translate: ['50px 0', '0 0'],
            transform: ['rotate(0)', 'rotate(5deg)', 'rotate(0)', 'rotate(5deg)', 'rotate(0)'],
          },
          {
            duration: 3000,
            fill: 'forwards',
          }
        );
      } else {
        entry.target.animate(
          {
            translate: ['20vw 0', '0 0'],
            transform: ['rotate(0)', 'rotate(5deg)', 'rotate(0)', 'rotate(5deg)', 'rotate(0)'],
          },
          {
            duration: 3000,
            fill: 'forwards',
          }
        );
      }
      obs.unobserve(entry.target);
    }
  });
};
const busObserver = new IntersectionObserver(animateBus);
busObserver.observe(document.querySelector('.image-bus'));

/*
スクロールで要素を動かす(BIRD01 BIRD02)
=================================================== */
const animateBird = (entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
       entry.target.animate(
          {
            translate: ['100px 50px', '0 0'],
          },
          {
            duration: 2000,
            easing: 'ease',
            fill: 'forwards',
          }
        );
        document.querySelector('.image-bird02').animate(
          {
            translate: ['100px 50px', '0 0'],
          },
          {
            duration: 3000,
            easing: 'ease',
            fill: 'forwards',
          }
        );
      obs.unobserve(entry.target);
    }
  });
};
const birdObserve = new IntersectionObserver(animateBird);
birdObserve.observe(document.querySelector('.image-bird01'));

/*
スクロールで要素を動かす(PIANO KUREYON)
=================================================== */
const animatePiano = (entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.animate(
        {
          transform: ['rotate(-15deg)', 'rotate(0deg)', 'rotate(-15deg)'],
        },
        {
          duration: 900,
          direction: 'alternate',
          iterations: 2,
          fill: 'forwards',
        }
      );
      document.querySelector('.image-kureyon').animate(
        {
          transform: ['rotate(20deg)', 'rotate(0deg)', 'rotate(20deg)'],
        },
        {
          duration: 900,
          direction: 'alternate',
          iterations: 2,
          fill: 'forwards',
        }
      );
      obs.unobserve(entry.target);
    }
  });
};
const pianoObserve = new IntersectionObserver(animatePiano);
pianoObserve.observe(document.querySelector('.image-piano'));

/*
スクロールで要素を動かす(BOY GIRL)
=================================================== */
const animateBoy = (entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (window.outerWidth < 768) {
        entry.target.animate(
          {
            translate: ['-10vw 0', '0 0'],
            transform: ['rotate(0deg)', 'rotate(10deg)', 'rotate(0deg)', 'rotate(10deg)', 'rotate(0deg)'],
          },
          {
            duration: 2000,
            fill: 'forwards',
          }
        );
        document.querySelector('.image-girl').animate(
          {
            translate: ['10vw 0', '0 0'],
            transform: ['rotate(0)', 'rotate(-10deg)', 'rotate(0)', 'rotate(-10deg)', 'rotate(0)'],
          },
          {
            duration: 2000,
            fill: 'forwards',
          }
        );
      } else {
        entry.target.animate(
          {
            translate: ['-100px 0', '0 0'],
            transform: ['rotate(0)', 'rotate(10deg)', 'rotate(0)', 'rotate(10deg)', 'rotate(0)', 'rotate(10deg)', 'rotate(0)', 'rotate(10deg)', 'rotate(0)'],
          },
          {
            duration: 2500,
            fill: 'forwards',
          }
        );
        document.querySelector('.image-girl').animate(
          {
            translate: ['100px 0', '0 0'],
            transform: ['rotate(0)', 'rotate(-10deg)', 'rotate(0)', 'rotate(-10deg)', 'rotate(0)', 'rotate(-10deg)', 'rotate(0)', 'rotate(-10deg)', 'rotate(0)'],
          },
          {
            duration: 2500,
            fill: 'forwards',
          }
        );
      }
      obs.unobserve(entry.target);
    }
  });
};
const boyObserve = new IntersectionObserver(animateBoy);
boyObserve.observe(document.querySelector('.image-boy'));
