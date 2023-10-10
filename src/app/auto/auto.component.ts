import { Component, OnInit } from '@angular/core';
import { Auto } from '../IAuto';
import { AutoService } from '../auto-service';



@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit{
  Autos: Auto[] = [];
  autoSeleccionado?: Auto;
  eliminarAuto?: Auto;

  constructor(private autoService: AutoService) { }

  showModal: boolean = false;

  ngOnInit(): void {
    this.getAutos();
  }

  getAutos(): void {
    this.autoService.getAutos().
    subscribe(Autos => this.Autos = Autos);
  }

  onSelectedAuto(auto: Auto): void {
    this.autoSeleccionado = auto;
  }
  onEliminarAuto(auto: Auto): void {
    this.autoService.eliminar(auto).subscribe(auto => {});
  }

}
