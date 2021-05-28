import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
    private _cantonService: CantonService
  ) { 
    this._route.params.subscribe((params: Params) => {
      this.busqueda = params.nombre;
      this.getProductores();
    });
  }

  ngOnInit(): void {
  }

  getProductores(): void {
    this._productoresService.getporNombre(this.busqueda).subscribe(
      response => {
        this.productores = response.response;
      }, error => {
        console.log(error);
      }
    )
  }

}
