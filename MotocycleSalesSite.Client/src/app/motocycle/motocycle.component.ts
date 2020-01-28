import { Component, OnInit } from '@angular/core';
import { Motocycles } from './motocycle';
import { Router } from '@angular/router';
import { MotocycleService } from '../shared/motocycle.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-motocycle',
  templateUrl: './motocycle.component.html',
  styles: []
})
export class MotocycleComponent implements OnInit {

  // motoCycleForDescribe$:Observable<Motocycles>;
  // show:boolean=true;

  constructor(private router:Router, private service:MotocycleService) { }

  ngOnInit() {
  }

  // onMotoCycleToDescribe(id){
  //   console.log(id);
  //   this.motoCycleForDescribe$=this.service.getMotocycleDescription(id);
  //   this.show=false;
  // }

}
