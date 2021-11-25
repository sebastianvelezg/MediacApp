import { Component } from '@angular/core';
import { DatosUsuarioService } from '../servicios/datos-usuario.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public perfil: any = [];
  constructor(private datoUsuario:DatosUsuarioService) {
    this.perfil= this.datoUsuario.getdatoUsuario()
  }

}
