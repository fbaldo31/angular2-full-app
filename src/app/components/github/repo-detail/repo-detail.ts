import {Component, OnInit} from '@angular/core';
import {ActivatedRoute}    from '@angular/router';
import { Github }          from '../../../services/github';

@Component({
  selector: 'repo-detail',
  styleUrls: ['./app/components/github/repo-detail/repo-detail.css'],
  templateUrl: './app/components/github/repo-detail/repo-detail.html'
})
export class RepoDetail implements OnInit {
  private org:string;
  private repo:string;
  public repoDetails:any = {};

  constructor(public github:Github, private route:ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.org = this.route.snapshot.parent.params['org'];
      this.repo = params['repo'] || '';

      if (this.repo) {
        this.github.getRepoForOrg(this.org, this.repo)
          .subscribe(repoDetails => {
            this.repoDetails = repoDetails;
          });
      }
    });
  }
}
