import { Component } from '@angular/core';
// import {TranslateService, TranslateLoader} from 'ng2-translate/ng2-translate';

@Component({
  selector   : 'app',
  templateUrl: './app/app.html',
  // providers: [TranslateService, TranslateLoader]
})
export class AppComponent {
  // constructor(public translate: TranslateService, public transLoader: TranslateLoader) {
/*
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');*/
  // }
}
