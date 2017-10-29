import { Component, AfterViewInit, ViewContainerRef } from '@angular/core';
import { Router }                   from '@angular/router';
import { ToastsManager }            from 'ng2-toastr/ng2-toastr';


@Component({
    selector: 'login',
    templateUrl: './login.html'
})
export class Login implements AfterViewInit {
    errorMsg: string;
    successMsg: string;
    mode = 'Promise';
    secret = '4ok2x70rlfokc8g0wws8c8kwcokw80k44sg48goc0ok4w0so0k';
    client_id = '1_3bcbxd9e24g0gk4swg0kwgcwg4o8k8g4g888kwc44gcc0gwwk4';

    constructor(private _router: Router, private _toastr: ToastsManager, vRef: ViewContainerRef) {
        this._toastr.setRootViewContainerRef(vRef);
    }

    ngAfterViewInit() {
        if (this.errorMsg) {
            console.log('init');
            this._toastr.error('error', this.errorMsg);
        } else if (this.successMsg) {
            this._toastr.success('Welcome', this.successMsg);
        }
    }
    login (username: string, password: string) {
        if (!username || !password ) { return; }
        this._toastr.info('Welcome', this.successMsg = 'You are logged in');
        this.saveToken('token', this.client_id);
        console.log(this.successMsg);
        this._router.navigate(['dashboard']);
    }

    saveToken(token_type:  string, access_token: string) {
        if (token_type && access_token) {
            localStorage.setItem(token_type, access_token);
            // console.debug('Token saved:',token_type, access_token);
        }
    }
    displayError(error: any) {
        this.errorMsg = error;
        this._toastr.error('error', this.errorMsg);
        console.log('Error message:', this.errorMsg);
    }
}
