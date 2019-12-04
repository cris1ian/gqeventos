import { Component, OnInit } from '@angular/core';

import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarouselConfigComponent } from '../carousel-config/carousel-config.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],

  providers: [NgbModalConfig, NgbModal]
})
export class ProductosComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    // config.backdrop = 'static';
    config.centered = true;
    // config.size = "xl";
    config.scrollable = false;

    config.windowClass = "windowOfModal";
     }

  open() {
    this.modalService.open(CarouselConfigComponent);
  }

  ngOnInit() {
  }

}
