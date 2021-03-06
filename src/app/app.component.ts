import { Component }        from '@angular/core';
import {TranslateService}   from '@ngx-translate/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public defaultLang: string;
  constructor(translate: TranslateService) {
    /** Setup the default language */
    this.defaultLang = translate.getBrowserLang();

    if (this.defaultLang !== 'undefined') {
      translate.setDefaultLang(this.defaultLang);
      translate.use(this.defaultLang);
    } else {
      // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang('en');
      // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use('en');
    }
    console.log('Browser Lang:', translate.currentLang);
  }
}
