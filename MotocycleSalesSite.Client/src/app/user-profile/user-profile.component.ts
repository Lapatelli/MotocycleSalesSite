import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { Observable } from 'rxjs';
import { UserProfile } from './user-profile';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styles: []
})
export class UserProfileComponent implements OnInit {
  //userDetails;
  userDetails$:Observable<UserProfile>;
  userprofile;


  constructor(private router:Router, private service:UserService) { }

  ngOnInit() {
    this.userDetails$=this.service.getUserProfile();
    console.log(this.userDetails$);
    this.userprofile=this.userDetails$;     
      //   console.log(res);
      //   this.userDetails=res;
        
      // },
      // err=>{
      //   console.log(err);
      // });
}

onCreateMotocycle(){
this.router.navigate(['/motocycle/adding']);
}
  
onLogout(){
localStorage.removeItem('token');
this.router.navigate(['/home']); 
}
}