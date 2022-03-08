import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  ChevronDownModule,
} from '@carbon/icons-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontPageComponent } from '../components/front-page/front-page.component';
import { HeaderComponent } from '../components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChevronDownModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
