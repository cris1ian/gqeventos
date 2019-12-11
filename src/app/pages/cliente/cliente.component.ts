import { Component, OnInit } from "@angular/core";
import { Photo } from "src/app/models/photo.model";
import { responsePhoto1 } from "src/app/models/backend-photos";

import { NgbModalConfig, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CarouselConfigComponent } from "../carousel-config/carousel-config.component";
import { ActivatedRoute, Params } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import { Client } from "src/app/models/client.model";
import { environment } from "src/environments/environment";
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
// import { ConsoleReporter } from "jasmine";

@Component({
  selector: "app-cliente",
  templateUrl: "./cliente.component.html",
  styleUrls: ["./cliente.component.scss"],

  providers: [NgbModalConfig, NgbModal]
})
export class ClienteComponent implements OnInit {
  photos: Photo[];
  client: Client;
  selected: number;
  carouselActive: number;
  S3_URL: string = environment.S3_URL;

  constructor(
    configcarusel: NgbCarouselConfig,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private userService: UserService
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

  abrir(content) {
    console.log(content);
    this.modalService.open(content, { windowClass: "modal-windows" });

  }
  close(content) {
    this.modalService.dismissAll(content);
  }

  open(i: number, carrusel) {
    this.carouselActive = i;
    this.modalService.open(carrusel, { windowClass: 'windowOfModalcliente' }); // !este es el que llama al carrusel que esta ne cliente admin (html al final)

  }

  ngOnInit() {
    this.selected = 0;
    this.route.paramMap.subscribe((params: Params) => {
      this.userService.getGallery({ id: params.params.id }).subscribe(
        (resp: any) => {
          console.log(resp.result[0]);
          this.client = <Client>resp.result[0];
        },
        error => {
          console.log(error);
        }
      );
      this.userService.getPhoto(params.params.id).subscribe(
        (resp: any) => {
          console.log(resp);
          this.photos = resp.result;
          this.selected = this.photos.filter(
            element => element.isSelected
          ).length;
        },
        error => {
          console.log(error);
        }
      );
    });
  }

  Aceptar() {
    console.log("hicieron click en el boton de aceptar");
  }

  onSelect(i: number, photo: Photo) {
    this.photos[i].isSelected = !this.photos[i].isSelected;
    this.selected = this.photos.filter(element => element.isSelected).length;
    this.userService.selectPhoto(photo.id, photo.isSelected).subscribe(
      (resp: any) => { },
      error => {
        console.log(error);
      }
    );
  }
}
