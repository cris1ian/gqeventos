import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Photo } from 'src/app/models/photo.model';
import { responsePhoto1 } from 'src/app/models/backend-photos';

import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarouselConfigComponent } from '../carousel-config/carousel-config.component';
import { FileUploader } from 'ng2-file-upload';
import { environment } from 'src/environments/environment';
import { NgxImageCompressService } from 'ngx-image-compress';
import { Client } from 'src/app/models/client.model';
import { ImageService } from 'src/app/services/image.service';

@Component({
    selector: 'app-cliente-admin',
    templateUrl: './cliente-admin.component.html',
    styleUrls: ['./cliente-admin.component.scss'],
    providers: [NgbModalConfig, NgbModal]
})
export class ClienteAdminComponent implements OnInit {
    @ViewChild('file', { static: false }) file;
    photos: Photo[] = [];
    client: Client = new Client('202-23', 'Emilio Jose Mena');
    selected: number;
    spinnerProgress: number;
    spinnerShow: boolean = false;

    constructor(
        config: NgbModalConfig,
        private modalService: NgbModal,
        private imageCompress: NgxImageCompressService,
        private imageService: ImageService
    ) {
        config.centered = true;
        config.scrollable = false;
        config.windowClass = "windowOfModal";
    }

    ngOnInit() {
        this.selected = 0;
        this.photos[0] = new Photo();
        this.photos[0] = {
            id: 1,
            fileName: 'IMG_BUCKET',
            picture: 'https://s3.console.aws.amazon.com/s3/object/gq-eventos/1/IMG_7239.JPG'
        }
        this.client.id = 1; // BORRAR ESTA LINEA, PRUEBA
        // this.photos = responsePhoto1;
        // this.selected = this.photos.filter(element => element.isSelected).length;
        // console.log(this.photos);
    }

    open() {
        this.modalService.open(CarouselConfigComponent);
    }

    addPhoto() { this.file.nativeElement.click(); }

    deletePhoto(i: number) {
        console.log(this.photos.splice(i, 1));
        console.log(`Deleted photo ${i}`);
    }

    uploadPhotos() {
        console.log('lets upload!');
        this.imageService.uploadImage(this.photos, this.client.id)
            .subscribe(
                result => { console.log(result) },
                error => { console.log(error) }
            );
    }

    // Cargar fotos desde PC
    onInputChange(event: any) {
        const files = Array.from(event.target.files);
        let orientation = -1;
        let counter = 0;
        console.log(files);
        console.log(`files.length: ${files.length}`);
        this.spinnerShow = true;
        this.spinnerProgress = 0;

        files.forEach(
            (element: any, index: number) => {
                var reader = new FileReader();
                reader.readAsDataURL(element);
                reader.onloadend = (event: any) => {
                    this.imageCompress.compressFile(reader.result, orientation, 50, 50)
                        .then(
                            result => {
                                this.photos.push({
                                    picture: result,
                                    fileName: element.name
                                })
                                this.photos = this.photos.sort((a, b) => (a.fileName > b.fileName) ? 1 : -1)
                                this.spinnerProgress = 100 * ++counter / (files.length);
                                console.log(this.spinnerProgress);
                                console.log(`index: ${index}`);
                                console.log(`counter: ${counter}`);
                                if (counter == files.length) console.log(this.spinnerShow = false);
                            })
                }
            })
    }
}
