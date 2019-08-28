import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CakeListComponent } from './components/cake-list/cake-list.component';

const routes: Routes = [
  {
    path: '',
    component: CakeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
