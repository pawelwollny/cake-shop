import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CakeListComponent } from './components/cake-list/cake-list.component';
import { CakeComponent } from './components/cake/cake.component';


@NgModule({
  declarations: [CakeListComponent, CakeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
