import { Component, OnInit } from '@angular/core';
import { NumericValueAccessor } from '@ionic/angular';

@Component({
  selector: 'app-triaje',
  templateUrl: './triaje.page.html',
  styleUrls: ['./triaje.page.scss'],
})
export class TriajePage implements OnInit {
  primeraPregunta:any
  segundaPregunta:any
  terceraPregunta:any
  cuartaPregunta:any
  quintaPregunta:any
  sextaPregunta:any
  septimaPregunta:any
  octavaPregunta:any
  acum:number = 0
  formularios=[{
      respuesta:{
        A:"Fiebre o escalofríos",
        B:"Tos",
        C:"Dificultad para respirar (sentir que le falta el aire)",
        D:"Fatiga" 
      }
    },
    
    {
      respuesta:{
        A:"Hace un día",
        B:"Hace tres días ",
        C:"Hace Una semana",
        D:"Hace más de dos semanas"  
      }
      
    },
    {
      respuesta:{
        A:"Si",
        B:"No" 
      }

    },
    {
      respuesta:{
        A:"Hipertensión",
        B:"Diabetes",
        C:"Es inmunosuprimido",
        D:"Hace más de dos semanas"
      }
      
    },
    {
      respuesta:{
        A:"< 36.5",
        B:"36.5",
        C:">36.5",
      }

    },
    {
      respuesta:{
        A:"< 120/80",
        B:"120/80-130/85",
        C:"140/90-159/99",
      }

    },
    {
      respuesta:{
        A:"< 36.5",
        B:"36.5",
        C:">36.5",
      }
    },
    {
      respuesta:{
        A:"si",
      B:"no"
      }
  
    }
      
  ]
  constructor() { 
    
  }

  ngOnInit() {
  }
  setPrimeraPregunta(){
    console.log(Number(this.primeraPregunta))
    this.acum=this.acum  + Number(this.primeraPregunta)
    console.log(this.acum)
  }
  setSegundaPregunta(){
    console.log(this.segundaPregunta)
    this.acum=this.acum+Number(this.segundaPregunta)
    console.log(this.acum)
  }
  setTerceraPregunta(){
    console.log(this.terceraPregunta)
    this.acum=this.acum+Number(this.terceraPregunta)
    console.log(this.acum)
  }
  setCuartaPregunta(){
    console.log(this.cuartaPregunta)
    this.acum=this.acum+Number(this.cuartaPregunta)
    console.log(this.acum)
  }
  setQuintaPregunta(){
    console.log(this.quintaPregunta)
    this.acum=this.acum+Number(this.quintaPregunta)
    console.log(this.acum)
  }
  setSextaPregunta(){
    console.log(this.sextaPregunta)
    this.acum=this.acum+Number(this.sextaPregunta)
    console.log(this.acum)
  }
  setSeptimaPregunta(){
    console.log(this.septimaPregunta)
    this.acum=this.acum+Number(this.septimaPregunta)
    console.log(this.acum)
  }
  setOctavaPregunta(){
    console.log(this.octavaPregunta)
    this.acum=this.acum+Number(this.octavaPregunta)
    console.log(this.acum)
  }
  resultado(){
    if(this.acum>=35){
      alert("Necesita ir a un hospital")
    }else if((this.acum<35)&&(this.acum>=25)){
      alert("Debes estar pendiente a tu salud y a nuevos sintomas")
    }else{
      alert("No necesitas servicios de salud")
    }
  }
}
