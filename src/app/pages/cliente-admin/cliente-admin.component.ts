import { Component, OnInit, ViewChild } from '@angular/core';
import { Photo } from 'src/app/models/photo.model';
import { responsePhoto1 } from 'src/app/models/backend-photos';

import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarouselConfigComponent } from '../carousel-config/carousel-config.component';
import { FileUploader } from 'ng2-file-upload';
import { environment } from 'src/environments/environment';
import { NgxImageCompressService } from 'ngx-image-compress';

@Component({
    selector: 'app-cliente-admin',
    templateUrl: './cliente-admin.component.html',
    styleUrls: ['./cliente-admin.component.scss'],

    providers: [NgbModalConfig, NgbModal]
})
export class ClienteAdminComponent implements OnInit {
    @ViewChild('file', { static: false }) file;
    photos: Photo[] = [];
    selected: number;
    try: any;

    constructor(
        config: NgbModalConfig,
        private modalService: NgbModal,
        private imageCompress: NgxImageCompressService
    ) {
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
        this.selected = 0;
        // this.photos = responsePhoto1;
        // this.selected = this.photos.filter(element => element.isSelected).length;
        // console.log(this.photos);
    }

    onSelect(i: number) {
        this.photos[i].isSelected = !this.photos[i].isSelected;
        this.selected = this.photos.filter(element => element.isSelected).length;
        console.log(`Click en el pie ${i}: check = ${this.photos[i].isSelected}`);
    }

    addPhoto() { this.file.nativeElement.click(); }

    onInputChange(event: any) {
        const files = Array.from(event.target.files);
        let orientation = -2;

        files.forEach(
            (element: any) => {
                var reader = new FileReader();
                // if(element.type == "image*") reader.readAsDataURL(element);
                reader.readAsDataURL(element);
                reader.onload = (event: any) => {
                    this.imageCompress.compressFile(reader.result, orientation, 50, 50)
                        .then(
                            result => {
                                this.photos.push({
                                    picture: result,
                                    fileName: element.name
                                })
                                this.photos = this.photos.sort((a, b) => (a.fileName > b.fileName) ? 1 : -1)
                            })
                }
            })
    }
}
