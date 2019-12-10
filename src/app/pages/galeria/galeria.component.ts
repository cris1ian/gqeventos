import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {
 

  photos: any[] = [
    { imagen: "../../../assets/Fotos/galeria-porfiolio/img-(1).jpg" },
    { imagen: "../../../assets/Fotos/galeria-porfiolio/img-(2).jpg" },
    { imagen: "../../../assets/Fotos/galeria-porfiolio/img-(3).jpg" },
    { imagen: "../../../assets/Fotos/galeria-porfiolio/img-(4).jpg" },
    { imagen: "../../../assets/Fotos/galeria-porfiolio/img-(5).jpg" },
    { imagen: "../../../assets/Fotos/galeria-porfiolio/img-(6).jpg" },
    { imagen: "../../../assets/Fotos/galeria-porfiolio/img-(7).jpg" },
    { imagen: "../../../assets/Fotos/galeria-porfiolio/img-(8).jpg" },
    { imagen: "../../../assets/Fotos/galeria-porfiolio/img-(9).jpg" },
    { imagen: "../../../assets/Fotos/galeria-porfiolio/img-(10).jpg" },
    { imagen: "../../../assets/Fotos/galeria-porfiolio/img-(11).jpg" },
    { imagen: "../../../assets/Fotos/galeria-porfiolio/img-(12).jpg" },
    { imagen: "../../../assets/Fotos/galeria-porfiolio/img-(13).jpg" },
    { imagen: "../../../assets/Fotos/galeria-porfiolio/img-(14).jpg" },
    { imagen: "../../../assets/Fotos/galeria-porfiolio/img-(15).jpg" },
    { imagen: "../../../assets/Fotos/galeria-porfiolio/img-(16).jpg" },
    { imagen: "../../../assets/Fotos/galeria-porfiolio/img-(17).jpg" },
    { imagen: "../../../assets/Fotos/galeria-porfiolio/img-(18).jpg" },

  ]

  constructor() { }

  ngOnInit() { }

}
