import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServices } from 'src/app/data.services';
import { Mensaje } from 'src/app/mensaje.model';



@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})


export class ContactoComponent implements OnInit {

  ngOnInit(): void {
  }


  constructor(private dataServices: DataServices,
    private router: Router,
    ) { }



  mensajes: Mensaje[] = [] ;
  nombreInput: string = '';
  telefonoInput!: number;
  emailInput: string = '';
  asuntoInput: string = '';
  mensajeInput: string = '';


  enviarMensaje(){

    if(this.nombreInput != null && this.telefonoInput != null && this.mensajeInput != null){
      let nuevoMensaje = new Mensaje (this.nombreInput, this.telefonoInput,
        this.emailInput, this.asuntoInput, this.mensajeInput);
      this.mensajes.push( nuevoMensaje );
      this.dataServices.guardarMensaje( this.mensajes );
      this.router.navigate (['']);
    }
    else{//si no tiene datos no hace nada se queda en el mismo lugar
      return;
    }




  }


}
