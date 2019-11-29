import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { Photo } from 'src/app/models/photo.model';
import { responsePhoto1 } from 'src/app/models/backend-photos';

@Component({
  selector: 'app-carousel-config',
  templateUrl: './carousel-config.component.html',
  styleUrls: ['./carousel-config.component.scss']
})
export class CarouselConfigComponent implements OnInit {

  photos: Photo[];
  // selected: number;


  // images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 60000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = false;
    config.showNavigationIndicators = false;

  }

  ngOnInit() {
    this.photos = responsePhoto1;
    // this.selected = this.photos.filter(element => element.isSelected).length;
    console.log(this.photos);
  }

}
