import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListadoUsuariosPage } from './listado-usuarios.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoUsuariosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListadoUsuariosPage]
})
export class ListadoUsuariosPageModule {}
