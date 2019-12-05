import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { responseClient } from 'src/app/models/backend-client';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-galerias-admin',
  templateUrl: './galerias-admin.component.html',
  styleUrls: ['./galerias-admin.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class GaleriasAdminComponent implements OnInit {
  clients: Client[];

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    // config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    this.clients = responseClient;
  }

  open(content) {
    this.modalService.open(content);
  }

  navigateTo() {
    console.log("ir a vclientes");



  }

  borrarGaleria(number) {
    console.log("se quiere borrar " + number);

  }

}
