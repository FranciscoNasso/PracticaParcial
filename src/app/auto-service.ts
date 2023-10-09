import { AUTOS } from './mock-auto';
import { Auto } from './IAuto';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AutoService {
    getAutos(): Observable<Auto[]> {
        const Autos = of(AUTOS);
        return Autos;
    }

    getAuto(id: number): Observable<Auto | undefined> {
        return of(AUTOS.find(auto => auto.id === id));
    }

}