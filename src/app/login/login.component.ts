import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Administrador } from '../modelo/Administrador';
import { AdministradorService } from '../servicios/administrador.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public administrador: Administrador = new Administrador(0, '', '');
  public usuarioValido: boolean = true;

  constructor(
    private _adminiService: AdministradorService,
    private _router: Router,
    public spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
  }

  validar(): void {
    this.spinner.show();
    this._adminiService.login(this.administrador.user, this.administrador.clave).subscribe(
      response => {
        this.spinner.hide();
        if (response.response == 'done') {
          this.usuarioValido = true;
          this._router.navigate(['/panel-admin'], { queryParams: { idusuario: response.idadmin } });
        } else if (response.error) {
          this.usuarioValido = false;
        }
      }, error => {
        this.spinner.hide();
        console.log(error);
      }
    )
  }

}
