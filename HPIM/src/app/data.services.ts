import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mensaje } from './mensaje.model';



@Injectable()
export class DataServices {
  constructor(private httpClient: HttpClient) {}

  guardarMensaje(mensajes: Mensaje[]){
    let url: string =  'https://startup-engineering-f7264-default-rtdb.firebaseio.com' + '/mensajes.json';
    this.httpClient.post(url, mensajes)
    .subscribe( 
      (response) => console.log('Resultado de agregar mensaje: ' + response ),
      (error) => console.log('Error al agragar mensaje: ' + error) 
    )
  }
  
}

