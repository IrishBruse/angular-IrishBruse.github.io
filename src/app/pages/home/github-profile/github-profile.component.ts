import { Component, OnInit } from '@angular/core';
import { Octokit } from '@octokit/rest';
import { Endpoints } from '@octokit/types';

type UsersResponse = Endpoints['GET /users/{username}']["response"]["data"];

@Component({
    selector: 'github-profile',
    templateUrl: './github-profile.component.html',
    styleUrls: ['./github-profile.component.scss']
})
export class GithubProfileComponent implements OnInit {
    octokit = new Octokit({});

    user!: UsersResponse;
    repos: any;

    filterRepos = ["dotfiles", "TopDownShooter", "winstall", "ConwaysGameOfLife", "IrishBruse"]

    constructor() { }

    async ngOnInit() {
        const username = "IrishBruse";

        const usernameData = await this.octokit.users.getByUsername({ username: username });
        this.user = usernameData.data as UsersResponse;

        this.repos = (await this.octokit.repos.listForUser({ username: username })).data;
        this.repos = this.repos.filter((r: any) => r.fork === false && !this.filterRepos.includes(r.name));
        this.repos = this.repos.sort((a: any, b: any) => b.stargazers_count - a.stargazers_count);
    }
}
