import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-footer-layout',
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
  styleUrls: ['./header-footer-layout.component.scss']
})
export class HeaderFooterLayoutComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
