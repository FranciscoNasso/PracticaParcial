import { Component, Output, EventEmitter } from '@angular/core';
import { Auto } from '../IAuto';
import { AUTOS } from '../mock-auto';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modal-auto',
  templateUrl: './modal-auto.component.html',
  styleUrls: ['./modal-auto.component.css']
})
export class ModalAutoComponent {
  nuevoAutoImagen: string = '';
  nuevoAutoModelo: string = '';
  nuevoAutoDescripcion: string = '';
  nuevoAutoTipo: string = '';

  @Output() crearAuto = new EventEmitter<string>;
  @Output() cerrarModal: EventEmitter<void> = new EventEmitter<void>();

  constructor(private location: Location) { }
  guardar(): void {
    const nuevoAuto: Auto = {
      id: AUTOS.length + 1,
      imagen: this.nuevoAutoImagen,
      modelo: this.nuevoAutoModelo,
      descripcion: this.nuevoAutoDescripcion,
      tipo: this.nuevoAutoTipo
      };
      AUTOS.push(nuevoAuto);
  }

  cerrar(): void {
    this.location.back();
  }
}