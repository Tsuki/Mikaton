import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderFooterLayoutComponent} from './layout/header-footer-layout/header-footer-layout.component';
import {HeaderAsideFooterLayoutComponent} from './layout/header-aside-footer-layout/header-aside-footer-layout.component';
import {HeaderAsideFooterResponsiveLayoutComponent} from './layout/header-aside-footer-responsive-layout/header-aside-footer-responsive-layout.component';
import {HeaderComponent} from './component/header/header.component';
import {AsideComponent} from './component/aside/aside.component';
import {FooterComponent} from './component/footer/footer.component';
import { ArticleComponent } from './component/article/article.component';
import { PageComponent } from './page/page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderFooterLayoutComponent,
    HeaderAsideFooterLayoutComponent,
    HeaderAsideFooterResponsiveLayoutComponent,
    HeaderComponent,
    AsideComponent,
    FooterComponent,
    ArticleComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
