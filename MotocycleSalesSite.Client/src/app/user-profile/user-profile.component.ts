import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styles: []
})
export class UserProfileComponent implements OnInit {
  userDetails;

  constructor(private router:Router, private service:UserService) { }

  ngOnInit() {
    this.service.getUserProfile().subscribe(
      res=>{
        this.userDetails=res;
        
      },
      err=>{
        console.log(err);
      }
    );
  }

onCreateMotocycle(){
this.router.navigate(['/motocycle/adding']);
}
  
onLogout(){
localStorage.removeItem('token');
this.router.navigate(['/home']); 
}
}