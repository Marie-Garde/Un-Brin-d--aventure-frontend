import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  ChevronDownModule,
  LogoFacebookModule,
  LogoInstagramModule,
} from '@carbon/icons-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontPageComponent } from '../components/front-page/front-page.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChevronDownModule,
    LogoFacebookModule,
    LogoInstagramModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
