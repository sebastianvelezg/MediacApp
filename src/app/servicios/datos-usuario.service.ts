import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosUsuarioService {
  private perfil: any = [];
  constructor() { 
    this.perfil={
      Nombre:'',
      Apellido:'',
      Correo:'',
      FechaNacimiento:'',
      Genero:'',
      Telefono:'',
      DocumentoIdentidad:'',
      Peso:'',
      Estatura:'',
      Alergia:'',
      Enfermedad:'',
      Eps:''
    }
  }
 
    setdatoUsuario(data:any){
      this.perfil=data 
        
      }
    getdatoUsuario(){
      return this.perfil;
    }
}
