import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardEventComponent } from './components/card-event/card-event.component';
import { BtnComponent } from './components/btn/btn.component';
import { SwiperModule } from 'swiper/angular';
import { AdvertisementsComponent } from './components/advertisements/advertisements.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BtnComponent,
    CardEventComponent,
    AdvertisementsComponent,
    BenefitsComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    FormsModule,
    IvyCarouselModule,
    CarouselModule,
    RouterModule
    ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
