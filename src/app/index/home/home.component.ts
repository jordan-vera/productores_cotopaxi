import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Productor } from 'src/app/modelo/Productor';
import { global } from 'src/app/servicios/Global';
import { ProductoresService } from 'src/app/servicios/productores.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('panel2', { read: ElementRef }) public panel2: ElementRef<any>;
  @ViewChild('panel3', { read: ElementRef }) public panel3: ElementRef<any>;
  @ViewChild('panel4', { read: ElementRef }) public panel4: ElementRef<any>;
  @ViewChild('panel5', { read: ElementRef }) public panel5: ElementRef<any>;
  @ViewChild('panel6', { read: ElementRef }) public panel6: ElementRef<any>;

  public productoresLamana: Productor[];
  public productoresLatacunga: Productor[];
  public productorespangua: Productor[];
  public productorespijili: Productor[];
  public productoressalcedo: Productor[];
  public productoressaquisili: Productor[];
  public productoressigchos: Productor[];
  public urlPortada: string = global.urlImage;

  constructor(
    private _productoresService: ProductoresService,
  ) { }

  ngOnInit(): void {
    this.getLaMana();
  }

  public onPreviousSearchPosition2(): void {
    this.panel2.nativeElement.scrollTo({ left: (this.panel2.nativeElement.scrollLeft - 170), behavior: 'smooth' });
  }

  public onNextSearchPosition2(): void {
    this.panel2.nativeElement.scrollTo({ left: (this.panel2.nativeElement.scrollLeft + 170), behavior: 'smooth' });
  }

  public onPreviousSearchPosition3(): void {
    this.panel3.nativeElement.scrollTo({ left: (this.panel3.nativeElement.scrollLeft - 170), behavior: 'smooth' });
  }

  public onNextSearchPosition3(): void {
    this.panel3.nativeElement.scrollTo({ left: (this.panel3.nativeElement.scrollLeft + 170), behavior: 'smooth' });
  }

  public onPreviousSearchPosition4(): void {
    this.panel4.nativeElement.scrollTo({ left: (this.panel4.nativeElement.scrollLeft - 170), behavior: 'smooth' });
  }

  public onNextSearchPosition4(): void {
    this.panel4.nativeElement.scrollTo({ left: (this.panel4.nativeElement.scrollLeft + 170), behavior: 'smooth' });
  }

  public onPreviousSearchPosition5(): void {
    this.panel5.nativeElement.scrollTo({ left: (this.panel5.nativeElement.scrollLeft - 170), behavior: 'smooth' });
  }

  public onNextSearchPosition5(): void {
    this.panel5.nativeElement.scrollTo({ left: (this.panel5.nativeElement.scrollLeft + 170), behavior: 'smooth' });
  }

  public onPreviousSearchPosition6(): void {
    this.panel6.nativeElement.scrollTo({ left: (this.panel6.nativeElement.scrollLeft - 170), behavior: 'smooth' });
  }

  public onNextSearchPosition6(): void {
    this.panel6.nativeElement.scrollTo({ left: (this.panel6.nativeElement.scrollLeft + 170), behavior: 'smooth' });
  }

  getLaMana(): void {
    this._productoresService.getporCanton(7).subscribe(
      response => {
        this.productoresLamana = response.response;
        this.getLatacunga();
      }, error => {
        console.log(error);
      }
    )
  }

  getLatacunga(): void {
    this._productoresService.getporCanton(1).subscribe(
      response => {
        this.productoresLatacunga = response.response;
        this.getPangua();
      }, error => {
        console.log(error);
      }
    )
  }

  getPangua(): void {
    this._productoresService.getporCanton(2).subscribe(
      response => {
        this.productorespangua = response.response;
        this.getPujili();
      }, error => {
        console.log(error);
      }
    )
  }

  getPujili(): void {
    this._productoresService.getporCanton(5).subscribe(
      response => {
        this.productorespijili = response.response;
        this.getSalcedo();
      }, error => {
        console.log(error);
      }
    )
  }

  getSalcedo(): void {
    this._productoresService.getporCanton(6).subscribe(
      response => {
        this.productoressalcedo = response.response;
        this.getSaquisili();
      }, error => {
        console.log(error);
      }
    )
  }

  getSaquisili(): void {
    this._productoresService.getporCanton(3).subscribe(
      response => {
        this.productoressaquisili = response.response;
        this.getSigchos();
      }, error => {
        console.log(error);
      }
    )
  }

  getSigchos(): void {
    this._productoresService.getporCanton(4).subscribe(
      response => {
        this.productoressigchos = response.response;
      }, error => {
        console.log(error);
      }
    )
  }

}
