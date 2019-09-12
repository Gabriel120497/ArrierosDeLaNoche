import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../services/loading.service';
import { ConsultsService } from '../services/consults.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  eventos = [];

  constructor(private cargando: LoadingService, private consults: ConsultsService) { }

  ngOnInit() {
    this.consults.getAllEvents2().subscribe((response: any) => {
      console.log(response.res);
      
      this.eventos = response.res;
      this.cargando.detenerCargando();
    },
    (error: any) => {
    });

  }

}
