import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
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
    private _actividadesService: ActividadesService,
    private spinner: NgxSpinnerService
  ) {
    this._route.params.subscribe((params: Params) => {
      this.idactividad = params.idactividad;
      this.getActividades();
      this.getproductores();
    });
   }

  ngOnInit(): void { }

  getproductores(): void {
    this.spinner.show();
    this._productoresService.getporActividades(this.idactividad).subscribe(
      response => {
        this.spinner.hide();
        this.productores = response.response;
      }, error => {
        this.spinner.hide();
        console.log(error)
      }
    )
  }

  getActividades(): void {
    this.spinner.show();
    this._actividadesService.getOne(this.idactividad).subscribe(
      response => {
        this.spinner.hide();
        this.actividad = response.response;
      }, error => {
        this.spinner.hide();
        console.log(error);
      }
    )
  }

}
