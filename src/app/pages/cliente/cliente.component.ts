import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/photo.model';
import { responsePhoto1 } from 'src/app/models/backend-photos';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  photos: Photo[];

  constructor() { }

  
  ngOnInit() {
    this.photos = responsePhoto1;
    console.log(this.photos);
}

onClick(i: number) {
    this.photos[i].isSelected = !this.photos[i].isSelected;
    console.log(`Click en la foto ${i}: check = ${this.photos[i].isSelected}`);
}

onEnlarge(i: number) {
    // this.photos[i].isSelected = !this.photos[i].isSelected;
    console.log(`Agrandar foto ${i}`);
}    

}
