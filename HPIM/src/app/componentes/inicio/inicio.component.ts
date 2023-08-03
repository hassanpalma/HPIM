import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})


export class InicioComponent implements OnInit {

  ingenieria: boolean = true;
  mantenimiento: boolean = true;
  certificaciones: boolean = true;

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }


  inge(): void {
    if(this.ingenieria){
      this.ingenieria = false;
    }
    else{
      this.ingenieria = true
    }
  }


  mante(): void{
    if(this.mantenimiento){
      this.mantenimiento = false;
    }
    else{
      this.mantenimiento = true
    }
  }

  certi(): void{
    if(this.certificaciones){
      this.certificaciones = false;
    }
    else{
      this.certificaciones = true
    }
  }

}
