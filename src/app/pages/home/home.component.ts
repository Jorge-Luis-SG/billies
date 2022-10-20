import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';


import SwiperCore, { Keyboard, Pagination, Navigation, Virtual } from 'swiper';

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);

SwiperCore.use([Virtual]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // install Swiper modules
  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngAfterViewInit(): void {

    var nft = new Swiper(".nft", {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

      pagination: {
        clickable: true,

      }

    });
    var events = new Swiper(".events", {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1300: {
            slidesPerView: 3,
          }
      },
      pagination: {
        clickable: true,
        el: ".benefits-pagination",


      }

    });
    var benefits = new Swiper(".benefits", {
      slidesPerView: 3,
      // loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        500: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 4,
        },
        1300: {
            slidesPerView: 6,
          }
      },
      pagination: {
        clickable: true,
        el: ".benefits-pagination",
      },

    });
    var paz = new Swiper(".paz", {
      slidesPerView: 1,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        700: {
          slidesPerView: 2,
        },
        1300: {
            slidesPerView: 3,
          }
      },
      pagination: {
        clickable: true,
        el: ".paz-pagination",
      },

    });
    var alianza = new Swiper(".alianza", {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        700: {
          slidesPerView: 2,
        },
        1300: {
            slidesPerView: 4,
          }
      },
      pagination: {
        clickable: true,
        el: ".paz-pagination",
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    });
    throw new Error('Method not implemented.');
  }
}
