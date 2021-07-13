import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Visita } from 'src/app/modelo/Visitas';
import { VisitasService } from 'src/app/servicios/visitas.service';

@Component({
  selector: 'app-visitas',
  templateUrl: './visitas.component.html',
  styleUrls: ['./visitas.component.css']
})
export class VisitasComponent implements OnInit {

  public visitas: Visita[];
  public buscartxt: string = '';
  public plataforma: string = '';
  public cantidadVisitas: number = 0;

  constructor(
    private _visitaService: VisitasService,
    public spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.getVisitasAll();
  }

  buscarPorPlataforma(): void {
    this.spinner.show();
    this._visitaService.getOne(this.plataforma).subscribe(
      response => {
        this.spinner.hide();
        this.visitas = response.response;
        if (response.response) {
          this.cantidadVisitas = this.visitas.length;
        } else {
          this.cantidadVisitas = 0;
        }
      }, error => {
        this.spinner.hide();
        console.log(error);
      }
    )
  }

  getVisitasAll(): void {
    this.spinner.show();
    this._visitaService.getAll().subscribe(
      response => {
        this.spinner.hide();
        this.visitas = response.response;
        if (response.response) {
          this.cantidadVisitas = this.visitas.length;
        } else {
          this.cantidadVisitas = 0;
        }
      }, error => {
        this.spinner.hide();
        console.log(error);
      }
    )
  }

}
