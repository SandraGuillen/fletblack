import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  // Definición de arreglo de tipo Contacto
  cliente: any = [];
  constructor() { }

  ngOnInit() {
  }

}
