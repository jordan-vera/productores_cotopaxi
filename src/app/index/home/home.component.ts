import { Component, OnInit } from '@angular/core';
import { Productor } from 'src/app/modelo/Productor';
import { ProductoresService } from 'src/app/servicios/productores.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public productoresLamana: Productor[];
  public productoresLatacunga: Productor[];
  public productorespangua: Productor[];
  public productorespijili: Productor[];
  public productoressalcedo: Productor[];
  public productoressaquisili: Productor[];
  public productoressigchos: Productor[];

  constructor(
    private _productoresService: ProductoresService,
  ) { }

  ngOnInit(): void {
    this.getLaMana();
  }

  getLaMana(): void {
    this._productoresService.getporCanton(7).subscribe(
      response => {
        this.productoresLamana = response.response;
        this.getLatacunga();
      }, error => {
        console.log(error);
      }
    )
  }

  getLatacunga(): void {
    this._productoresService.getporCanton(1).subscribe(
      response => {
        this.productoresLatacunga = response.response;
        this.getPangua();
      }, error => {
        console.log(error);
      }
    )
  }

  getPangua(): void {
    this._productoresService.getporCanton(2).subscribe(
      response => {
        this.productorespangua = response.response;
        this.getPujili();
      }, error => {
        console.log(error);
      }
    )
  }

  getPujili(): void {
    this._productoresService.getporCanton(5).subscribe(
      response => {
        this.productorespijili = response.response;
      }, error => {
        console.log(error);
      }
    )
  }

}
