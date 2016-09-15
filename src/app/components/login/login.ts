import { Component, AfterViewInit } from '@angular/core';
// import { FormBuilder } from '@angular/forms'; /* FormGroup, Validators*/
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

// import { AuthService } from '../../services/auth.service';
// import { FormStateModel } from '../../models/form/form-state.model';
// import { LoginRequestModel } from '../../models/auth/login-request.model';
// import * as moment from 'moment';

@Component({
    selector: 'login',
    templateUrl: './app/components/login/login.html'
})
export class Login implements AfterViewInit {
    errorMsg: string;
    successMsg: string;
    mode = 'Promise';
    secret = '4ok2x70rlfokc8g0wws8c8kwcokw80k44sg48goc0ok4w0so0k';
    client_id = '1_3bcbxd9e24g0gk4swg0kwgcwg4o8k8g4g888kwc44gcc0gwwk4';
    token_type: string;
    access_token: string;
    // Dropdown:
    public disabled:boolean = false;
    public status:{isopen:boolean} = {isopen: false};
    public items:Array<string> = ['The first choice!',
        'And another choice for you.', 'but wait! A third!'];
    constructor (private _router: Router, public _toastr: ToastsManager) {}

    ngAfterViewInit() {
        if (this.errorMsg) {
            console.log('init');
            this._toastr.error('error', this.errorMsg);
        } else if (this.successMsg) {
            this._toastr.success('Welcome', this.successMsg);
        }
    }
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
    login (username: string, password: string) {
        if (!username || !password ) { return; }
        /* this._authService.setTokenParams(this.client_id, this.secret, username, password)
            .then(
                token => {
                    this.saveToken(token.token_type, token.access_token);
                    this._router.navigate(['/dashboard']);	},
                error =>  { this.errorMsg = <any>error; this.displayError(<any>error); }
            );*/
        this._router.navigate(['dashboard']);
        this._toastr.warning('Welcome', this.successMsg = 'You are logged in');
    }

    saveToken(token_type:  string, access_token: string) {
        if (token_type && access_token) {
            localStorage.setItem(token_type, access_token);
            // console.debug('Token saved:',token_type, access_token);
        }
    }
    displayError(error: any) {
        this.errorMsg = error;
        // this._toaster.error('error', this.errorMsg);
        // console.log('Error message:', this.errorMsg);
    }
}
