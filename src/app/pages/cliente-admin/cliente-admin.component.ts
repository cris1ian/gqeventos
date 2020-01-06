import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Photo } from 'src/app/models/photo.model';
import { responsePhoto1 } from 'src/app/models/backend-photos';


import { CarouselConfigComponent } from '../carousel-config/carousel-config.component';
import { FileUploader } from 'ng2-file-upload';
import { environment } from 'src/environments/environment';
import { NgxImageCompressService } from 'ngx-image-compress';
import { Client } from 'src/app/models/client.model';
import { ImageService } from 'src/app/services/image.service';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ImageCompressService, ResizeOptions, ImageUtilityService, IImage, SourceImage } from 'ng2-image-compress';
import { ConvertToFileService } from 'src/app/services/convert-to-file.service';

import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-cliente-admin',
    templateUrl: './cliente-admin.component.html',
    styleUrls: ['./cliente-admin.component.scss'],
    providers: [NgbModalConfig, NgbModal]
})
export class ClienteAdminComponent implements OnInit {
    @ViewChild('file', { static: false }) file;
    S3_URL: string = environment.S3_URL;
    photos: Photo[] = [];
    client: Client;
    selected: number;
    carouselActive: number;
    spinnerProgress: number = 0;
    spinnerShow: boolean = false;
    spinnerMode: string;
    filesCount: number;
    i: number;
    base64ImageTry: any;
    blobImageTry: any;
    fileImageTry: any;

    iDelete: number;
    photoDelete: Photo;

    constructor(
        config: NgbModalConfig,
        configcarusel: NgbCarouselConfig,
        private modalService: NgbModal,
        private imageService: ImageService,
        private route: ActivatedRoute,
        private userService: UserService,
        private imgCompressService: ImageCompressService,
        private convertToFile: ConvertToFileService
    ) {
        config.centered = true;
        config.scrollable = false;
        config.windowClass = "windowOfModal";


        configcarusel.interval = 60000;
        configcarusel.wrap = true;
        configcarusel.keyboard = true;
        configcarusel.pauseOnHover = false;
        configcarusel.showNavigationIndicators = false;
    }

    ngOnInit() {
        this.selected = 0;
        this.route.paramMap.subscribe(
            (params: Params) => {
                this.userService.getGallery({ id: params.params.id })
                    .subscribe(
                        (resp: any) => {
                            console.log(resp.result[0]);
                            this.client = <Client>resp.result[0];
                        },
                        error => {
                            console.log(error);
                        }
                    )
                this.userService.getPhoto(params.params.id)
                    .subscribe(
                        (resp: any) => {
                            console.log(resp);
                            this.photos = resp.result;
                            this.selected = this.photos.filter(element => element.isSelected).length;
                        },
                        error => {
                            console.log(error);
                        }
                    )
            })
    }

    open(i: number, carrusel) {
        this.carouselActive = i;
        this.modalService.open(carrusel, { windowClass: 'windowOfModal' });                     // !este es el que llama al carrusel que esta ne cliente admin (html al final)
    }


    openConfirmDelete(i, photo, content) {
        this.iDelete = i;
        this.photoDelete = photo;
        this.modalService.open(content, { windowClass: 'deleteModal' });
    }

    addPhoto() { this.file.nativeElement.click(); }

    deletePhoto() {

        this.imageService.deleteImage(this.photoDelete)

            .subscribe(
                (resp: any) => {
                    console.log(this.photos.splice(this.iDelete, 1));
                    console.log(`Deleted photo ${this.iDelete}`);
                    this.userService.deletePhoto(this.photoDelete.id)
                        .subscribe(
                            (resp2: any) => { console.log(resp2); },
                            error => { console.log(error); }
                        )
                    this.modalService.dismissAll();
                },
                error => {
                    console.log(error);
                    this.modalService.dismissAll();
                }

            );
    }

    // Cargar fotos desde PC
    onInputChange(event: any) {
        const files: File[] = Array.from(event.target.files);
        this.filesCount = files.length;
        this.i = 0;
        this.spinnerMode = 'indeterminate';
        this.spinnerShow = true;

        files.forEach(
            (element: File) => {
                ImageCompressService.filesArrayToCompressedImageSource([element])
                    .then(observableImages => {
                        observableImages.subscribe(
                            (image) => {
                                this.doUpload(image.compressedImage, element.name);
                            },
                            (error) => { console.log("Error while converting"); }
                        );
                    });
            });
    }


    doUpload(base64Img, fileName) {
        this.spinnerProgress = 100 * ++this.i / (this.filesCount);
        // this.spinnerMode = 'determinate';
        if (this.i == this.filesCount) console.log(this.spinnerShow = false);

        const file = this.convertToFile.convertToFile(base64Img.imageDataUrl, fileName, base64Img.type);
        console.log(this.spinnerProgress);
        console.log(file);

        // Subo la imagen al S3
        this.imageService.uploadImage(file, this.client.id)
            .subscribe(
                // Si la respuesta es Ok inserto el nombre en la base de datos
                result => {
                    console.log(result);
                    let newPhoto = new Photo(this.client.id, file.name);
                    this.userService.createPhoto(newPhoto)
                        .subscribe(
                            (resp: any) => {
                                // Me devuelve el objeto creado en la base de datos y lo agrego al photos array
                                // ¡¡¡ Tengo que confirmar si la respuesta es OK !!!
                                newPhoto = resp.result[0];
                                this.photos.push(newPhoto);    // Tengo que actualizar el id que si o si tiene que venir desde el backend
                                this.photos = this.photos.sort((a, b) => (a.fileName > b.fileName) ? 1 : -1);

                            },
                            err => {
                                console.log(err);
                            }
                        );
                },
                error => { console.log(error); }
            )
    }

    doUploadbyArray(files) {
        let counter = 0;
        this.spinnerProgress = 2;
        console.log(files);

        // Para cada elemento del FileList de archivos del input
        files.forEach(
            (element: any, index: number) => {
                console.log(element);
                this.spinnerShow = true;
                // Subo la imagen al S3
                this.imageService.uploadImage(element, this.client.id)
                    .subscribe(
                        // Si la respuesta es Ok inserto el nombre en la base de datos
                        result => {
                            let newPhoto = new Photo(this.client.id, element.fileName);
                            this.userService.createPhoto(newPhoto)
                                .subscribe(
                                    (resp: any) => {
                                        // Me devuelve el objeto creado en la base de datos y lo agrego al photos array
                                        newPhoto = resp.result[0];
                                        this.photos.push(newPhoto);    // Tengo que actualizar el id que si o si tiene que venir desde el backend
                                        this.photos = this.photos.sort((a, b) => (a.fileName > b.fileName) ? 1 : -1);
                                        this.spinnerProgress = 100 * ++counter / (files.length);
                                        console.log(resp.result[0]);
                                        console.log(resp.result);
                                        console.log(newPhoto);
                                        console.log(this.spinnerProgress);
                                        if (counter == files.length) console.log(this.spinnerShow = false);
                                    },
                                    err => {
                                        console.log(err);
                                        this.spinnerProgress = 100 * ++counter / (files.length);
                                        if (counter == files.length) console.log(this.spinnerShow = false);
                                        console.log(this.spinnerProgress);
                                    }
                                );
                        },
                        error => {
                            console.log(error);
                            this.spinnerProgress = 100 * ++counter / (files.length);
                            if (counter == files.length) console.log(this.spinnerShow = false);
                            console.log(this.spinnerProgress);
                        }
                    );
            }
        )
    }

}
