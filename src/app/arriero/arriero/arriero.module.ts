import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ArrieroPage } from './arriero.page';
import { TabsArrieroRoutingModule } from './arriero.router.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsArrieroRoutingModule
  ],
  declarations: [ArrieroPage]
})
export class ArrieroPageModule {}
