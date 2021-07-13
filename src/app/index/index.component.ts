import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Actividades } from '../modelo/Actividades';
import { Visita } from '../modelo/Visitas';
import { ActividadesService } from '../servicios/actividades.service';
import { Fecha } from '../servicios/fecha.service';
import { VisitasService } from '../servicios/visitas.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  @ViewChild('panel2', { read: ElementRef }) public panel2: ElementRef<any>;
  @ViewChild('panel3', { read: ElementRef }) public panel3: ElementRef<any>;
  @ViewChild('panel4', { read: ElementRef }) public panel4: ElementRef<any>;

  public latacunga: boolean = true;
  public lamana: boolean = true;
  public pangua: boolean = true;
  public pujili: boolean = true;
  public salcedo: boolean = true;
  public saquisili: boolean = true;
  public opcionCanton: string = '7';
  public busquedatxt: string = '';
  public actividades: Actividades[];
  public visita: Visita = new Visita(0, '', '', '');

  constructor(
    private _actividadesService: ActividadesService,
    private _router: Router,
    public spinner: NgxSpinnerService,
    private _visitaService: VisitasService
  ) {
    this.mostrarActividades();
  }

  ngOnInit(): void {
    this.crearVisita();
  }

  crearVisita(): void {
    this.visita = new Visita(0, Fecha.fechaActual(), Fecha.horaActual(), 'Pagina web');
    this._visitaService.create(this.visita).subscribe(
      response => {
      }, error => {
        console.log(error);
      }
    )
  }

  mostrarActividades(): void {
    this.spinner.show();
    this._actividadesService.getAll().subscribe(
      response => {
        this.spinner.hide();
        this.actividades = response.response;
      }, error => {
        this.spinner.hide();
        console.log(error);
      }
    )
  }

  public onPreviousSearchPosition2(): void {
    this.panel2.nativeElement.scrollTo({ left: (this.panel2.nativeElement.scrollLeft - 180), behavior: 'smooth' });
  }

  public onNextSearchPosition2(): void {
    this.panel2.nativeElement.scrollTo({ left: (this.panel2.nativeElement.scrollLeft + 180), behavior: 'smooth' });
  }

  public onPreviousSearchPosition3(): void {
    this.panel3.nativeElement.scrollTo({ left: (this.panel3.nativeElement.scrollLeft - 80), behavior: 'smooth' });
  }

  public onNextSearchPosition3(): void {
    this.panel3.nativeElement.scrollTo({ left: (this.panel3.nativeElement.scrollLeft + 80), behavior: 'smooth' });
  }

  public onPreviousSearchPosition4(): void {
    this.panel4.nativeElement.scrollTo({ left: (this.panel4.nativeElement.scrollLeft - 180), behavior: 'smooth' });
  }

  public onNextSearchPosition4(): void {
    this.panel4.nativeElement.scrollTo({ left: (this.panel4.nativeElement.scrollLeft + 180), behavior: 'smooth' });
  }

  byCanton(canton: string): void {
    this._router.navigate(['/index/search-canton', canton]);
  }

}
