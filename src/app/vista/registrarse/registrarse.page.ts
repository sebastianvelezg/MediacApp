import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api/api.service';
@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {
  fecha: Date =new Date();
  registro={
    documentoIdentidad:'',
    password:'',
    nombre:'',
    apellido:'',
    correo:'',
    
  };
  constructor(private api:ApiService,private router: Router) { }

  ngOnInit() {
  }
  registrarse(){
    this.api.registrar(this.registro.documentoIdentidad,this.registro.nombre,this.registro.apellido,this.registro.correo,this.registro.password,this.fecha).subscribe(data=> {
      console.log(data)
      if(data.result=='0'){
        alert('usuario con el documento de identidad registrado')
      }else {
        this.router.navigate(['/inicio'])
      }
    })
  
    }
  }


