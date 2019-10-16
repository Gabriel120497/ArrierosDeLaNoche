import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.page.html',
  styleUrls: ['./info-usuario.page.scss'],
})
export class InfoUsuarioPage implements OnInit {

  data: any;
  editSave: String = 'brush';
  editar: boolean = false;
  tipoUsuarios: string = '';
  perfiles = [];
  body = { tipoUsuario: '' };

  constructor(private service: TokenService, private route: ActivatedRoute, private router: Router, private loadingService: LoadingService) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.usuario;
      }
    });
  }

  ngOnInit() {
    this.tipoUsuarios = this.data.tipoUsuario;
    if (this.service.getIdPerfil() === 1) {
      if (this.data.tipoUsuario === 'Admin') {
        this.perfiles[0] = 'Arriero';
        this.perfiles[1] = 'Usuario';
      } else if (this.data.tipoUsuario === 'Arriero') {
        this.perfiles[0] = 'Admin';
        this.perfiles[1] = 'Usuario';
      } else {
        this.perfiles[0] = 'Admin';
        this.perfiles[1] = 'Arriero';
      }
    } else {
      if (this.data.tipoUsuario === 'Arriero') {
        this.perfiles[0] = 'Usuario';
      } else if (this.data.tipoUsuario === 'Usuario') {
        this.perfiles[0] = 'Arriero';
      }
    }

    console.log(this.perfiles);


  }

  editarGuardar() {

    if (this.service.getIdPerfil() === 1) {
      if (this.editSave === 'brush') {
        this.editSave = 'checkmark';
        this.editar = true;

      } else {
        this.editSave = 'brush';
        this.editar = false;
        this.data.tipoUsuario = this.body.tipoUsuario = this.capturar();
        console.log('body', this.body.tipoUsuario);
        console.log('data', this.data.tipoUsuario);

        //Crear servicio para actualizar datos con el bodyEdit
      }
    } else {
      if (this.data.tipoUsuario === 'Admin') {
        this.loadingService.presentToast();
      } else {
        if (this.editSave === 'brush') {
          this.editSave = 'checkmark';
          this.editar = true;
        } else {
          this.editSave = 'brush';
          this.editar = false;
          this.data.tipoUsuario = this.body.tipoUsuario = this.capturar();
          console.log('body', this.body.tipoUsuario);
          console.log('data', this.data.tipoUsuario);

          //Crear servicio para actualizar datos con el bodyEdit
        }
      }
    }


    console.log(this.editSave);

  }

  capturar() {
    return this.tipoUsuarios;

  }

}
