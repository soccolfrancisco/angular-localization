import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  siteLanguage: string = 'English';
  siteLocale: string = '';

  languageList: Array<{code: string, label: string}> = [
    { code: 'br', label: 'Brazil' },
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'de', label: 'Deutsch' }
  ];

  constructor() { }

  ngOnInit() {
    this.siteLocale = window.location.pathname.split('/')[1];

    for (let item of this.languageList) {
      if (item.code == this.siteLocale) {
        this.siteLanguage = item.label;
      }
    }
  }
}
