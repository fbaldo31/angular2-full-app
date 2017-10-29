import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule }                           from "@angular/router";
import { FormsModule }                            from "@angular/forms";
import { HttpModule, Http }                       from "@angular/http";
// Dependencies
import { MatCardModule }                          from '@angular/material';
import {BrowserAnimationsModule}                  from '@angular/platform-browser/animations';
import {Ng2BootstrapModule, BsDropdownModule}     from "ngx-bootstrap";
import {ToastModule, ToastsManager}               from 'ng2-toastr/ng2-toastr';
import {TranslateModule, TranslateLoader}         from '@ngx-translate/core';
import { ChartsModule }                           from 'ng2-charts';
import { NgxDatatableModule }                     from '@swimlane/ngx-datatable';
// App Components
import { rootRouterConfig }                       from "./app.routes";
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
import {DashHome}                                 from "./components/dash-home/dash-home";
import {Table}                                    from "./components/table/table";
import {Charts}                                   from "./components/charts/charts";

@NgModule({
  declarations: [AppComponent, FrontHead, FrontNav, TopNav, About, RepoBrowser, RepoList, RepoDetail, Home, Login, Sidebar,
    Dashboard, DashHome, Table, Charts],
  imports     : [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig), Ng2BootstrapModule.forRoot(),
    ToastModule.forRoot(), ChartsModule, TranslateModule.forRoot({
      // provide: TranslateLoader,
      //useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
      //deps: [Http]
    }), MatCardModule, BrowserAnimationsModule, BsDropdownModule.forRoot(), NgxDatatableModule],
  providers   : [Github, {provide: LocationStrategy, useClass: HashLocationStrategy} ],
  exports     : [TranslateModule],
  bootstrap   : [AppComponent]
})
export class AppModule { }
