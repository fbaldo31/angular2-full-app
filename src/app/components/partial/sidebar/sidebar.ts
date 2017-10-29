import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.html',
    // directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class Sidebar {
    isActive = false;
    showMenu: string = '';

    constructor (private _router: Router) {}
    eventCalled() {
        this.isActive = !this.isActive;
    }
    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
}
