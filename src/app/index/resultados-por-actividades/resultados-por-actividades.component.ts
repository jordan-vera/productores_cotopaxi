import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Actividades } from 'src/app/modelo/Actividades';
import { ActividadesService } from 'src/app/servicios/actividades.service';
import { ProductoresService } from 'src/app/servicios/productores.service';

@Component({
  selector: 'app-resultados-por-actividades',
  templateUrl: './resultados-por-actividades.component.html',
  styleUrls: ['./resultados-por-actividades.component.css']
})
export class ResultadosPorActividadesComponent implements OnInit {

  public idactividad: number = 0;
  public productores: any[];
  public actividad: Actividades = new Actividades(0,'');

  constructor(
    private _route: ActivatedRoute,
    private _productoresService: ProductoresService,
    private _actividadesService: ActividadesService
  ) {
    this._route.params.subscribe((params: Params) => {
      this.idactividad = params.idactividad;
      this.getActividades();
      this.getproductores();
    });
   }

  ngOnInit(): void { }

  getproductores(): void {
    this._productoresService.getporActividades(this.idactividad).subscribe(
      response => {
        this.productores = response.response;
        console.log(this.productores)
      }, error => {
        console.log(error)
      }
    )
  }

  getActividades(): void {
    this._actividadesService.getOne(this.idactividad).subscribe(
      response => {
        this.actividad = response.response;
      }, error => {
        console.log(error);
      }
    )
  }

}
