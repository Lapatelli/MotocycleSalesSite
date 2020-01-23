import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MotocycleService} from 'src/app/shared/motocycle.service';

@Component({
  selector: 'app-adding',
  templateUrl: './adding.component.html',
  styles: []
})
export class AddingComponent implements OnInit {

  constructor(private router:Router, private service:MotocycleService) { }

  ngOnInit() {
    
  }
  
  onCreateMotocycle(){
    this.router.navigate(['/motocycle/adding']);
    }

  onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
    }  
}
