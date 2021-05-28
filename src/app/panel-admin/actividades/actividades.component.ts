import { Component, OnInit } from '@angular/core';
import { Actividades } from 'src/app/modelo/Actividades';
import { ActividadesService } from 'src/app/servicios/actividades.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {

  public actividadOne: Actividades = new Actividades(0, '');
  public actividadesAll: Actividades[] = [];

  constructor(
    private _actividadesService: ActividadesService,
    private toastr: ToastrService
  ) {

  }

  ngOnInit(): void {
    this.mostrarActividades();
  }

  agregarActividad(): void {
    this._actividadesService.create(this.actividadOne).subscribe(
      response => {
        this.toastr.success('Actividad agregada correctamente!', 'Hecho!');
        this.mostrarActividades();
        this.actividadOne.descripcion_actividad = '';
      },
      error => {
        console.log(error);
      }
    )
  }

  mostrarActividades(): void {
    this._actividadesService.getAll().subscribe(
      response => {
        this.actividadesAll = response.response;
      },
      error => {
        console.log(error);
      }
    )
  }

  eliminarActividad(id: number): void {
    this._actividadesService.delete(id).subscribe(
      response => {
        this.toastr.success('Actividad eliminada correctamente!', 'Hecho!');
        this.mostrarActividades();
      },
      error => {
        console.log(error);
      }
    )
  }

}
