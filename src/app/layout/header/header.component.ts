import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  activeMenu = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeMenu = this.router.url;
    console.log('this.activeMenu - ', this.activeMenu);
  }

  navigate(s: string) {
    this.activeMenu = s;
    this.router.navigateByUrl(s);
  }
}
