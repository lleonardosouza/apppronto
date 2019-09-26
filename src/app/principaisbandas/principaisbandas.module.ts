import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrincipaisbandasPage } from './principaisbandas.page';

const routes: Routes = [
  {
    path: '',
    component: PrincipaisbandasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrincipaisbandasPage]
})
export class PrincipaisbandasPageModule {}
