import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  constructor(private cargando: LoadingService) {}

  ngOnInit() {
    setTimeout(() => {
      this.cargando.detenerCargando();
    }, 1000);
  }

}
