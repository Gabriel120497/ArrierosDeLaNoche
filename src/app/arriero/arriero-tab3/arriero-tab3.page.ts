import { Component, OnInit } from '@angular/core';
import { ConsultsService } from 'src/app/services/consults.service';
import { TokenService } from 'src/app/services/token.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-arriero-tab3',
  templateUrl: './arriero-tab3.page.html',
  styleUrls: ['./arriero-tab3.page.scss'],
})
export class ArrieroTab3Page implements OnInit {

  usuario = [];
  editSave: String = 'brush';
  editar: boolean = false;
  bodyEdit = { numeroCelular: '', nombreContacto: '', numeroContacto: '' };

  constructor(private cargando: LoadingService, private consults: ConsultsService, private service: TokenService) { }

  ngOnInit() {
    this.cargando.mostrarCargando('Cargando', 8000);
    let idPerfil = this.service.getIdPerfil();
    const body = {'id_usuario':idPerfil};
    //const body = { 'id_usuario': 2 };

    this.consults.getUserInfo(body).subscribe(
      (response: any) => {
        this.usuario = response.res;
        console.log(this.usuario);
        this.cargando.detenerCargando();
        this.bodyEdit.numeroCelular = response.res.celular;
        this.bodyEdit.nombreContacto = response.res.nombreContacto;
        this.bodyEdit.numeroContacto = response.res.numeroContacto;
      },
      (error: any) => {
      }
    );
    console.log('body', this.bodyEdit);


  }

  editarGuardar() {
    //this.editSave  =  this.editSave  ===  'brush'  ?  'checkmark'  :  'brush';
    if (this.editSave === 'brush') {
      this.editSave = 'checkmark';
      this.editar = true;
      //console.log(this.bodyEdit);

    } else {
      this.editSave = 'brush';
      this.editar = false;
      this.usuario['celular'] = this.bodyEdit.numeroCelular;
      this.usuario['nombreContacto'] = this.bodyEdit.nombreContacto;
      this.usuario['numeroContacto'] = this.bodyEdit.numeroContacto;
      console.log(this.bodyEdit);
      //Crear servicio para actualizar datos con el bodyEdit
    }
    console.log(this.editSave);

  }

}