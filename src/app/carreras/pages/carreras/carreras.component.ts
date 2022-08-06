import { Component, OnInit } from '@angular/core';
import { Carreras } from 'src/app/interfaces/carreras.interfaces';
import { CarreraService } from '../../services/carrera.service';

@Component({
  selector: 'app-carreras',
  templateUrl: './carreras.component.html',
  styleUrls: ['./carreras.component.css']
})
export class CarrerasComponent implements OnInit {

  private _carreras:Carreras[] = []; 

  // carreras:Carreras []= [
  //   { titulo: 'Ingeniería de Sistemas', tipo: 'Universitaria', campus: 'Barranquilla', metodologia: 'Presencial'  },
  //   { titulo: 'Ingeniería Industrial',  tipo: 'Universitaria', campus: 'Barranquilla', metodologia: 'Presencial'  },
  //   { titulo: 'Ingeniería de Sistemas', tipo: 'Universitaria', campus: 'Barranquilla', metodologia: 'Presencial'  },
  //   { titulo: 'Ingeniería Industrial',  tipo: 'Universitaria', campus: 'Barranquilla', metodologia: 'Presencial'  },
  //   { titulo: 'Ingeniería de Sistemas', tipo: 'Universitaria', campus: 'Barranquilla', metodologia: 'Presencial'  },
  //   { titulo: 'Ingeniería Industrial',  tipo: 'Universitaria', campus: 'Barranquilla', metodologia: 'Presencial'  },
  //   { titulo: 'Ingeniería de Sistemas', tipo: 'Universitaria', campus: 'Barranquilla', metodologia: 'Presencial'  },
  //   { titulo: 'Ingeniería Industrial',  tipo: 'Universitaria', campus: 'Barranquilla', metodologia: 'Presencial'  },
  //   { titulo: 'Ingeniería de Sistemas', tipo: 'Universitaria', campus: 'Barranquilla', metodologia: 'Presencial'  },
  //   { titulo: 'Ingeniería Industrial',  tipo: 'Universitaria', campus: 'Barranquilla', metodologia: 'Presencial'  },
  //   { titulo: 'Ingeniería de Sistemas', tipo: 'Universitaria', campus: 'Barranquilla', metodologia: 'Presencial'  },
  //   { titulo: 'Ingeniería Industrial',  tipo: 'Universitaria', campus: 'Barranquilla', metodologia: 'Presencial'  },
  //   { titulo: 'Ingeniería de Sistemas', tipo: 'Universitaria', campus: 'Barranquilla', metodologia: 'Presencial'  },
  //   { titulo: 'Ingeniería Industrial',  tipo: 'Universitaria', campus: 'Barranquilla', metodologia: 'Presencial'  },
  //   { titulo: 'Ingeniería de Sistemas', tipo: 'Universitaria', campus: 'Barranquilla', metodologia: 'Presencial'  },
  //   { titulo: 'Ingeniería Industrial',  tipo: 'Universitaria', campus: 'Barranquilla', metodologia: 'Presencial'  },
  //   { titulo: 'Ingeniería de Sistemas', tipo: 'Universitaria', campus: 'Barranquilla', metodologia: 'Presencial'  },
  //   { titulo: 'Ingeniería Industrial',  tipo: 'Universitaria', campus: 'Barranquilla', metodologia: 'Presencial'  },
    
  // ]; 

  get carreras() {

    return this._carreras;
  }


  constructor(private carreraService:CarreraService) { }

  ngOnInit(): void {

    this.carreraService.getCarreras()
      .subscribe(carreras => {
        this._carreras = carreras;
      });

  }

}
