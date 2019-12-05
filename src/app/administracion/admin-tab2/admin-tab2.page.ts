import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';
import { ConsultsService } from 'src/app/services/consults.service';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-admin-tab2',
  templateUrl: './admin-tab2.page.html',
  styleUrls: ['./admin-tab2.page.scss'],
})
export class AdminTab2Page implements OnInit {

  eventos = [];

  constructor(private cargando: LoadingService, private consults: ConsultsService, private router: Router,
    private token: TokenService) {
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter()');
    const body = { 'idUser': this.token.getId() };
    console.log('onInit');
    this.consults.getAllEvents(body).subscribe((response: any) => {
      console.log(response);

      this.eventos = response.res;
      this.cargando.detenerCargando();
    },
      (error: any) => {
      });
  }

  ngOnInit() {
    console.log('ngOnInit()');
    
    /* const body = { 'idUser': this.token.getId() };
    console.log('onInit');
    this.consults.getAllEvents(body).subscribe((response: any) => {
      console.log(response);

      this.eventos = response.res;
      this.cargando.detenerCargando();
    },
      (error: any) => {
      }); */
  }

ngAfterContentInit(){
  console.log('ngAfterContentInit()');
  
}


  addNew() {
    this.router.navigate(['nuevo-evento'])
  }
}
