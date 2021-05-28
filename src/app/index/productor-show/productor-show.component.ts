import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductoresService } from 'src/app/servicios/productores.service';

@Component({
  selector: 'app-productor-show',
  templateUrl: './productor-show.component.html',
  styleUrls: ['./productor-show.component.css']
})
export class ProductorShowComponent implements OnInit {

  public idproductor: number = 0;
  

  constructor(
    private _route: ActivatedRoute,
    private _productoresService: ProductoresService,
  ) { 
    this._route.params.subscribe((params: Params) => {
      this.idproductor = params.idproductor;
    });
  }

  ngOnInit(): void {
  }

  getProductor(): void {
    this._productoresService.getOne(this.idproductor).subscribe(
      response => {

      }, error => {
        console.log(error)
      }
    )
  }

}
