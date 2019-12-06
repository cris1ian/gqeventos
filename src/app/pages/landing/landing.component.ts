import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
    hash: string;
    user: string;
    password: string;

    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    ngOnInit() { }

    adminLogin() {
        this.userService.login(this.user.toLowerCase(), this.password.toLowerCase())
            .subscribe(
                (resp: any) => {
                    console.log(resp);
                    if (resp.result && resp.result == 'Ok') this.router.navigate(['/galerias-admin']);
                },
                error => {
                    console.log(error);
                }
            )
    }

    submitClientId() {
        console.log(this.hash);
        this.userService.getGallery({ hash: `${this.hash.toLowerCase()}` })
            .subscribe(
                (resp: any) => {
                    console.log(resp);
                    if (resp.result.length == 1) this.router.navigate(['/cliente', resp.result[0].id]);
                },
                error => {
                    console.log(error);
                }
            )
    }

}
