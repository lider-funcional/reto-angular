import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../interfaces/menuItem.interfaces';
import { RetoService } from '../../services/reto.service';
import { Usuario } from '../../interfaces/usuario.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private _menuItem!:MenuItem[];

  private _usuario!:Usuario; 

  get menuItem():MenuItem[]{

    return [... this._menuItem];
  }

  get usuario():Usuario{

    return this._usuario; 
  }

  constructor(private retoService: RetoService) { }

  ngOnInit(): void {

    this._menuItem = this.retoService.menu();

    this._usuario = this.retoService.getUsuario(); 
  }

}
