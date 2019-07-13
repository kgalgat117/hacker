import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacebookComponent } from './facebook/facebook.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    FacebookComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
