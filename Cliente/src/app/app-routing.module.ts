import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {NuestraComponent} from './nuestra/nuestra.component';
import {ServiciosComponent} from './servicios/servicios.component';
import {RegistrarComponent} from './registrar/registrar.component';
import {LoginConductorComponent} from './login-conductor/login-conductor.component';
import {RegistrarCondu6ctorComponent} from './registrar-condu6ctor/registrar-condu6ctor.component';
import { ListaConductorComponent } from './lista-conductor/lista-conductor.component';


const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'nuestra', component: NuestraComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'registrar', component: RegistrarComponent},
  {path: 'login-conductor', component: LoginConductorComponent},
  {path: 'registrar-condu6ctor', component: RegistrarCondu6ctorComponent},
  { path: '', redirectTo: '/conductor', pathMatch: 'full' },
  { path: 'conductor', component: ListaConductorComponent },
  { path: 'conductor/add', component: RegistrarCondu6ctorComponent },
  { path: 'contacto/edit/:placa', component:RegistrarCondu6ctorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
