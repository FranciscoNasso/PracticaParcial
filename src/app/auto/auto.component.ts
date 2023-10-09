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

  constructor(private autoService: AutoService) { }

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



}
