import { Injectable } from '@angular/core';
import { LoginI } from 'src/app/modelos/login.interface';
import { ResponseI } from 'src/app/modelos/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string="http://localhost/medicapp/"
  
  constructor(private http:HttpClient) { }

  loginByEmail(usuario:string , password:string):Observable<ResponseI>{
    let direccion = this.url + "iniciarSesion.php?"+"documentoIdentidad="+usuario+"&contrasena="+password;
    return this.http.get<ResponseI>(direccion);
  }
  registrar(usuario:string,nombre:string,apellido:string,correo:string, password:string,fechaNacimiento:Date):Observable<ResponseI>{

    let direccion = this.url + "registro.php?"+"documentoIdentidad=\""+ usuario + "\"" +"&nombre=\""+nombre+"\""+"&apellido=\""+apellido+"\""+"&correo=\""+correo+"\""+"&contrasena=\""+password+"\""+"&fechaNacimiento=\""+fechaNacimiento+"\"";
    return this.http.get<ResponseI>(direccion);
    
  }
}
