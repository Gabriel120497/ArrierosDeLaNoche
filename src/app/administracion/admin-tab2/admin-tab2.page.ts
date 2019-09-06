import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-admin-tab2',
  templateUrl: './admin-tab2.page.html',
  styleUrls: ['./admin-tab2.page.scss'],
})
export class AdminTab2Page implements OnInit {

  constructor(private cargando: LoadingService) { 
  }

  ngOnInit() {
    this.cargando.detenerCargando();
  }

}
