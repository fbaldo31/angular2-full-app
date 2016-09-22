(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'lib/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            // other libraries
            'rxjs': 'npm:rxjs',
            'moment': 'npm:moment/min/moment-with-locales.min.js',
            'ng2-bootstrap': 'npm:ng2-bootstrap',
            'ng2-bootstrap/components': 'npm:ng2-bootstrap/components',
            'ng2-toastr': 'npm:ng2-toastr',
            'ng2-translate': 'npm:ng2-translate',
            'ng2-charts': 'npm:ng2-charts',
            // 'angular2-smart-logger': 'npm:angular2-smart-logger',
            // 'angular2-cache': 'npm:angular2-cache'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './app.main.js',
                format: 'register',
                defaultExtension: 'js'
            },
            rxjs: {
                main: "Rx",
                defaultExtension: 'js'
            },
            'ng2-bootstrap': {
                main: 'ng2-bootstrap',
                defaultExtension: 'js'
            },
            'ng2-toastr': {
                main: 'ng2-toastr',
                defaultExtension: 'js'
            },
            'ng2-charts': {
                main: 'ng2-charts',
                defaultExtension: 'js'
            },
            'ng2-translate': {
                main: 'ng2-translate',
                defaultExtension: 'js'
            },
            // 'angular2-smart-logger': {
            //     main: 'Logger',
            //     defaultExtension: 'js'
            // },
            // 'angular2-cache': {
            //     main: 'Cache',
            //     defaultExtension: 'js'
            // }
            // tether: {
             //   defaultExtension: 'js'
            // },
        }
    });
})(this);
