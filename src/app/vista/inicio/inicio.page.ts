import { Component, OnInit } from '@angular/core';
import { NavController,NavParams } from '@ionic/angular';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Tab1Page } from 'MediacApp/src/app/tab1/tab1.page';
import { Router } from '@angular/router';
import { DatosUsuarioService } from 'src/app/servicios/datos-usuario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  
  loginForm = new FormGroup({
    usuario: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })

  usuario={
    documentoIdentidad:'',
    password:''
  };
  constructor(private api:ApiService,private router:Router,private datoUsuario:DatosUsuarioService) { }

  ngOnInit() {
  }
  onSubmit(){
    this.api.loginByEmail(this.usuario.documentoIdentidad,this.usuario.password).subscribe(data=> {
      console.log(data)
      if(data.result=='0'){
        alert("acceso denegado, documento, contraseña incorrectas o el usuario no existe")
      }else {
        this.router.navigate(['/tab3'])
        this.datoUsuario.setdatoUsuario(data.result);
      }

    })
  
    
  }
}
