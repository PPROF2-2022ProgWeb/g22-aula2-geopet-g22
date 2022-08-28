import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit {

  constructor(
    public translate: TranslateService
  ){
    // Register translation languages
    translate.addLangs(['es', 'en']);
    // Set default language
    translate.setDefaultLang('es');
  } 

  //Switch language
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }

  ngOnInit(): void {
  }

}
