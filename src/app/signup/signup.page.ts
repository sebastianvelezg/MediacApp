import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage{

  registro={
    documentoIdentidad:'',
    password:'',
    nombre:'',
    apellido:'',
    correo:'',
    fecha:''
  };
  constructor() { }

  ngOnInit() {
  }
  registrarse(){

    
    
  }
}
