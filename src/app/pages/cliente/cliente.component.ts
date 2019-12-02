import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/photo.model';
import { responsePhoto1 } from 'src/app/models/backend-photos';

import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarouselConfigComponent } from '../carousel-config/carousel-config.component';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],

  providers: [NgbModalConfig, NgbModal]
})
export class ClienteComponent implements OnInit {
  photos: Photo[];
  selected: number;

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
    this.photos = responsePhoto1;
    this.selected = this.photos.filter(element => element.isSelected).length;
    console.log(this.photos);
  }

  onClick(i: number) {
    this.photos[i].isSelected = !this.photos[i].isSelected;
    this.selected = this.photos.filter(element => element.isSelected).length;
    console.log(`Click en la foto ${i}: check = ${this.photos[i].isSelected}`);
  }



}
