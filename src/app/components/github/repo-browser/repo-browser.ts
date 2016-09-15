import { Component } from '@angular/core';
import { Router }    from '@angular/router';
import { Github }    from '../../../services/github';

@Component({
  selector: 'repo-browser',
  templateUrl: './app/components/github/repo-browser/repo-browser.html',
  styleUrls: ['./app/components/github/repo-browser/repo-browser.css']
})
export class RepoBrowser {

  constructor(private router: Router, private github: Github) {
  }

  searchForOrg(orgName: string) {
    this.github.getOrg(orgName)
      .subscribe(({name}) => {
        console.log(name);
        this.router.navigate(['dashboard/github', orgName]);
      });
  }

}
