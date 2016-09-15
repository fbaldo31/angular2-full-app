import {Component, OnInit} from '@angular/core';
import { Github }          from '../../../services/github';
import {Observable}        from 'rxjs/Observable';
import {ActivatedRoute}    from '@angular/router';

@Component({
  selector: 'repo-list',
  styleUrls: ['./app/components/github/repo-list/repo-list.css'],
  templateUrl: './app/components/github/repo-list/repo-list.html',
})
export class RepoList implements OnInit {
  org: string;
  repos: Observable<any>;

  constructor(public github: Github, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.org = params['org'];
      if (this.org) {
        this.repos = this.github.getReposForOrg(this.org);
      }
    });
  }
}
