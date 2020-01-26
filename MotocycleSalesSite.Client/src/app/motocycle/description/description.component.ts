import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MotocycleService} from 'src/app/shared/motocycle.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styles: []
})
export class DescriptionComponent implements OnInit {

  constructor(private router:Router, private service:MotocycleService) { }

  ngOnInit() {
  }

  onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
    } 
}
