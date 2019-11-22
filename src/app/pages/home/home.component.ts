import { Component, OnInit, NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

@NgModule({
 exports: [
   MatButtonModule
 ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
