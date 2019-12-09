import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

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

    constructor(
        private userService: UserService
    ) { }

    ngOnInit() {
    }

    contactMe() {
        this.userService.contactMe(
            {
                name: this.name,
                email: this.email,
                telefono: this.telefono,
                mensaje: this.mensaje
            }
        ).subscribe(
            resp => console.log("Mostrar un alert confirmando mensaje enviado"),
            err => console.log("Mostrar un alert diciendo que se produjo un error y que se intente más tarde")
        );



    }

}
