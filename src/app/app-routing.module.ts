import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacebookComponent } from './facebook/facebook.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: FacebookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
 FacebookComponent
]
