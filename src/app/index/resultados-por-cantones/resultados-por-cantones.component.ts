import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Canton } from 'src/app/modelo/Canton';
import { Productor } from 'src/app/modelo/Productor';
import { CantonService } from 'src/app/servicios/canton.service';
import { ProductoresService } from 'src/app/servicios/productores.service';

@Component({
  selector: 'app-resultados-por-cantones',
  templateUrl: './resultados-por-cantones.component.html',
  styleUrls: ['./resultados-por-cantones.component.css']
})
export class ResultadosPorCantonesComponent implements OnInit {

  public idcanton: number = 0;
  public productores: Productor[];
  public canton: Canton = new Canton(0,'');

  constructor(
    private _route: ActivatedRoute,
    private _productoresService: ProductoresService,
    private _cantonService: CantonService,
    public spinner: NgxSpinnerService
  ) { 
    this._route.params.subscribe((params: Params) => {
      this.idcanton = params.idcanton;
      this.getProductores();
      this.getcanton();
    });
  }

  ngOnInit(): void {
  }

  getcanton(): void {
    this.spinner.show();
    this._cantonService.getOne(this.idcanton).subscribe(
      response => {
        this.spinner.hide();
        this.canton = response.response;
      }, error => {
        this.spinner.hide();
        console.log(error);
      }
    )
  }

  getProductores(): void {
    this.spinner.show();
    this._productoresService.getporCanton(this.idcanton).subscribe(
      response => {
        this.spinner.hide();
        this.productores = response.response;
      }, error => {
        this.spinner.hide();
        console.log(error);
      }
    )
  }

}
