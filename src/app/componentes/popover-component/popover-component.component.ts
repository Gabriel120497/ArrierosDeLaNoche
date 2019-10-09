import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover-component',
  templateUrl: './popover-component.component.html',
  styleUrls: ['./popover-component.component.scss'],
})
export class PopoverComponentComponent implements OnInit {

  options = [{ option: 'Ver Información' }, { option: 'Subir de Rango' }];

  constructor() { }

  ngOnInit() { }

  option(valor) {
    switch (valor) {
      case 0:

        break;

      case 1:

        break;

      default:
        break;
    }
  }

}
