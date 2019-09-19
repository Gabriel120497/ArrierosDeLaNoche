import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';
import { ConsultsService } from 'src/app/services/consults.service';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.page.html',
  styleUrls: ['./listado-usuarios.page.scss'],
})
export class ListadoUsuariosPage implements OnInit {

  usuarios = [];
  habilitar = false;
  body;

  constructor(private route: ActivatedRoute, 
    private cargando: LoadingService, 
    private consults: ConsultsService) { }

  ngOnInit() {
     //Crear servicio que me traiga todos los usuarios 
    //registrados con sus estados que asisten a determinada caminata
    this.cargando.mostrarCargando('Cargando', 8000);

    this.route.queryParams.subscribe(params => {
      console.log('params: ', parseInt(params['idEvento']));
      this.body  = {'id_event': parseInt(params['idEvento'])};
    });
    console.log(this.body);
    this.consults.getAllUsersInEvent(this.body).subscribe(
      (response: any) => {
        this.usuarios = response.res;
        console.log('usuarios: ', this.usuarios);
        this.cargando.detenerCargando();
      },
      (error: any) => {
      }
    );
  }

  habilitarCheck(){
    this.habilitar = true;
  }

  validarPago(i){
    this.usuarios[i]['validado'] = true;
    console.log(this.usuarios);
  }

  guardar(){
    let usuariosNuevo = []
    this.usuarios.forEach(user => {
      if (user['validado'] === true) {
        console.log('usuario', user);
        usuariosNuevo.push(user);
      }
    });
    console.log(usuariosNuevo);
    this.habilitar = false;
    //Mandar por el servicio
  }

}
