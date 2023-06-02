import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HabitacionesService {

  public url:string="https://pruegaapi20231.vercel.app"

  constructor(public servicioHabitacion:HttpClient){}
   
  public buscarHabitaciones():Observable<any>{
    let urlServicio:string=this.url+"buscarhabitaciones"
      return this.servicioHabitacion.get(urlServicio)
  }

  public registrarHabitacion(datos:any):Observable<any>{
    let urlServicio:string=this.url+"buscarhabitaciones"
    return this.servicioHabitacion.post(urlServicio, datos)
  }

  public buscarHabitacion(){}
  public crearHabitacion(){}
  public editarHabitacion(){}

  }
