import { Component, OnInit } from '@angular/core';

import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ApiService } from 'src/app/servicios/api/api.service';

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
  constructor(private api:ApiService) { }

  ngOnInit() {
  }
  onSubmit(){
    this.api.loginByEmail(this.usuario.documentoIdentidad,this.usuario.password).subscribe(data=> {
      console.log(data)
    })
    
    
  }
}
