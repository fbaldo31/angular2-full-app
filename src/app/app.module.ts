import { NgModule, ApplicationRef }               from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule }                           from "@angular/router";
import { FormsModule }                            from "@angular/forms";
import { BrowserModule }                          from "@angular/platform-browser";
import { HttpModule, Http }                       from "@angular/http";
// Dependencies
import {Ng2BootstrapModule}                       from "ng2-bootstrap";
import {ToastModule}                              from 'ng2-toastr/ng2-toastr';
// import * as Chartjs                               from '../lib/chart.js/dist/Chart.js';
import { ChartsModule }                           from 'ng2-charts/ng2-charts';
// import { TranslateModule, TranslateService }      from 'ng2-translate/ng2-translate';
//  import {LoggerFactory}                            from 'angular2-smart-logger';
// import { CacheModule }                            from 'angular2-cache';
// App Components
import { rootRouterConfig }                       from "./app.routes";
import { AppComponent }                           from "./app.component";
import { FrontHead }                              from './components/partial/front-head/front-head';
import { FrontNav }                               from './components/partial/front-nav/front-nav';
import { TopNav }                                 from './components/partial/top-nav/topnav';
import { About }                                  from './components/about/about';
import { Home }                                   from './components/home/home';
import { RepoBrowser, RepoList, RepoDetail }      from './components/github/index';
import { Github }                                 from './services/github';
import { Sidebar }                                from "./components/partial/sidebar/sidebar";
import { Login }                                  from "./components/login/login";
import { Dashboard }                              from "./components/dashboard/dashboard";

@NgModule({
  declarations: [AppComponent, FrontHead, FrontNav, TopNav, About, RepoBrowser, RepoList, RepoDetail, Home, Login, Sidebar,
    Dashboard],
  imports     : [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig), Ng2BootstrapModule,
    ToastModule, /* TranslateModule.forRoot(), */ ChartsModule],
  providers   : [Github, {provide: LocationStrategy, useClass: HashLocationStrategy}, /* TranslateService*/ ],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
