import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/interfaces/menuItem.interfaces';
import { RetoService } from 'src/app/services/reto.service';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  private _menuItem!:MenuItem[];

  get menuItem():MenuItem[]{

    return [...this._menuItem]; 
  }

  constructor(private retoServie:RetoService) { }

  ngOnInit(): void {

    this._menuItem = this.retoServie.menu();

  }

}
