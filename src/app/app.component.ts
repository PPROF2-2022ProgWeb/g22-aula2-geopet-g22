import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GeoPet';
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
}
