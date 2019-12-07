import { Component } from '@angular/core';
import { ImageCompressService, ResizeOptions, ImageUtilityService, IImage, SourceImage } from 'ng2-image-compress';

@Component({
    selector: 'app-compression-test',
    templateUrl: './compression-test.component.html',
    styleUrls: ['./compression-test.component.scss']

})
export class CompressionTestComponent {
    title = 'app';
    selectedImage: any;
    processedImages: any = [];
    showTitle: boolean = false;

    constructor(private imgCompressService: ImageCompressService) {

    }
    onChange(fileInput: any) {
        let fileList: FileList;
        let images: Array<IImage> = [];

        ImageCompressService.filesToCompressedImageSource(fileInput.target.files)
            .then(observableImages => {
                observableImages
                    .subscribe(
                        (image) => { images.push(image); },
                        (error) => { console.log("Error while converting"); },
                        () => { this.processedImages = images; }
                    );
            });

    }

}