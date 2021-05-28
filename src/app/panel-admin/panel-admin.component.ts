import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Administrador } from '../modelo/Administrador';
import { AdministradorService } from '../servicios/administrador.service';
import { ProductoresService } from '../servicios/productores.service';

@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.component.html',
  styleUrls: ['./panel-admin.component.css']
})
export class PanelAdminComponent implements OnInit {

  public idusuario: number = 0;

  constructor(
    private _route: ActivatedRoute,
  ) {
    this._route.queryParams.pipe(filter(params => params.idusuario))
      .subscribe(params => {
        this.idusuario = params.idusuario;
      })
  }

  ngOnInit(): void {
    
  }

  

}
