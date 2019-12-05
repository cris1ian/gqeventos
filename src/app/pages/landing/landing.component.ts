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

    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    ngOnInit() { }

    submitClientId() {
        console.log(this.hash);
        this.userService.getGallery({ hash: this.hash })
            .subscribe(
                (resp: any) => {
                    console.log(resp);
                    if(resp.result.length == 1) this.router.navigate(['/cliente', resp.result[0].id]);;
                },
                error => {
                    console.log(error);
                }
            )
    }

}
