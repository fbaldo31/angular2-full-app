import { Component } from '@angular/core';

@Component({
    selector: 'topnav',
    templateUrl: './top-nav.html',
})

export class TopNav {
    // Dropdown:
    public disabled:boolean = false;
    public status:{isopen:boolean} = {isopen: false};
    /**
     * Dropdown part
     */
    public toggled(open:boolean):void {
        console.log('Dropdown is now: ', open);
    }
    public toggleDropdown($event:MouseEvent):void {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    }
}
