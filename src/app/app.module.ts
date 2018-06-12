import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderFooterLayoutComponent } from './layout/header-footer-layout/header-footer-layout.component';
import { HeaderAsideFooterLayoutComponent } from './layout/header-aside-footer-layout/header-aside-footer-layout.component';
import { HeaderAsideFooterResponsiveLayoutComponent } from './layout/header-aside-footer-responsive-layout/header-aside-footer-responsive-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderFooterLayoutComponent,
    HeaderAsideFooterLayoutComponent,
    HeaderAsideFooterResponsiveLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
