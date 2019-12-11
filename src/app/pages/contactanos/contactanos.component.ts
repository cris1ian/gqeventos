import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { format } from 'url';

@Component({
    selector: 'app-contactanos',
    templateUrl: './contactanos.component.html',
    styleUrls: ['./contactanos.component.scss']
})
export class ContactanosComponent implements OnInit {
    name: string;
    email: string;
    telefono: string;
    mensaje: string;
    showError: boolean;
    showOk: boolean;


    constructor(
        private userService: UserService
    ) { }

    ngOnInit() {
        this.showError = false;
        this.showOk = false;
    }

    contactMe(form) {
        this.userService.contactMe(
            {
                name: this.name,
                email: this.email,
                telefono: this.telefono,
                mensaje: this.mensaje
            }
        ).subscribe(
            (resp: any) => {
                if (resp.status == 0) {
                    console.log(" mensaje enviado");
                    this.showOk = true;
                    this.showError = false;
                    form.reset();


                }
                else {
                    console.log(" se produjo un error , intente más tarde");
                    this.showOk = false;
                    this.showError = true;

                }
            },
            error => {
                console.log(" se produjo un error , intente más tarde");
                this.showOk = false;
                this.showError = true;

            }
        );



    }

    resetMessage() {
        this.showError = false;
        this.showOk = false;

    }

}
