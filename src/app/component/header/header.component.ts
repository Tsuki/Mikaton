import {Component, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  title = environment.title;
  headerLinks = environment.headerLinks;

  ngOnInit() {
  }

  displayNav(node: HTMLElement): void {
    if (node.classList.contains('site-nav-on')) {
      node.classList.remove('site-nav-on');
    } else {
      node.classList.add('site-nav-on');
    }
    console.log(node);
  }
}
