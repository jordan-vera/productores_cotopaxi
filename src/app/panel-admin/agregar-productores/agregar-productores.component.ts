import { Component, OnInit } from '@angular/core';
import { Actividades } from 'src/app/modelo/Actividades';
import { Canton } from 'src/app/modelo/Canton';
import { Productor } from 'src/app/modelo/Productor';
import { ActividadesService } from 'src/app/servicios/actividades.service';
import { CantonService } from 'src/app/servicios/canton.service';
import { UUID } from 'angular2-uuid';
import { Contacto } from 'src/app/modelo/Contacto';
import { ContactoService } from 'src/app/servicios/contacto.service';
import { ProductoresService } from 'src/app/servicios/productores.service';
import { Fecha } from 'src/app/servicios/fecha.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agregar-productores',
  templateUrl: './agregar-productores.component.html',
  styleUrls: ['./agregar-productores.component.css']
})
export class AgregarProductoresComponent implements OnInit {
  public img1: boolean = false;
  public archivoExtension1: boolean = true;
  imageSrc1: any;

  public center = { lat: -0.903170592, lng: -78.868795865 };
  markerOptions = { draggable: true };
  markerPositions: google.maps.LatLngLiteral[] = [];
  public zoom = 10;
  display?: google.maps.LatLngLiteral;
  public posicion: any = '';

  public cantones: Canton[] = [];
  public actividades: Actividades[] = [];
  public productorCreate: Productor = new Productor(0, 0, 0, 0, '', '', '', '', '', '', '', '');
  public contactoCreate: Contacto = new Contacto(0, '', '', '');
  public sinImagen: boolean = false;

  constructor(
    private _cantonService: CantonService,
    private _actividadService: ActividadesService,
    private _contactoService: ContactoService,
    private _productoresService: ProductoresService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.mostrarCantones();
    this.mostrarActividades();
  }

  guardarContacto(): void {
    if (this.productorCreate.portada == '') {
      this.sinImagen = true;
    } else {
      this.sinImagen = false;
      this._contactoService.create(this.contactoCreate).subscribe(
        response => {
          let idcontacto = response.response;
          this.guardarProductor(idcontacto);
        }, error => {
          console.log(error);
        }
      )
    }
  }

  guardarProductor(idcontacto: number): void {
    this.productorCreate.fecha_registro = Fecha.fechaActual() + ' ' + Fecha.horaActual();
    this.productorCreate.idcontacto = idcontacto;
    this._productoresService.create(this.productorCreate).subscribe(
      response => {
        this.toastr.success('Actividad agregada correctamente!', 'Hecho!');
        this.limpiar();
      },
      error => {
        console.log(error);
      }
    )
  }

  limpiar(): void {
    this.limpiarImagen1();
    this.productorCreate = new Productor(0, 0, 0, 0, '', '', '', '', '', '', '', '');
    this.contactoCreate = new Contacto(0, '', '', '');
  }

  addMarker(event: google.maps.MouseEvent) {
    this.markerPositions = [];
    this.markerPositions.push(event.latLng.toJSON());
    this.productorCreate.latitud = this.markerPositions[0].lat + '';
    this.productorCreate.longitud = this.markerPositions[0].lng + '';
  }

  removeLastMarker() {
    this.markerPositions.pop();
  }

  seleccionarImagen1(event: any): void {
    var files = event.target.files;
    var file = files[0];
    var extension = file.name.split('.').pop();
    extension = extension.toLowerCase();
    if (extension == 'jpg' || extension == 'jpeg' || extension == 'png' || extension == 'gif' || extension == 'webp' || extension == 'svg') {
      this.img1 = true;
      this.readURL1(event);
      this.archivoExtension1 = true;
      this.productorCreate.portada = UUID.UUID() + '.' + extension;
      if (files && file) {
        var reader = new FileReader();
        reader.onload = this._handleReaderLoaded1.bind(this);
        reader.readAsBinaryString(file);
      }
    } else {
      this.archivoExtension1 = false;
    }
  }

  _handleReaderLoaded1(readerEvent: any) {
    var binaryString = readerEvent.target.result;
    this.productorCreate.file = btoa(binaryString);
  }

  limpiarImagen1(): void {
    this.imageSrc1 = null;
    this.productorCreate.portada = '';
    this.img1 = false;
  }

  readURL1(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.imageSrc1 = reader.result;
      reader.readAsDataURL(file);
    }
  }

  mostrarActividades(): void {
    this._actividadService.getAll().subscribe(
      response => {
        this.actividades = response.response;
      },
      error => {
        console.log(error);
      }
    )
  }

  mostrarCantones(): void {
    this._cantonService.getAll().subscribe(
      response => {
        this.cantones = response.response;
      },
      error => {
        console.log(error);
      }
    )
  }

}
