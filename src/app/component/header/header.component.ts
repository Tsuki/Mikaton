import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  title = 'TsukaTsuki';
  headerLinks = [
    {link: '', name: 'home', icon: 'home'},
    {link: 'archives', name: 'archives', icon: 'archive'},
    {link: 'about', name: 'about', icon: 'user'},
    {link: 'categories', name: 'categories', icon: 'th'},
    {link: 'note', name: 'note', icon: 'archive'},
  ];

  ngOnInit() {
  }

  displayNav(node): void {
    if (node.classList.contains('site-nav-on')) {
      node.classList.remove('site-nav-on');
    } else {
      node.classList.add('site-nav-on');
    }
    console.log(node);
  }
}
