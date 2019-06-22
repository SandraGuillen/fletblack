import { Component, OnInit, HostBinding } from '@angular/core';
import { Conductor } from 'src/app/models/Conductor';
import { ConductorServices } from 'src/app/servicios/conductor.services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registrar-condu6ctor',
  templateUrl: './registrar-condu6ctor.component.html',
  styleUrls: ['./registrar-condu6ctor.component.css']
})
export class RegistrarCondu6ctorComponent implements OnInit 
{
  @HostBinding('class') classes = 'row';

  // Tow-way-binding
  conductor: Conductor = {
    imeic: '',
    nombrec: '',
    placa: '',
    clave: '',

  };

  edit: boolean = false;


  constructor(private conductorServices: ConductorServices, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() 
  {
    const params = this.activatedRoute.snapshot.params;

    if (params.placa) {
      this.conductorServices.get(params.placa)
        .subscribe(

          res => {
            console.log(res);
            this.conductor = res;

            this.edit = true;

          },
          err => {
            console.error(err);
          }
        );
    }
  }

  save() {

    this.conductorServices.create(this.conductor)
      .subscribe(
        res => 
        {
          console.log(res);
          this.router.navigate(['/conductor']);
        },
        err => {
          console.error(err);
        }
      );
  }


  update() {

    this.conductorServices.update(this.conductor.placa, this.conductor)
      .subscribe(
        res => {
          this.conductor = res;
          this.router.navigate(['/conductor']);
        },
        err => { 
          console.error(err);
        }
      );
  }

}
