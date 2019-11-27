import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { responseClient } from 'src/app/models/backend-client';

@Component({
  selector: 'app-galerias-admin',
  templateUrl: './galerias-admin.component.html',
  styleUrls: ['./galerias-admin.component.scss']
})
export class GaleriasAdminComponent implements OnInit {
  clients: Client[];

  constructor() { }

  ngOnInit() {
    this.clients = responseClient;
  }

}
