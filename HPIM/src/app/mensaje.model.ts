export class Mensaje{
  nombre: string = '';
  telefono: number;
  email: string = '';
  asunto: string = '';
  mensaje: string = ''

  constructor (nombre: string, telefono: number, email: string, asunto: string, mensaje: string){
    this.nombre = nombre;
    this.telefono = telefono;
    this.email = email;
    this.asunto = asunto;
    this.mensaje = mensaje;

  }
}




