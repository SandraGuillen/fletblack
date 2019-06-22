import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuestraComponent } from './nuestra/nuestra.component';
import { LoginComponent } from './login/login.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { LoginConductorComponent } from './login-conductor/login-conductor.component';
import { RegistrarCondu6ctorComponent } from './registrar-condu6ctor/registrar-condu6ctor.component';

import { HttpClientModule } from '@angular/common/http';
import { ListaConductorComponent } from './lista-conductor/lista-conductor.component'

@NgModule({
  declarations: [
    AppComponent,
    NuestraComponent,
    LoginComponent,
    ServiciosComponent,
    RegistrarComponent,
    LoginConductorComponent,
    RegistrarCondu6ctorComponent,
    ListaConductorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
