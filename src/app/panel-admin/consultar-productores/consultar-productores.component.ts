import { Component, OnInit } from '@angular/core';
import { Galeria } from 'src/app/modelo/Galeria';
import { ProductoresService } from 'src/app/servicios/productores.service';
import { UUID } from 'angular2-uuid';
import { GaleriaService } from 'src/app/servicios/galeria.service';
import { ToastrService } from 'ngx-toastr';
import { global } from 'src/app/servicios/Global';
import { Productor } from 'src/app/modelo/Productor';
import { Contacto } from 'src/app/modelo/Contacto';
import { Actividades } from 'src/app/modelo/Actividades';
import { Canton } from 'src/app/modelo/Canton';
import { ActividadesService } from 'src/app/servicios/actividades.service';
import { CantonService } from 'src/app/servicios/canton.service';
import { ContactoService } from 'src/app/servicios/contacto.service';

@Component({
  selector: 'app-consultar-productores',
  templateUrl: './consultar-productores.component.html',
  styleUrls: ['./consultar-productores.component.css']
})
export class ConsultarProductoresComponent implements OnInit {
  public img1: boolean = false;
  public archivoExtension1: boolean = true;
  imageSrc1: any;

  public img2: boolean = false;
  public archivoExtension2: boolean = true;
  imageSrc2: any;

  public center1 = { lat: -0.903170592, lng: -78.868795865 };
  markerOptions1 = { draggable: true };
  markerPositions1: google.maps.LatLngLiteral[] = [];
  public zoom1 = 10;
  display1?: google.maps.LatLngLiteral;
  public posicion1: any = '';

  public productores: any[];
  public galeria: Galeria = new Galeria(0, 0, '', '');
  public idrepartidor: number = 0;
  public nombreProductor: string = '';
  public urlImage: string = global.urlImage;
  public galerias: Galeria[];
  public productorInfo: Productor = new Productor(0, 0, 0, 0, '', '', '', '', '', '', '', '');
  public contactoInfo: Contacto = new Contacto(0, '', '', '');
  public actividadInfo: Actividades = new Actividades(0, '');
  public cantonInfo: Canton = new Canton(0, '');
  public printBtnInfo: boolean = false;
  public productorUpdate: Productor = new Productor(0, 0, 0, 0, '', '', '', '', '', '', '', 'vacio');
  public contactoUpdate: Contacto = new Contacto(0, '', '', '');
  public actividades: Actividades[] = [];
  public cantones: Canton[] = [];
  public anterior: string = '';
  public buscartxt: string = '';

  constructor(
    private _productoresService: ProductoresService,
    private _galeriaService: GaleriaService,
    private toastr: ToastrService,
    private _actividadService: ActividadesService,
    private _cantonService: CantonService,
    private _contactoService: ContactoService,
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  printInfo(): void {
    this.printBtnInfo = true;
    setTimeout(() => {
      window.print();
    }, 600)
    setTimeout(() => {
      this.printBtnInfo = false;
    }, 2000)
  }

  actualizar(): void {
    console.log(this.productorUpdate)
    this._contactoService.update(this.contactoUpdate).subscribe(
      response => {
        this.getAll();
        console.log("bien contacto ------");
      }, error => {
        console.log(error);
      }
    )
    this._productoresService.update(this.productorUpdate, this.anterior).subscribe(
      response => {
        this.getAll();
        console.log(response);
        this.productorUpdate.file = '';
      }, error => {
        console.log(error)
      }
    )
    this.toastr.success('Información actualizada correctamente!', 'Hecho!');
  }

  abrirUpdate(x): void {
    this.anterior = x.portada;
    this.mostrarActividades();
    this.mostrarCantones();
    this.idrepartidor = x.idproductor;
    this.productorUpdate = new Productor(x.idproductor, x.idcanton, x.idcontacto, x.idactividad, x.nombre, x.descripcion, x.portada, x.fecha_registro, x.longitud, x.latitud, x.direccion, '');
    this.contactoUpdate = new Contacto(x.idcontacto, x.telefono, x.celular, x.email);
    
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

  abrirInfo(x): void {
    this.idrepartidor = x.idproductor;
    this.productorInfo = new Productor(x.idproductor, 0, 0, 0, x.nombre, x.descripcion, x.portada, x.fecha_registro, x.longitud, x.latitud, x.direccion, '');
    this.contactoInfo = new Contacto(x.idcontacto, x.telefono, x.celular, x.email);
    this.actividadInfo = new Actividades(x.idactividad, x.descripcion_actividad);
    this.cantonInfo = new Canton(x.idcanton, x.nombrecanton);
    this.center1 = { lat: +x.latitud, lng: +x.longitud };
    this.markerPositions1 = [{ lat: +x.latitud, lng: +x.longitud }]

    this.getGaleria();
  }

  deleteImagen(id, nombre): void {
    this._galeriaService.delete(id, nombre).subscribe(
      response => {
        this.toastr.success('Imagen eliminada correctamente!', 'Hecho!');
        this.getGaleria();
      }, error => {
        console.log(error);
      }
    )
  }

  getGaleria(): void {
    this._galeriaService.getOne(this.idrepartidor).subscribe(
      response => {
        this.galerias = response.response;
      }, error => {
        console.log(error);
      }
    )
  }

  abrirGaleria(idrepartidor, nombres): void {
    this.idrepartidor = idrepartidor;
    this.nombreProductor = nombres;
    this.getGaleria();
  }

  guardarGaleria(): void {
    this.galeria.idproductor = this.idrepartidor;
    this._galeriaService.create(this.galeria).subscribe(
      response => {
        this.toastr.success('Imagen agregada correctamente!', 'Hecho!');
        this.limpiarImagen1();
        this.getGaleria();
      }, error => {
        console.log(error)
      }
    )
  }

  getAll(): void {
    this._productoresService.getAllRelaciones().subscribe(
      response => {
        this.productores = response.response;
      }, error => {
        console.log(error);
      }
    )
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
      this.galeria.imagen = UUID.UUID() + '.' + extension;
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
    this.galeria.file = btoa(binaryString);
  }

  limpiarImagen1(): void {
    this.imageSrc1 = null;
    this.galeria.imagen = '';
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

  seleccionarImagen2(event: any): void {
    var files = event.target.files;
    var file = files[0];
    var extension = file.name.split('.').pop();
    extension = extension.toLowerCase();
    if (extension == 'jpg' || extension == 'jpeg' || extension == 'png' || extension == 'gif' || extension == 'webp' || extension == 'svg') {
      this.img2 = true;
      this.readURL2(event);
      this.archivoExtension2 = true;
      this.productorUpdate.portada = UUID.UUID() + '.' + extension;
      if (files && file) {
        var reader = new FileReader();
        reader.onload = this._handleReaderLoaded2.bind(this);
        reader.readAsBinaryString(file);
      }
    } else {
      this.archivoExtension2 = false;
    }
  }

  _handleReaderLoaded2(readerEvent: any) {
    var binaryString = readerEvent.target.result;
    this.productorUpdate.file = btoa(binaryString);
  }

  readURL2(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.imageSrc2 = reader.result;
      reader.readAsDataURL(file);
    }
  }

}
