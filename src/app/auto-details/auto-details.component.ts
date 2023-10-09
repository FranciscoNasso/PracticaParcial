import { Component, OnInit, Input  } from '@angular/core';
import { Auto } from '../IAuto';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AutoService } from '../auto-service';



@Component({
  selector: 'app-auto-details',
  templateUrl: './auto-details.component.html',
  styleUrls: ['./auto-details.component.css']
})
export class AutoDetailsComponent {
  @Input() auto?: Auto;

  

  constructor(
    private route: ActivatedRoute,
    private autoService: AutoService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.autoService.getAuto(id)
      .subscribe(auto => this.auto = auto);
  }

  goBack(): void {
    this.location.back();
  }

}
