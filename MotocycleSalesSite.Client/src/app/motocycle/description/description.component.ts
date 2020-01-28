import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {MotocycleService} from 'src/app/shared/motocycle.service';
import { Motocycles } from '../motocycle';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styles: []
})
export class DescriptionComponent implements OnInit {


@Input()
motoDescription$: Observable<Motocycles>;

  constructor(private router:Router, private service:MotocycleService) { }

  ngOnInit() {
  }


  onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
    } 
}
