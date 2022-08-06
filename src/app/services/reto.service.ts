import { Injectable } from '@angular/core';
import { MenuItem } from '../interfaces/menuItem.interfaces';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class RetoService {

  constructor() { }


  menu():MenuItem[]{

   const  menuItem:MenuItem[] = [
                { nombre:'Home', ruta:'carreras/home',icon:'school' },
                { nombre:'Carreras', ruta:'carreras/carreras',icon:'calendar_month' },
      
          ]
   
   return menuItem;

  }


  getUsuario():Usuario{

    const miUusario:Usuario = { nombre:'DAVID MAZA ', nickname:'DAMAR', imagePath: '../../../assets/images/no-image.jpeg' }; 

    return miUusario;

  }
}
