import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { responseClient } from 'src/app/models/backend-client';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { ImageService } from 'src/app/services/image.service';


@Component({
    selector: 'app-galerias-admin',
    templateUrl: './galerias-admin.component.html',
    styleUrls: ['./galerias-admin.component.scss'],
    providers: [NgbModalConfig, NgbModal]
})
export class GaleriasAdminComponent implements OnInit {
    clients: Client[];
    deleteClient: Client;
    index: number;

    constructor(
        config: NgbModalConfig,
        private modalService: NgbModal,
        private userService: UserService,
        private imageService: ImageService,
        private router: Router

    ) {
        // customize default values of modals used by this component tree
        // config.backdrop = 'static';
        config.keyboard = false;
    }

    ngOnInit() {
        this.userService.getGallery()
            .subscribe(
                (resp: any) => {
                    console.log(resp);
                    this.clients = resp.result;
                },
                error => {
                    console.log(error);
                }
            )

    }
    agregar(content) {
        this.modalService.open(content, { centered: true, backdrop: 'static' });
    }

    open(content, i: number, client: Client) {
        console.log(client);
        this.deleteClient = client;
        this.index = i;
        this.modalService.open(content);
    }

    borrarGaleria() {
        this.imageService.deleteFolder(this.deleteClient.id)
            .subscribe(
                (resp: any) => { console.log(resp); },
                error => { console.log(error); }
            );
        this.userService.deleteGallery(this.deleteClient.id)
            .subscribe(
                (resp: any) => {
                    console.log(resp);
                    console.log(this.deleteClient);
                    console.log(this.clients.splice(this.index, 1));
                },
                error => {
                    console.log(error);
                }
            );
    }
    /*para crear el nuevo usuario */
    nuevoUsuario(form, modal) {

        const newClient = new Client(form.value.id, form.value.Nombre)
        this.userService.createGallery(newClient)
            .subscribe(
                (resp: any) => {
                    console.log(resp);
                    if (resp.status == 0) this.router.navigate(['/cliente-admin', resp.result[0]]);
                },
                err => {
                    if (err && err.error) {
                        console.log(err.error.message);
                        alert(err.error.message);
                    };
                })
        form.reset();
        this.modalService.dismissAll(modal);

    }

}
