import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/photo.model';

@Component({
    selector: 'app-cliente-admin',
    templateUrl: './cliente-admin.component.html',
    styleUrls: ['./cliente-admin.component.scss']
})
export class ClienteAdminComponent implements OnInit {
    // photos: Photo[] = [
    //     new Photo(),
    //     new Photo(),
    //     new Photo(),
    //     new Photo(),
    //     new Photo(),
    // ];

    photos: Photo[] = [
        { isSelected: false, fileName:'img01.jpg', picture: "../../../assets/Fotos/galeria-porfiolio/img- (1).jpg", id: 1, userId: 1 },
        { isSelected: false, fileName:'img01.jpg', picture: "../../../assets/Fotos/galeria-porfiolio/img- (2).jpg", id: 1, userId: 1 },
        { isSelected: false, fileName:'img01.jpg', picture: "../../../assets/Fotos/galeria-porfiolio/img- (3).jpg", id: 1, userId: 1 },
        { isSelected: false, fileName:'img01.jpg', picture: "../../../assets/Fotos/galeria-porfiolio/img- (4).jpg", id: 1, userId: 1 },
        { isSelected: false, fileName:'img01.jpg', picture: "../../../assets/Fotos/galeria-porfiolio/img- (5).jpg", id: 1, userId: 1 },
        { isSelected: false, fileName:'img01.jpg', picture: "../../../assets/Fotos/galeria-porfiolio/img- (6).jpg", id: 1, userId: 1 },
        { isSelected: false, fileName:'img01.jpg', picture: "../../../assets/Fotos/galeria-porfiolio/img- (7).jpg", id: 1, userId: 2 },
        { isSelected: false, fileName:'img01.jpg', picture: "../../../assets/Fotos/galeria-porfiolio/img- (8).jpg", id: 1, userId: 2 },
        { isSelected: false, fileName:'img01.jpg', picture: "../../../assets/Fotos/galeria-porfiolio/img- (1).jpg", id: 1, userId: 2 },
        { isSelected: false, fileName:'img01.jpg', picture: "../../../assets/Fotos/galeria-porfiolio/img- (2).jpg", id: 1, userId: 2 },
        { isSelected: false, fileName:'img01.jpg', picture: "../../../assets/Fotos/galeria-porfiolio/img- (3).jpg", id: 1, userId: 2 },
        { isSelected: false, fileName:'img01.jpg', picture: "../../../assets/Fotos/galeria-porfiolio/img- (4).jpg", id: 1, userId: 2 },
        { isSelected: false, fileName:'img01.jpg', picture: "../../../assets/Fotos/galeria-porfiolio/img- (5).jpg", id: 1, userId: 3 },
        { isSelected: false, fileName:'img01.jpg', picture: "../../../assets/Fotos/galeria-porfiolio/img- (6).jpg", id: 1, userId: 3 },
        { isSelected: false, fileName:'img01.jpg', picture: "../../../assets/Fotos/galeria-porfiolio/img- (7).jpg", id: 1, userId: 3 },
        { isSelected: false, fileName:'img01.jpg', picture: "../../../assets/Fotos/galeria-porfiolio/img- (8).jpg", id: 1, userId: 3 }
    ]

    constructor() { }

    ngOnInit() {
    }

    onClick(i: number) {
        this.photos[i].isSelected = !this.photos[i].isSelected;
        console.log(`Click en la foto ${i}: check = ${this.photos[i].isSelected}`);
    }

}
