import { Component, OnInit, Input  } from '@angular/core';
import { Auto } from '../IAuto';



@Component({
  selector: 'app-auto-details',
  templateUrl: './auto-details.component.html',
  styleUrls: ['./auto-details.component.css']
})
export class AutoDetailsComponent {
  @Input() auto?: Auto;

}
