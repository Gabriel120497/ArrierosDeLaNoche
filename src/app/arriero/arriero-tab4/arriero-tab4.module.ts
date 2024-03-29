import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ArrieroTab4Page } from './arriero-tab4.page';

const routes: Routes = [
  {
    path: '',
    component: ArrieroTab4Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ArrieroTab4Page]
})
export class ArrieroTab4PageModule {}
