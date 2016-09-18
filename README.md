Angular2 Full App
=================================

Angular 2 rc.6 with Bootstrap 4 TypeScript Systemjs and Gulp. A couple of must-have components have
been already integrated and others will come soon.

Prerequisites
-------------
Please install last stable version:
- nodejs
- gulp and gulp-cli
- typings
- typescript
- ts-node
> npm install -g gulp gulp-cli typings typescript ts-node

Running
-------

Clone the repository:

> git clone https://github.com/fbaldo31/angular2-full-app.git

Navigate to `angular2-full-app` directory:

> cd angular2-full-app

Install dependencies:

> npm install

`node_modules` and `typings` directories should be created during the install.

Build the project:
> npm run build

`build` directory should be created during the build

> npm start

The application should be displayed in the browser.

Resources
---------
Ready to use:
- ng2-bootstrap - http://valor-software.com/ng2-bootstrap
- ng2-toastr - https://github.com/PointInside/ng2-toastr

Will be integrated asap:
- ng2-translate - https://github.com/ocombe/ng2-translate
- ng2-charts - https://github.com/valor-software/ng2-charts

To do:
- rename lib to vendor
- implement a cache system
- tests
- ugrade to rc.7
- provide examples of directive, pipe...
What else ?
----------
Feel free to contribute or suggest improvement f.baldo31@gmail.com