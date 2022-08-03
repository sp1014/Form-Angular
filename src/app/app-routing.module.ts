import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoComponent } from './vistas/nuevo/nuevo.component';

const routes: Routes = [
 { path:'', redirectTo:'nuevo', pathMatch: 'full'},
 { path: 'nuevo', component: NuevoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [NuevoComponent]
