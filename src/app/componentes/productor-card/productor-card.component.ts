import { Component, Input, OnInit } from '@angular/core';
import { global } from 'src/app/servicios/Global';

@Component({
  selector: 'app-productor-card',
  templateUrl: './productor-card.component.html',
  styleUrls: ['./productor-card.component.css']
})
export class ProductorCardComponent implements OnInit {

  public urlPortada: string = global.urlImage;
  @Input() productores: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
