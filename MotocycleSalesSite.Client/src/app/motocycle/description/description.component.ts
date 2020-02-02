import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MotocycleService} from 'src/app/shared/motocycle.service';
import { Motocycle } from '../motocycle';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styles: []
})
export class DescriptionComponent implements OnInit {

  public id: number;
  public motoCycleForDescribe$: Observable<Motocycle>;

  constructor(private service: MotocycleService, private activateRoute: ActivatedRoute) {}

  public ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.motoCycleForDescribe$ = this.service.getMotocycleDescription(this.id);
  }
}
