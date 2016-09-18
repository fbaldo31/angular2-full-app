import { Component } from '@angular/core';

@Component({
    selector: 'topnav',
    templateUrl: './app/components/partial/top-nav/topnav.html',
})

export class TopNav {
    // Dropdown:
    public disabled:boolean = false;
    public status:{isopen:boolean} = {isopen: false};
    public items:Array<string> = ['The first choice!',
        'And another choice for you.', 'but wait! A third!'];
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
