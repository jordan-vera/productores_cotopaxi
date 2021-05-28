import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdministradorService } from 'src/app/servicios/administrador.service';
import { filter } from 'rxjs/operators';
import { Administrador } from 'src/app/modelo/Administrador';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public idusuario: number = 0;
  public administrador: Administrador = new Administrador(0,'','');

  constructor(
    private _route: ActivatedRoute,
    private _adminService: AdministradorService,
    private toastr: ToastrService,
  ) {
    this._route.queryParams.pipe(filter(params => params.idusuario))
      .subscribe(params => {
        this.idusuario = params.idusuario;
      })
   }

  ngOnInit(): void {
    this.getAdmin();
  }

  getAdmin(): void {
    this._adminService.getOne(this.idusuario).subscribe(
      response => {
        this.administrador = response.response;
      }, error => {
        console.log(error);
      }
    )
  }

  actualizar(): void {
    this._adminService.update(this.administrador).subscribe(
      response => {
        this.toastr.success('Datos actualizada correctamente!', 'Hecho!');
      }, error => {
        console.log(error);
      }
    )
  }

}
