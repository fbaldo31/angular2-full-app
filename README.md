Angular2 Full App
=================================

A basic Angular2 application with Gulp as build system based on Angular2 with TypeScript and Gulp.

Prerequisites
-------------

- nvm (optional)
- nodejs 4.5.0
- gulp and gulp-cli
- typings
- typescrit
- ts-node

Running
-------

Clone the repository:

> git clone https://github.com/fbaldo31/angular2-full-app.git

Navigate to `angular2-full-app` directory:

> cd angular2-full-app

Install dependencies:

> nvm use 4 (optional)
> npm install

`node_modules` and `typings` directories should be created during the install.

Build the project:
First check gulp-sass is correctly built:
> npm rebuild node-sass
> npm run build

`build` directory should be created during the build

> npm start

The application should be displayed in the browser.

Resources
---------
Ready to use:
- ng2-bootstrap - http://valor-software.com/ng2-bootstrap
- ng2-toastr - https://github.com/PointInside/ng2-toastr
- angular-smart-logger - https://github.com/apoterenko/angular2-smart-logger

Will be ready soon:
- ng2-translate - https://github.com/ocombe/ng2-translate
- ng2-charts - https://github.com/valor-software/ng2-charts

A step-by-step tutorial - http://blog.codeleak.pl/2016/03/quickstart-angular2-with-typescript-and.html
