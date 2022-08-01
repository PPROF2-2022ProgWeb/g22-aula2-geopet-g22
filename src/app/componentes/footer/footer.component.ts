import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

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