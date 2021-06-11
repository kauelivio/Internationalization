import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  lang: any;

  constructor( private http: HttpClient) { }

  ngOnInit(): void {

    this.lang = localStorage.getItem('lang') || 'en';
  }

  changeLang(lang: any) {
    localStorage.setItem('lang', lang);
    window.location.reload();
  }

}
