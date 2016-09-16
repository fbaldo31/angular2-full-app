import {Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'dashboard',
  templateUrl: './app/components/dashboard/dashboard.html'
})
export class Dashboard implements OnInit {
    public user: {};
    response: {};
    errorMsg: string;
    constructor( private router: Router) {
}
    ngOnInit() {
        this.loadUserInfos();
        if (this.errorMsg) {
            //this.popToast('error', this.errorMsg);
        }
    }
    loadUserInfos () {
        if (localStorage.getItem('user')) {
            return this.user = localStorage.getItem('user');
        }
    }

    saveUserInSession(user: any) {
        if (user) {
            localStorage.setItem('userId', user.id);
            localStorage.setItem('userName', user.username);
            localStorage.setItem('userMail', user.email);
            localStorage.setItem('userRegistration', user.createdAt);
         //   console.debug('User saved:', user);
        }
    }
}
