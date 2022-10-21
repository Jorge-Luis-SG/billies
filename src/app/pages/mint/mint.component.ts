import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

import SwiperCore, { Keyboard, Pagination, Navigation, Virtual } from 'swiper';

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);

SwiperCore.use([Virtual]);

@Component({
  selector: 'app-mint',
  templateUrl: './mint.component.html',
  styleUrls: ['./mint.component.scss'],
})
export class MintComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  value = 0;
  amount = 0;

  sum() {
    this.value++;
    this.amount = 25 * this.value;
    if (this.value > 2) {
      this.value = 2;
      this.amount = 50;
    }
  }
  res() {
    this.value--;
    this.amount = 25 * this.value;
    if (this.value > 2) {
      this.value = 2;
      this.amount = 50;
    }
    if (this.value < 0) {
      this.value = 0;
      this.amount = 0;
    }
  };

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
        el: ".nft-pagination",
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    });
  }
}
