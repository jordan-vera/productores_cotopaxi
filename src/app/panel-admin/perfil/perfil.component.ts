import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdministradorService } from 'src/app/servicios/administrador.service';
import { filter } from 'rxjs/operators';
import { Administrador } from 'src/app/modelo/Administrador';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public idusuario: number = 0;
  public administrador: Administrador = new Administrador(0, '', '');

  constructor(
    private _route: ActivatedRoute,
    private _adminService: AdministradorService,
    private toastr: ToastrService,
    public spinner: NgxSpinnerService
  ) {
    this._route.queryParams.pipe(filter(params => params.idusuario)).subscribe(params => {
      this.idusuario = params.idusuario;
    })
  }

  ngOnInit(): void {
    this.getAdmin();
  }

  getAdmin(): void {
    this.spinner.show();
    this._adminService.getOne(this.idusuario).subscribe(
      response => {
        this.spinner.hide();
        this.administrador = response.response;
      }, error => {
        this.spinner.hide();
        console.log(error);
      }
    )
  }

  actualizar(): void {
    this.spinner.show();
    this._adminService.update(this.administrador).subscribe(
      response => {
        this.spinner.hide();
        this.toastr.success('Datos actualizada correctamente!', 'Hecho!');
      }, error => {
        this.spinner.hide();
        console.log(error);
      }
    )
  }

}
