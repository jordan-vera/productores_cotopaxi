import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Actividades } from '../modelo/Actividades';
import { ActividadesService } from '../servicios/actividades.service';

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

  public opcionCanton: string = 'lamana';
  public busquedatxt: string = '';

  public actividades: Actividades[];

  constructor(
    private _actividadesService: ActividadesService,
    private _router: Router,
  ) {
    this.mostrarActividades();
  }

  mostrarActividades(): void {
    this._actividadesService.getAll().subscribe(
      response => {
        this.actividades = response.response;
      }, error => {
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
    this.panel3.nativeElement.scrollTo({ left: (this.panel3.nativeElement.scrollLeft - 180), behavior: 'smooth' });
  }

  public onNextSearchPosition3(): void {
    this.panel3.nativeElement.scrollTo({ left: (this.panel3.nativeElement.scrollLeft + 180), behavior: 'smooth' });
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

  ngOnInit(): void {

  }

}
