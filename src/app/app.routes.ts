import {Routes}      from '@angular/router';
import {About}       from './components/about/about';
import {Home}        from './components/home/home';
import {RepoBrowser, RepoList, RepoDetail} from './components/github/index';
import {FrontHead}   from "./components/partial/front-head/front-head";
import {FrontNav}    from "./components/partial/front-nav/front-nav";
import {TopNav}      from "./components/partial/top-nav/topnav";
import {Sidebar}     from "./components/partial/sidebar/sidebar";
import {Login}       from "./components/login/login";
import {Dashboard}   from "./components/dashboard/dashboard";
import {DashHome}    from "./components/dash-home/dash-home";

export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '', component: FrontHead},
  {path: '', component: FrontNav},
  {path: 'dashboard', component: Dashboard,
    children: [
      {path: '', component: TopNav},
      {path: '', component: Sidebar},
      {path: '', component: DashHome},
      {path: 'github', component: RepoBrowser,
        children: [
          {path: '', component: RepoList},
          {path: ':org', component: RepoList,
            children: [
              {path: '', component: RepoDetail},
              {path: ':repo', component: RepoDetail}
            ]
          }]
      }
        ]
  },
  {path: 'home', component: Home},
  {path: 'about', component: About},
  {path: 'login', component: Login},
];

