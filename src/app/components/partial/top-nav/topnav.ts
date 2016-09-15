import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import {DropdownToggleDirective} from 'ng2-bootstrap/ng2-bootstrap';

// import { UserService }           from '../../../services/user.service';

@Component({
    selector: 'topnav',
    templateUrl: './app/components/partial/top-nav/topnav.html',
})

export class TopNav {/*implements OnInit {
    public user: any;

    constructor (private userService: UserService, private _router: Router) {}
    ngOnInit () {
        this.user = this.userService.mapUserDatas();
        console.log('End', this.user.username);
    }
    public logOut () {
        localStorage.removeItem('bearer');
        localStorage.removeItem('user');
        this._router.navigate(['/login']);
    }*/
}
