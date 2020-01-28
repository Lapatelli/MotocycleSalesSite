import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
isAuthenticated:boolean;

  constructor(private router:Router) { }

  ngOnInit() {
    if(localStorage.getItem('token')!=null){
      return this.isAuthenticated=true;
    }
    else  
    return this.isAuthenticated=false;
  }


onLogin(){
localStorage.removeItem('token');
this.router.navigate(['/user/login']); 
}

onLogout(){
  localStorage.removeItem('token');
  this.isAuthenticated=false;
  this.router.navigate(['/home']); 
  }

  onProfileUser(){
    this.router.navigate(['/user-profile']); 
  }  
}



