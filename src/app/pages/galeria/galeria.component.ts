import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
  providers: [NgbModalConfig, NgbModal]

})
export class GaleriaComponent implements OnInit {

  carouselActive: number;

  photos: any[] = [
    { imagen: "../../../assets/Fotos/galeriaPorfiolio/img(1).JPG" },
    { imagen: "../../../assets/Fotos/galeriaPorfiolio/img(2).JPG" },
    { imagen: "../../../assets/Fotos/galeriaPorfiolio/img(3).JPG" },
    { imagen: "../../../assets/Fotos/galeriaPorfiolio/img(4).JPG" },
    { imagen: "../../../assets/Fotos/galeriaPorfiolio/img(5).JPG" },
    { imagen: "../../../assets/Fotos/galeriaPorfiolio/img(7).JPG" },
    { imagen: "../../../assets/Fotos/galeriaPorfiolio/img(8).JPG" },
    { imagen: "../../../assets/Fotos/galeriaPorfiolio/img(9).JPG" },
    { imagen: "../../../assets/Fotos/galeriaPorfiolio/img(10).JPG" },
    { imagen: "../../../assets/Fotos/galeriaPorfiolio/img(11).JPG" },
    { imagen: "../../../assets/Fotos/galeriaPorfiolio/img(12).JPG" },
    { imagen: "../../../assets/Fotos/galeriaPorfiolio/img(13).JPG" },
    { imagen: "../../../assets/Fotos/galeriaPorfiolio/img(14).JPG" },
    { imagen: "../../../assets/Fotos/galeriaPorfiolio/img(6).JPG" },
    { imagen: "../../../assets/Fotos/galeriaPorfiolio/img(15).JPG" },
    { imagen: "../../../assets/Fotos/galeriaPorfiolio/img(16).JPG" },
    { imagen: "../../../assets/Fotos/galeriaPorfiolio/img(17).JPG" },
    { imagen: "../../../assets/Fotos/galeriaPorfiolio/img(18).JPG" },
    { imagen: "../../../assets/Fotos/galeriaPorfiolio/img(19).JPG" },
    { imagen: "../../../assets/Fotos/galeriaPorfiolio/img(20).JPG" },

  ]

  constructor(config: NgbCarouselConfig,
    configmodal: NgbModalConfig,
    private modalService: NgbModal,
  ) {
    // customize default values of carousels used by this component tree
    config.interval = 6000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = false;
    config.showNavigationIndicators = false;

    configmodal.centered = true;
    configmodal.scrollable = false;
    configmodal.windowClass = "windowOfModal";
  }

  open(i: number, carrusel) {
    this.carouselActive = i;
    // this.modalService.open(CarouselConfigComponent);   // !este es metodo original para llamarlo como componente
    this.modalService.open(carrusel);                     // !este es el que llama al carrusel que esta ne cliente admin (html al final)
  }


  ngOnInit() { }

}
