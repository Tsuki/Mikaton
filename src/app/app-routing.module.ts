import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HeaderAsideFooterLayoutComponent} from './layout/header-aside-footer-layout/header-aside-footer-layout.component';
import {HeaderAsideFooterResponsiveLayoutComponent} from './layout/header-aside-footer-responsive-layout/header-aside-footer-responsive-layout.component';
import {HeaderFooterLayoutComponent} from './layout/header-footer-layout/header-footer-layout.component';
import {PageComponent} from './page/page/page.component';

const childRouter: Routes = [
    {path: '', component: PageComponent},
    {path: 'page/:page', component: PageComponent},
  ],
  routes: Routes = [
    {path: '', component: HeaderAsideFooterLayoutComponent, children: childRouter},
    {path: 'header-aside-footer-layout', component: HeaderAsideFooterLayoutComponent, children: childRouter},
    {path: 'header-aside-footer-responsive-layout', component: HeaderAsideFooterResponsiveLayoutComponent, children: childRouter},
    {path: 'header-footer-layout', component: HeaderFooterLayoutComponent, children: childRouter},
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
