import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalAutoComponent } from './modal-auto/modal-auto.component';

const routes: Routes = [
  {path: 'add', component: ModalAutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
