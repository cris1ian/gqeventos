import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galerias-admin',
  templateUrl: './galerias-admin.component.html',
  styleUrls: ['./galerias-admin.component.scss']
})
export class GaleriasAdminComponent implements OnInit {
  photos: any[] = [, , , , , , , , , , , ,];

  constructor() { }

  ngOnInit() {
  }

}
