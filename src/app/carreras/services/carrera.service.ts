import { Injectable } from '@angular/core';
import { Carreras } from 'src/app/interfaces/carreras.interfaces';
import { delay, map, Observable, of } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  constructor() { }


  obtenerCarreras():Observable<Carreras[]>{

    const carreras:Carreras []= [
      { titulo: 'Ingeniería de Sistemas', tipo: 'Universitaria', campus: 'Barranquilla', metodologia: 'Presencial', iconMetodologia:'account_box', facultad: 'Ingeniería'  },
      { titulo: 'Ingeniería Industrial',  tipo: 'Universitaria', campus: 'Barranquilla', metodologia: 'Presencial', iconMetodologia:'account_box', facultad: 'Ingeniería'  },
      { titulo: 'Ingeniería Mecánica', tipo: 'Universitaria', campus: 'Barranquilla y Cúcuta', metodologia: 'Combinada (Presencial y Virtual', iconMetodologia:'tune', facultad: 'Ingeniería'  },
      { titulo: 'Ingeniería Quimica',  tipo: 'Universitaria', campus: 'Barranquilla', metodologia: 'Presencial', iconMetodologia:'account_box', facultad: 'Ingeniería'  },
      { titulo: 'Ingeniería Ambiental', tipo: 'Universitaria', campus: 'Barranquilla y Cúcuta', metodologia: 'Combinada (Presencial y Virtual', iconMetodologia:'tune', facultad: 'Ingeniería'  },
      { titulo: 'Economía',  tipo: 'Universitaria', campus: 'Barranquilla y Cúcuta', metodologia: 'Presencial', iconMetodologia:'account_box', facultad: 'Finanzas'  },
      { titulo: 'Administración de empresas', tipo: 'Universitaria', campus: 'Barranquilla', metodologia: 'Presencial', iconMetodologia:'account_box', facultad: 'Finanzas'  },
      { titulo: 'Idiomas',  tipo: 'Universitaria', campus: 'Barranquilla y Cúcuta', metodologia: 'Presencial', iconMetodologia:'account_box', facultad: 'Idiomas'  },
      { titulo: 'Negocios Internacionales', tipo: 'Universitaria', campus: 'Barranquilla', metodologia: 'Presencial', iconMetodologia:'account_box', facultad: 'Finanzas'  },
      { titulo: 'Arquitectura',  tipo: 'Universitaria', campus: 'Barranquilla y Cúcuta', metodologia: 'Combinada (Presencial y Virtual', iconMetodologia:'tune', facultad: 'Arquitectura'  },
      { titulo: 'Medicina', tipo: 'Universitaria', campus: 'Barranquilla', metodologia: 'Presencial', iconMetodologia:'account_box', facultad: 'Salud'  },
      { titulo: 'Derecho',  tipo: 'Universitaria', campus: 'Barranquilla y Cúcuta', metodologia: 'Combinada (Presencial y Virtual', iconMetodologia:'tune', facultad: 'Derecho'  },
      { titulo: 'Psicología', tipo: 'Universitaria', campus: 'Barranquilla', metodologia: 'Presencial', iconMetodologia:'account_box', facultad: 'Psicología'  },
      { titulo: 'Diseño Gráfico',  tipo: 'Universitaria', campus: 'Barranquilla', metodologia: 'Presencial', iconMetodologia:'account_box', facultad: 'Diseño'  },
      { titulo: 'Ingeniería Electrónica', tipo: 'Universitaria', campus: 'Barranquilla y Cúcuta', metodologia: 'Combinada (Presencial y Virtual', iconMetodologia:'tune', facultad: 'Ingeniería'  },
      { titulo: 'Enfermería',  tipo: 'Universitaria', campus: 'Barranquilla', metodologia: 'Presencial', iconMetodologia:'account_box', facultad: 'Salud'  },
      { titulo: 'Física', tipo: 'Universitaria', campus: 'Barranquilla y Cúcuta', metodologia: 'Combinada (Presencial y Virtual', iconMetodologia:'tune', facultad: 'Física'  },
      { titulo: 'Math',  tipo: 'Universitaria', campus: 'Barranquilla', metodologia: 'Presencial', iconMetodologia:'account_box', facultad: 'Math'  },
      
    ];

    return of(carreras);
  }

  getCarreras(){

    return this.obtenerCarreras()
        .pipe(
            delay(2000),
            map( carreras => {
              return carreras;
            }

            )
          )

  }
}

