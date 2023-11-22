// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common'; // Import CommonModule

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import {AdditionalContentComponent} from "./additional-content/additional-content.component";
import {CarouselComponent} from "./carousel/carousel.component";

@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    CommonModule,
    AdditionalContentComponent,
    CarouselComponent,
    // Include CommonModule in the 'imports' array

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
