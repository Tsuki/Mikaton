import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  display = false;

  constructor(private router: Router, private location: Location) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((next) => {
      if (next instanceof NavigationEnd) {
        this.display = next.url === '/';
      }
    });
  }
}
