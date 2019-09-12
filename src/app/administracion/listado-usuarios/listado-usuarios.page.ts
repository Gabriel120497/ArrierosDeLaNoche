import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.page.html',
  styleUrls: ['./listado-usuarios.page.scss'],
})
export class ListadoUsuariosPage implements OnInit {

  usuarios = [];
  modificado:boolean;

  constructor(private route: ActivatedRoute) { }

  ionViewWillEnter(){
    this.modificado = false;
    this.ngOnInit();
  }

  ngOnInit() {
     //Crear servicio que me traiga todos los usuarios 
    //registrados con sus estados que asisten a determinada caminata
    this.modificado = false;
    this.usuarios = [{
      nombre: 'Peranito Perez',
      estado: 'Registrado',
      isChecked: false
    },
    {
      nombre: 'Sutanita Salazar',
      estado: 'Pago',
      isChecked: true
    }];
    this.route.queryParams.subscribe(params => {
      console.log(params['idEvento']);
    });
  }

  validarPago(i){
    this.usuarios[i]['validado'] = true;
    this.modificado = true;
    console.log(this.usuarios);
    console.log(this.modificado);
  }

  guardar(){
    let usuariosNuevo = []
    this.modificado = false;
    this.usuarios.forEach(user => {
      if (user['validado'] === true) {
        console.log('usuario', user);
        usuariosNuevo.push(user);
      }
    });
    console.log(usuariosNuevo);
    console.log(this.modificado);
    
    //Mandar por el servicio
  }

}
