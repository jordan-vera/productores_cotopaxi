import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  @ViewChild('panel2', { read: ElementRef }) public panel2: ElementRef<any>;
  @ViewChild('panel3', { read: ElementRef }) public panel3: ElementRef<any>;
  @ViewChild('panel4', { read: ElementRef }) public panel4: ElementRef<any>;

  public productoresLatacunga: Array<any> = [];
  public productoresLamana: Array<any> = [];
  public productoresPangua: Array<any> = [];

  public latacunga: boolean = true;
  public lamana: boolean = true;
  public pangua: boolean = true;
  public pujili: boolean = true;
  public salcedo: boolean = true;
  public saquisili: boolean = true;

  public opcionCanton: string = '';
  public busquedatxt: string = '';

  constructor() { }

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
    if(canton == 'latacunga') {
      this.lamana = false;
      this.pangua = false;
      this.pujili = false;
      this.salcedo = false;
      this.saquisili = false;
      this.latacunga = true;
    } else if (canton == 'lamana') {
      this.pangua = false;
      this.latacunga = false;
      this.lamana = true;
      this.pujili = false;
      this.salcedo = false;
      this.saquisili = false;
    } else if (canton == 'pangua') {
      this.pangua = true;
      this.latacunga = false;
      this.lamana = false;
      this.pujili = false;
      this.salcedo = false;
      this.saquisili = false;
    } else if (canton == 'pujili'){
      this.pangua = false;
      this.latacunga = false;
      this.lamana = false;
      this.pujili = true;
      this.salcedo = false;
      this.saquisili = false;
    }else if (canton == 'salcedo'){
      this.pangua = false;
      this.latacunga = false;
      this.lamana = false;
      this.pujili = false;
      this.salcedo = true;
      this.saquisili = false;
    } else if (canton == 'saquisili'){
      this.pangua = false;
      this.latacunga = false;
      this.lamana = false;
      this.pujili = false;
      this.salcedo = false;
      this.saquisili = true;
    }
  }

  ngOnInit(): void {
    this.productoresLatacunga = [
      {
        nombre: "Rancho Yanahurco",
        descripcion: "Yanahuco es uno de los ranchos más importantes productores de productos lacteos.",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/04/ae/56/ee/hacienda-yanahurco.jpg"
      },
      {
        nombre: "Granja la Abuelita",
        descripcion: "Venta de productos alimenticios para producción avícola, porcina y vacuno.",
        image: "https://lh3.googleusercontent.com/baVlzhyZkjzm1wE0uWcYWfn142DjjXLEbucAcaD3g1ZHA3xg5c-NX1wbYv_4MJjZt79hhAOP4zrdt6us=w960-h960-n-o-v1"
      },
      {
        nombre: "Cesar Vaca Calzado",
        descripcion: "FABRICA Y VENTA DE CALZADOS EN ECUADOR. Somos Fabricantes por ende tenemos precios para negocio",
        image: "https://container.aiyellow.com/pictures/1700000_1800000/1700000_1710000/1705000_1706000/1705400_1705500/1705476/banners/04e0b5913d028fd9037a2e9392f25044.jpg"
      },
      {
        nombre: "Rancho Latacunga",
        descripcion: "Yanahuco es uno de los ranchos más importantes productores de productos lacteos.",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/04/ae/56/f5/hacienda-yanahurco.jpg"
      },
      {
        nombre: "Fábrica Alcopesa s.a.",
        descripcion: "Opera en Comerciantes al por Mayor de Comestibles y Productos Relacionados industrias.",
        image: "https://www.alcopesa.com/alcopesa_home.jpg"
      },
      {
        nombre: "Rancho Azul",
        descripcion: "Yanahuco es uno de los ranchos más importantes productores de productos lacteos.",
        image: "https://image.freepik.com/foto-gratis/rancho-fenix-latacunga-cotopaxi-ecuador-12-agosto-2016-jinete-doma-caballo_133548-375.jpg"
      },
      {
        nombre: "Rancho Tres hermanos",
        descripcion: "Yanahuco es uno de los ranchos más importantes productores de productos lacteos.",
        image: "https://i.ytimg.com/vi/poypETBgCmI/hqdefault.jpg"
      },
      {
        nombre: "Rancho El por venir",
        descripcion: "Yanahuco es uno de los ranchos más importantes productores de productos lacteos.",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/5d/d8/9c/hacienda-el-porvenir.jpg?w=900&h=-1&s=1"
      },
    ]

    this.productoresLamana = [
      {
        nombre: "Rancho El por venir",
        descripcion: "Yanahuco es uno de los ranchos más importantes productores de productos lacteos.",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/5d/d8/9c/hacienda-el-porvenir.jpg?w=900&h=-1&s=1"
      },
      {
        nombre: "Cesar Vaca Calzado",
        descripcion: "FABRICA Y VENTA DE CALZADOS EN ECUADOR. Somos Fabricantes por ende tenemos precios para negocio",
        image: "https://container.aiyellow.com/pictures/1700000_1800000/1700000_1710000/1705000_1706000/1705400_1705500/1705476/banners/04e0b5913d028fd9037a2e9392f25044.jpg"
      },
      {
        nombre: "Rancho Yanahurco",
        descripcion: "Yanahuco es uno de los ranchos más importantes productores de productos lacteos.",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/04/ae/56/ee/hacienda-yanahurco.jpg"
      },
      {
        nombre: "Rancho Azul",
        descripcion: "Yanahuco es uno de los ranchos más importantes productores de productos lacteos.",
        image: "https://image.freepik.com/foto-gratis/rancho-fenix-latacunga-cotopaxi-ecuador-12-agosto-2016-jinete-doma-caballo_133548-375.jpg"
      },
      {
        nombre: "Granja la Abuelita",
        descripcion: "Venta de productos alimenticios para producción avícola, porcina y vacuno.",
        image: "https://lh3.googleusercontent.com/baVlzhyZkjzm1wE0uWcYWfn142DjjXLEbucAcaD3g1ZHA3xg5c-NX1wbYv_4MJjZt79hhAOP4zrdt6us=w960-h960-n-o-v1"
      },
      {
        nombre: "Rancho Latacunga",
        descripcion: "Yanahuco es uno de los ranchos más importantes productores de productos lacteos.",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/04/ae/56/f5/hacienda-yanahurco.jpg"
      },
      {
        nombre: "Fábrica Alcopesa s.a.",
        descripcion: "Opera en Comerciantes al por Mayor de Comestibles y Productos Relacionados industrias.",
        image: "https://www.alcopesa.com/alcopesa_home.jpg"
      },
      
      {
        nombre: "Rancho Tres hermanos",
        descripcion: "Yanahuco es uno de los ranchos más importantes productores de productos lacteos.",
        image: "https://i.ytimg.com/vi/poypETBgCmI/hqdefault.jpg"
      },
    ]


    this.productoresPangua = [
      {
        nombre: "Rancho Tres hermanos",
        descripcion: "Yanahuco es uno de los ranchos más importantes productores de productos lacteos.",
        image: "https://i.ytimg.com/vi/poypETBgCmI/hqdefault.jpg"
      },
      {
        nombre: "Rancho Latacunga",
        descripcion: "Yanahuco es uno de los ranchos más importantes productores de productos lacteos.",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/04/ae/56/f5/hacienda-yanahurco.jpg"
      },
      {
        nombre: "Fábrica Alcopesa s.a.",
        descripcion: "Opera en Comerciantes al por Mayor de Comestibles y Productos Relacionados industrias.",
        image: "https://www.alcopesa.com/alcopesa_home.jpg"
      },
      {
        nombre: "Rancho El por venir",
        descripcion: "Yanahuco es uno de los ranchos más importantes productores de productos lacteos.",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/5d/d8/9c/hacienda-el-porvenir.jpg?w=900&h=-1&s=1"
      },
      {
        nombre: "Cesar Vaca Calzado",
        descripcion: "FABRICA Y VENTA DE CALZADOS EN ECUADOR. Somos Fabricantes por ende tenemos precios para negocio",
        image: "https://container.aiyellow.com/pictures/1700000_1800000/1700000_1710000/1705000_1706000/1705400_1705500/1705476/banners/04e0b5913d028fd9037a2e9392f25044.jpg"
      },
      {
        nombre: "Rancho Yanahurco",
        descripcion: "Yanahuco es uno de los ranchos más importantes productores de productos lacteos.",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/04/ae/56/ee/hacienda-yanahurco.jpg"
      },
      {
        nombre: "Rancho Latacunga",
        descripcion: "Yanahuco es uno de los ranchos más importantes productores de productos lacteos.",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/04/ae/56/f5/hacienda-yanahurco.jpg"
      },
      {
        nombre: "Fábrica Alcopesa s.a.",
        descripcion: "Opera en Comerciantes al por Mayor de Comestibles y Productos Relacionados industrias.",
        image: "https://www.alcopesa.com/alcopesa_home.jpg"
      },
      {
        nombre: "Rancho Azul",
        descripcion: "Yanahuco es uno de los ranchos más importantes productores de productos lacteos.",
        image: "https://image.freepik.com/foto-gratis/rancho-fenix-latacunga-cotopaxi-ecuador-12-agosto-2016-jinete-doma-caballo_133548-375.jpg"
      },
      {
        nombre: "Granja la Abuelita",
        descripcion: "Venta de productos alimenticios para producción avícola, porcina y vacuno.",
        image: "https://lh3.googleusercontent.com/baVlzhyZkjzm1wE0uWcYWfn142DjjXLEbucAcaD3g1ZHA3xg5c-NX1wbYv_4MJjZt79hhAOP4zrdt6us=w960-h960-n-o-v1"
      },
      
    ]

  }



}
