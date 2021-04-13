import { Component, OnInit } from '@angular/core';
import { ConsultsService } from 'src/app/services/consults.service';
import { TokenService } from 'src/app/services/token.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  usuario = [];
  editSave: String = 'brush';
  editar: boolean = false;
  bodyEdit = { celular: '', nombreContacto: '', numeroContacto: '', documento: '' };

  constructor(private cargando: LoadingService, private consults: ConsultsService, private service: TokenService) { }

  ngOnInit() {
    this.cargando.mostrarCargando('Cargando', 8000);
    let idPerfil = this.service.getId();
    const body = { 'id_usuario': idPerfil };
    //const body = { 'id_usuario': 2 };
    this.bodyEdit.documento = this.service.getUser();

    this.consults.getUserInfo(body).subscribe(
      (response: any) => {
        this.usuario = response.res;
        console.log(this.usuario);
        this.cargando.detenerCargando();
        this.bodyEdit.celular = response.res.celular;
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
      this.usuario['celular'] = this.bodyEdit.celular;
      this.usuario['nombreContacto'] = this.bodyEdit.nombreContacto;
      this.usuario['numeroContacto'] = this.bodyEdit.numeroContacto;
      console.log(this.bodyEdit);
      this.cargando.mostrarCargando('Cargando', 3000);
      this.consults.getAllEvents(this.bodyEdit).subscribe((response: any) => {
        console.log(response.res);
        if (response.res.code === '200') {
          this.cargando.detenerCargando();
          this.cargando.presentToast(response.res.message);
        } else {
          this.cargando.detenerCargando();
          this.cargando.presentToast(response.res.message);
        }
      },
        (error: any) => {
        });
    }
    console.log(this.editSave);

  }

}