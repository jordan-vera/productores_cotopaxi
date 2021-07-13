import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CantonService } from 'src/app/servicios/canton.service';
import { ProductoresService } from 'src/app/servicios/productores.service';

@Component({
  selector: 'app-resultados-por-busqueda',
  templateUrl: './resultados-por-busqueda.component.html',
  styleUrls: ['./resultados-por-busqueda.component.css']
})
export class ResultadosPorBusquedaComponent implements OnInit {

  public busqueda: string = '';
  public productores: any[]; 

  constructor(
    private _route: ActivatedRoute,
    private _productoresService: ProductoresService,
    private _cantonService: CantonService,
    public spinner: NgxSpinnerService
  ) { 
    this._route.params.subscribe((params: Params) => {
      this.busqueda = params.nombre;
      this.getProductores();
    });
  }

  ngOnInit(): void {
  }

  getProductores(): void {
    this.spinner.show();
    this._productoresService.getporNombre(this.busqueda).subscribe(
      response => {
        this.spinner.hide();
        this.productores = response.response;
      }, error => {
        this.spinner.hide();
        console.log(error);
      }
    )
  }

}
