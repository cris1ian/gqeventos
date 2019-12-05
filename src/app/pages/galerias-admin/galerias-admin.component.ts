import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { responseClient } from 'src/app/models/backend-client';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-galerias-admin',
  templateUrl: './galerias-admin.component.html',
  styleUrls: ['./galerias-admin.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class GaleriasAdminComponent implements OnInit {
  clients: Client[];

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private userService: UserService
  ) {
    // customize default values of modals used by this component tree
    // config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    console.log(responseClient);
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

  borrar(content) {
    this.modalService.open(content);
  }

  agregar(content) {
    this.modalService.open(content, { centered: true, backdrop: 'static' });
  }

  navigateTo() {
    console.log("ir a vclientes");



  }

  borrarGaleria(number) {
    console.log("se quiere borrar " + number);

  }

}
