import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MotocycleService } from 'src/app/shared/motocycle.service';
import { Motocycle } from '../motocycle';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {

  public motolist$: Observable<Motocycle[]>;

  constructor(private router: Router, private service: MotocycleService) {}

  public ngOnInit(): void {
    this.motolist$ = this.service.getMotocyclesList();
  }

  public onDescribe(id: number): void {
    this.router.navigateByUrl('/motocycle/description/' + id);
  }
}

