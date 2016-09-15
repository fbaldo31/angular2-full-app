///<reference path="../../typings/index.d.ts"/>

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule }              from './app.module';
// import {LoggerFactory}            from 'angular2-smart-logger';

const platform = platformBrowserDynamic();

// LoggerFactory.configure(require('../config.json'));

platform.bootstrapModule(AppModule);
