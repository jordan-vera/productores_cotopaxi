import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  ) { }

  ngOnInit(): void {
  }

  validar(): void {
    this._adminiService.login(this.administrador.user, this.administrador.clave).subscribe(
      response => {
        if (response.response == 'done') {
          this.usuarioValido = true;
          this._router.navigate(['/panel-admin'], { queryParams: { idusuario: response.idadmin } });
        } else if (response.error) {
          this.usuarioValido = false;
        }
      },
      error => {
        console.log(error);
      }
    )
  }

}
