import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/photo.model';
import { responsePhoto1 } from 'src/app/models/backend-photos';

@Component({
    selector: 'app-cliente-admin',
    templateUrl: './cliente-admin.component.html',
    styleUrls: ['./cliente-admin.component.scss']
})
export class ClienteAdminComponent implements OnInit {
    photos: Photo[];
    selected: number;

    constructor() { }

    ngOnInit() {
        this.photos = responsePhoto1;
        this.selected = this.photos.filter(element => element.isSelected).length;
        console.log(this.photos);
    }

    enlargePhoto(i: number){        
        console.log(`Click en la foto ${i}`);
    }

    onClick(i: number) {
        this.photos[i].isSelected = !this.photos[i].isSelected;
        this.selected = this.photos.filter(element => element.isSelected).length;
        console.log(`Click en el pie ${i}: check = ${this.photos[i].isSelected}`);
    }

    onEnlarge(i: number) {
        // this.photos[i].isSelected = !this.photos[i].isSelected;
        console.log(`Agrandar foto ${i}`);
    }    

}
