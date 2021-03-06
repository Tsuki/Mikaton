import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-aside-footer-layout',
  template: `
    <div class="layout">
      <header>
        <app-header></app-header>
      </header>
      <aside>
        <app-aside></app-aside>
      </aside>
      <main>
        <router-outlet></router-outlet>
      </main>
      <footer>
        <app-footer></app-footer>
      </footer>
    </div>
  `,
  styleUrls: ['./header-aside-footer-layout.component.scss']
})
export class HeaderAsideFooterLayoutComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
