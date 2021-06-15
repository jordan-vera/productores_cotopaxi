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
  @ViewChild('panel7', { read: ElementRef }) public panel7: ElementRef<any>;
  @ViewChild('panel8', { read: ElementRef }) public panel8: ElementRef<any>;

  public productoresLamana: Productor[];
  public productoresLatacunga: Productor[];
  public productorespangua: Productor[];
  public productorespijili: Productor[];
  public productoressalcedo: Productor[];
  public productoressaquisili: Productor[];
  public productoressigchos: Productor[];
  public urlPortada: string = global.urlImage;

  public cantLaMana: number = 0;
  public cantLatacunga: number = 0;
  public cantPangua: number = 0;
  public cantPujili: number = 0;
  public cantSalcedo: number = 0;
  public cantSaquisili: number = 0;
  public cantSigchos: number = 0;

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

  public onPreviousSearchPosition7(): void {
    this.panel7.nativeElement.scrollTo({ left: (this.panel7.nativeElement.scrollLeft - 170), behavior: 'smooth' });
  }

  public onNextSearchPosition7(): void {
    this.panel7.nativeElement.scrollTo({ left: (this.panel7.nativeElement.scrollLeft + 170), behavior: 'smooth' });
  }

  public onPreviousSearchPosition8(): void {
    this.panel8.nativeElement.scrollTo({ left: (this.panel8.nativeElement.scrollLeft - 170), behavior: 'smooth' });
  }

  public onNextSearchPosition8(): void {
    this.panel8.nativeElement.scrollTo({ left: (this.panel8.nativeElement.scrollLeft + 170), behavior: 'smooth' });
  }


  getLaMana(): void {
    this._productoresService.getporCanton(7).subscribe(
      response => {
        this.productoresLamana = response.response;
        if (response.response) {
          this.cantLaMana = this.productoresLamana.length;
        }
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
        if (response.response) {
          this.cantLatacunga = this.productoresLatacunga.length;
        }
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
        if (response.response) {
          this.cantPangua = this.productorespangua.length;
        }
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
        if (response.response) {
          this.cantPujili = this.productorespijili.length;
        }
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
        if (response.response) {
          this.cantSalcedo = this.productoressalcedo.length;
        }
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
        if (response.response) {
          this.cantSaquisili = this.productoressaquisili.length;
        }
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
        if (response.response) {
          this.cantSigchos = this.productoressigchos.length;
        }
      }, error => {
        console.log(error);
      }
    )
  }

}
