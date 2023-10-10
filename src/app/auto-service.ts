import { AUTOS } from './mock-auto';
import { Auto } from './IAuto';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AutoService {
    getAutos(): Observable<Auto[]> {
        const Autos = of(AUTOS);
        return Autos;
    }

    eliminar(auto: Auto): Observable<Auto> {
        const index = AUTOS.findIndex(a => a.id === auto.id);
        if (index >= 0) {
            AUTOS.splice(index, 1);
            return of(auto);
        }
        return throwError(`Auto with id ${auto.id} not found`);
    }

}
