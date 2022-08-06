import { Component, Input, OnInit } from '@angular/core';
import { Carreras } from '../../interfaces/carreras.interfaces';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {


  @Input() carrera!: Carreras; 

  constructor() { }

  ngOnInit(): void {
  }

}
