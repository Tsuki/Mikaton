import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  constructor() {
  }

  post = {
    title: 'title',
    content: 'content',
    name: 'TsukaTsuki',
    path: '2018/06/11/日記/',
    description: '',
    image: '/images/avatar.gif',
    poster: 'https://as.bitinn.net/upload/cjh9c1pbt00tk6u5np6pyxfi0.1200.jpg',
    created: new Date('2018-06-01T23:47:45+00:00'),
    modified: new Date('2018-06-01T23:47:45+00:00'),
  };

  ngOnInit() {
  }

}
