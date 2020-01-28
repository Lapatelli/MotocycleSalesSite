import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MotocycleService} from 'src/app/shared/motocycle.service';
import { Motocycles } from '../motocycle';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styles: []
})
export class DescriptionComponent implements OnInit {

id:number;
motoCycleForDescribe$:Observable<Motocycles>;
// @Input()
// motoDescription$: Observable<Motocycles>;

  constructor(private router:Router, private service:MotocycleService, private activateRoute: ActivatedRoute) {
    this.id = activateRoute.snapshot.params['id'];
    console.log(this.id);
   }

  ngOnInit() {
    this.motoCycleForDescribe$=this.service.getMotocycleDescription(this.id);
    console.log('go');

  }

  onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
    } 
}
