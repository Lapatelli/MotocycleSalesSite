import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}

onCreateMotocycle(){
this.router.navigate(['/motocycle/adding']); //logic for Guard auth!
}
  
onLogin(){
localStorage.removeItem('token');
this.router.navigate(['/user/login']); 
}
}
