import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  navs = ['dashboard', 'posts', 'categories', 'users'];
  show = false;
  constructor() {}

  ngOnInit(): void {}
}
