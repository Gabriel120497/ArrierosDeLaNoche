import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ArrieroTab3Page } from './arriero-tab3.page';

const routes: Routes = [
  {
    path: '',
    component: ArrieroTab3Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ArrieroTab3Page]
})
export class ArrieroTab3PageModule {}
