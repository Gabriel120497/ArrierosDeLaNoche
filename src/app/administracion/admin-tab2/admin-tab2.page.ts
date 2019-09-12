import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';
import { ConsultsService } from 'src/app/services/consults.service';

@Component({
  selector: 'app-admin-tab2',
  templateUrl: './admin-tab2.page.html',
  styleUrls: ['./admin-tab2.page.scss'],
})
export class AdminTab2Page implements OnInit {

  eventos = [];

  constructor(private cargando: LoadingService, private consults: ConsultsService) { 
  }

  ngOnInit() {
    console.log('onInit');
    this.consults.getAllEvents2().subscribe((response: any) => {
      console.log(response.res);
      
      this.eventos = response.res;
      this.cargando.detenerCargando();
    },
    (error: any) => {
    });
  }

}
