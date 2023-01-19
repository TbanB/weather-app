import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  selectedLang: string = 'EN';

  constructor(private translate: TranslateService) {
  }

  ngOnInit(): void {
    this.selectedLang = this.translate.currentLang;
  }

  onClickLang(): void {
    this.selectedLang = this.selectedLang === 'es' ? 'en' : 'es';
    this.translate.use(this.selectedLang);
  }
}
