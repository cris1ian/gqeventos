import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
// import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
    // providers: [NgbDropdownConfig]
})
export class LandingComponent implements OnInit {
    hash: string;
    user: string;
    password: string;
    showErrorAdmin: boolean;
    showErrorClient: boolean;

    
    constructor(
        // config: NgbDropdownConfig,
        private userService: UserService,
        private router: Router
    ) {
        // customize default values of dropdowns used by this component tree
        // config.placement = 'top-right';
        // config.autoClose = false;
    }






    ngOnInit() {
        this.showErrorAdmin = false;
        this.showErrorClient = false;
     }

    adminLogin() {
        
        this.userService.login(this.user.toLowerCase(), this.password.toLowerCase())
            .subscribe(
                (resp: any) => {
                    console.log(resp);
                    if (resp.result && resp.result == 'Ok') this.router.navigate(['/galerias-admin']);
                },
                error => {
                    console.log(error);
                    this.showErrorAdmin = true;
                    console.log(this.showErrorAdmin);
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
                    else {
                        this.showErrorClient = true;
                        console.log(this.showErrorClient)
                    }
                },
                error => {
                    console.log(error);  
                    this.showErrorClient = true;                    
                }
            )
    }
    resetMessage(){
        this.showErrorClient = false;
        this.showErrorAdmin = false;
    }

}
