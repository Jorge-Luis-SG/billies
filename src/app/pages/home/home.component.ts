import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import * as Aos from 'aos';
import { Title } from '@angular/platform-browser';
import * as $ from 'jquery';

import SwiperCore, {
  Keyboard,
  Pagination,
  Navigation,
  Virtual,
  Autoplay,
} from 'swiper';

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual, Autoplay]);

SwiperCore.use([Virtual]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // install Swiper modules
  constructor(private title: Title) {
    Aos.init();
    title.setTitle('Billies | Weekend Vibes | NFT Collection | Giving back');

    $('#videoOpen').click(function () {
      console.log('HOla');
    });
    $('#videoClose').click(function () {
      $('#video').fadeOut(1000);
    });
  }

  openVideo() {
      document.getElementById('video').style.display = 'flex';
      document.getElementById('videoWeb').setAttribute("src", "https://player.vimeo.com/video/763962752?h=a5fb43b8d9")


  }
  closeVideo() {
      document.getElementById('video').style.display = 'none';
      document.getElementById('videoWeb').setAttribute("src", "#")
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  ngAfterViewInit(): void {
    var nft = new Swiper('.nft', {
      slidesPerView: 1,
      loop: true,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        clickable: true,
        el: '.section2-pagination',
      },
      autoplay: {
        delay: 2000,
      },
    });

    var events = new Swiper('.events', {
      slidesPerView: 1,
      loop: true,
      breakpoints: {
        700: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 1,
        },
        1350: {
          slidesPerView: 2,
        },
      },
      autoplay: {
        delay: 3000,
      },
      pagination: {
        clickable: true,
        el: '.event-pagination',
      },
    });
    var benefits = new Swiper('.benefits', {
      slidesPerView: 3,
      // loop: true,
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
        },
      },
      autoplay: {
        delay: 1500,
      },
      navigation: {
        nextEl: '.benefits-next',
        prevEl: '.benefits-prev',
      },
      pagination: {
        clickable: true,
        el: '.benefits-pagination',
      },
    });
    var paz = new Swiper('.paz', {
      slidesPerView: 1,
      breakpoints: {
        700: {
          slidesPerView: 2,
        },
        1300: {
          slidesPerView: 3,
        },
      },
      autoplay: {
        delay: 2500,
      },
      pagination: {
        clickable: true,
        el: '.paz-pagination',
      },
    });
    var alianza = new Swiper('.alianza', {
      slidesPerView: 1,
      loop: true,
      breakpoints: {
        700: {
          slidesPerView: 2,
        },
        1300: {
          slidesPerView: 4,
        },
      },
      pagination: {
        clickable: true,
        el: '.paz-pagination',
      },
      autoplay: {
        delay: 2000,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    throw new Error('Method not implemented.');
  }
}
