import { Component, OnInit, HostBinding } from '@angular/core';
import { ConductorServices } from 'src/app/servicios/conductor.services';

@Component({
  selector: 'app-lista-conductor',
  templateUrl: './lista-conductor.component.html',
  styleUrls: ['./lista-conductor.component.css']
})
export class ListaConductorComponent implements OnInit 
{
  @HostBinding('class') classes = 'row';

  // Definición de arreglo de tipo Conductores
  conductores: any = [];


  constructor(private conductorService: ConductorServices) { }

  ngOnInit() 
  {
    this.get();
  }
  get() 
  {
    this.conductorService.list().subscribe(
      res => {
        // Llenar el arreglo con la respuesta
        this.conductores = res;
      },
      err => console.error(err)
    );
  }

  

  delete(placa: string) {

    this.conductorService.delete(placa).subscribe(
      res => {
        console.log(res);
        this.get();
      },
      err => {
        console.error(err);
      }
    );


  }

}
