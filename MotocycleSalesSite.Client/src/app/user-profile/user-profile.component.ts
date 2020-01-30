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

  public userDetails$: Observable<UserProfile>;

  constructor(private router: Router, private service: UserService) { }

  ngOnInit() {
    this.userDetails$ = this.service.getUserProfile();
  }
}
