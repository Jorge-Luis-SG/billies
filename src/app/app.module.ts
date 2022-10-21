import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


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
import { RouterModule } from '@angular/router';
import { MintComponent } from './pages/mint/mint.component';
import { LangComponent } from './lang/lang.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BtnComponent,
    CardEventComponent,
    AdvertisementsComponent,
    BenefitsComponent,
    FooterComponent,
    MintComponent,
    LangComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
    ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
