import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HeaderAsideFooterLayoutComponent} from './layout/header-aside-footer-layout/header-aside-footer-layout.component';
import {HeaderAsideFooterResponsiveLayoutComponent} from './layout/header-aside-footer-responsive-layout/header-aside-footer-responsive-layout.component';
import {HeaderFooterLayoutComponent} from './layout/header-footer-layout/header-footer-layout.component';

const routes: Routes = [
  {path: 'header-aside-footer-layout', component: HeaderAsideFooterLayoutComponent},
  {path: 'header-aside-footer-responsive-layout', component: HeaderAsideFooterResponsiveLayoutComponent},
  {path: 'header-footer-layout', component: HeaderFooterLayoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
