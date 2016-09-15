import {Component, /* ViewEncapsulation,*/ Inject, OnInit /* AfterViewChecked */ } from '@angular/core';
import { Router } from '@angular/router';
// import {CacheService} from 'ng2-cache/ng2-cache';
// Shared
/*
import {TopNavComponent} from '../../../shared/topnav/topnav';
import {SidebarComponent} from '../../../shared/sidebar/sidebar';
// Bootstrap examples
import {HomeComponent} from '../../../pages/home/components/home';
import {ChartComponent} from '../../../pages/charts/components/charts';
import {GridComponent} from '../../../pages/grid/components/grid';
import {FormComponent} from '../../../pages/forms/components/forms';
import {TableComponent} from '../../../pages/tables/components/tables';
import {BSElementComponent} from '../../../pages/bootstrap-element/components/bs_element';
import {BlankPageComponent} from '../../../pages/blank-page/components/blank_page';
import {NG2Component} from '../../../pages/component/components/component';
// API Pages
import {ProfileComponent} from '../../../profile/profile';
import {DeezerComponent}  from '../../../deezer/deezer';
// Used for API
import 'rxjs/add/operator/toPromise';
import { UserService }       from '../../../../services/user.service';
import { AuthService }       from '../../../../services/auth.service';
import { DeezerService }     from '../../../../services/deezer.service';
//import { User }         from '../../../api';
*/
@Component({
  selector: 'dashboard',
  templateUrl: './app/components/dashboard/dashboard.html'
})
/*
export const sidebarRoutes: Routes = [
    { path: '/home', component: HomeComponent },
    { path: '/chart', component: ChartComponent },
    { path: '/table', component: TableComponent },
	{ path: '/forms', component: FormComponent },
	{ path: '/element', component: BSElementComponent},
	{ path: '/grid', component: GridComponent },
	{ path: '/component', component: NG2Component },
	{ path: '/blank-page', component: BlankPageComponent },
    { path: '/profile', component: ProfileComponent },
    { path: '/deezer', component: DeezerComponent }
];
*/
export class Dashboard implements OnInit {
    public user: {};
    response: {};
    errorMsg: string;
    plStats: any;
    constructor( /* @Inject('API_URL') private API_URL: string,*/ private router: Router) {
}
               // private userService: UserService) { }

    ngOnInit() {
        this.loadUserInfos();
        if (this.errorMsg) {
            //this.popToast('error', this.errorMsg);
        }
    }
    loadUserInfos () {
        if (localStorage.getItem('user')) {
            return this.user = localStorage.getItem('user');
        } /*
        else {
            return this.userService.getUser().then(
                user => {
                    this.saveUserInSession(<any>user);
                    //this.user = new User[];//Object.keys(user).map(function (value, key, user) {return user[key] = value;});
                    this.user = <any>user;//this.user = Object.keys(user).map(function (key) {return user[key]});
                },
                error => this.router.navigate(['/'])
        )}*/
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
