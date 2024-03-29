import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';
import { ConsultsService } from 'src/app/services/consults.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-arriero-tab2',
  templateUrl: './arriero-tab2.page.html',
  styleUrls: ['./arriero-tab2.page.scss'],
})
export class ArrieroTab2Page implements OnInit {

  eventos = [];

  constructor(private cargando: LoadingService, private consults: ConsultsService, private router: Router,
    private token:TokenService) { 
  }

  ngOnInit() {
    const body  = {'idUser': this.token.getId()};
    this.consults.getAllEvents(body).subscribe((response: any) => {
      console.log(response);
      
      this.eventos = response.res;
      this.cargando.detenerCargando();
    },
    (error: any) => {
    });
  }

  addNew() {
    this.router.navigate(['nuevo-evento'])
  }
}
