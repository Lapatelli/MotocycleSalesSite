import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MotocycleService } from 'src/app/shared/motocycle.service';
import {Motocycles} from '../motocycle';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})

export class ListComponent implements OnInit {

  public motoCycle: Motocycles;
  public motolist$: Observable<Motocycles[]>;

  constructor(private router: Router, private service: MotocycleService) {}

  ngOnInit() {
    this.motolist$ = this.service.getMotocyclesList();
  }

  public onDescribe(id: number): void {
    this.router.navigateByUrl('/motocycle/description/' + id);
    console.log(id);
  }
}

