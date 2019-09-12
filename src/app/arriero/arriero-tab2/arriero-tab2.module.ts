import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ArrieroTab2Page } from './arriero-tab2.page';

const routes: Routes = [
  {
    path: '',
    component: ArrieroTab2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ArrieroTab2Page]
})
export class ArrieroTab2PageModule {}
