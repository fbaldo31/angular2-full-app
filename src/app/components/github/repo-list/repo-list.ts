import {Component, OnInit}          from '@angular/core';
import { Github }                   from '../../../services/github';
import {Observable, Promise}        from 'rxjs';
import 'rxjs/add/operator/toPromise';
import {ActivatedRoute}             from '@angular/router';
@Component({
  selector: 'repo-list',
  styleUrls: ['./app/components/github/repo-list/repo-list.css'],
  templateUrl: './app/components/github/repo-list/repo-list.html',
})
export class RepoList implements OnInit {
  org: string;
  repos: Observable<Array>;
  public totalItems:Array<any>;
  public currentPage:number = 1;
  public maxSize:number = 20;

  constructor(public github: Github, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.org = params['org'];
      if (this.org) {
        this.github.getReposForOrg(this.org).subscribe(data => {
          this.repos = data;
        });
      }
    }, function error(error) { console.error(error);
    });
  }
  public setPage(pageNo:number):void {
    this.currentPage = pageNo;
  };

  public pageChanged(event:any):void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  };
}
