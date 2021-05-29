import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Galeria } from 'src/app/modelo/Galeria';
import { GaleriaService } from 'src/app/servicios/galeria.service';
import { global } from 'src/app/servicios/Global';
import { ProductoresService } from 'src/app/servicios/productores.service';

@Component({
  selector: 'app-productor-show',
  templateUrl: './productor-show.component.html',
  styleUrls: ['./productor-show.component.css']
})
export class ProductorShowComponent implements OnInit {

  public center1 = { lat: -0.903170592, lng: -78.868795865 };
  markerOptions1 = { draggable: true };
  markerPositions1: google.maps.LatLngLiteral[] = [];
  public zoom1 = 10;
  display1?: google.maps.LatLngLiteral;
  public posicion1: any = '';

  public urlImage: string = '';
  public idproductor: number = 0;
  public productor: any;
  public nombre: string = '';
  public descripcion: string = '';
  public canton: string = '';
  public actividad: string = '';
  public telefono: string = '';
  public celular: string = '';
  public direccion: string = '';
  public email: string = '';
  public galeria: Galeria[];
  public urlGaleria: string = global.urlImage;
  public longitud: string = '';
  public latitud: string = '';

  constructor(
    private _route: ActivatedRoute,
    private _productoresService: ProductoresService,
    private _galeriaService: GaleriaService
  ) {
    this._route.params.subscribe((params: Params) => {
      this.idproductor = params.idproductor;
      this.getProductor();
      this.getGaleria();
    });
  }

  ngOnInit(): void {
  }

  getGaleria(): void {
    this._galeriaService.getOne(this.idproductor).subscribe(
      response => {
        this.galeria = response.response;
      }, error => {
        console.log(error);
      }
    )
  }

  getProductor(): void {
    this._productoresService.getOne(this.idproductor).subscribe(
      response => {
        console.log(response)
        this.productor = response.response;
        this.urlImage = global.urlImage + this.productor.portada;
        this.nombre = this.productor.nombre;
        this.descripcion = this.productor.descripcion;
        this.canton = this.productor.nombrecanton;
        this.actividad = this.productor.descripcion_actividad;
        this.telefono = this.productor.telefono;
        this.celular = this.productor.celular;
        this.direccion = this.productor.direccion;
        this.email = this.productor.email;
        this.longitud = this.productor.longitud;
        this.latitud = this.productor.latitud;

        this.center1 = { lat: +this.latitud, lng: +this.longitud };
        this.markerPositions1 = [{ lat: +this.latitud, lng: +this.longitud }]
      }, error => {
        console.log(error)
      }
    )
  }

}
