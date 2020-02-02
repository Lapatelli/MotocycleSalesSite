import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  public isUserAuthenticated: boolean;
  public isAdminAuthenticated: boolean;

  constructor(private router: Router, private service: UserService) { }

  public ngOnInit(): boolean {
    if (localStorage.getItem('token') != null) {
      if (this.service.roleMatch(['Admin'])) {
        return this.isAdminAuthenticated = true;
      }
      else {
        return this.isUserAuthenticated = true;
      }
    }
    else {
      return this.isUserAuthenticated = false;
    }
  }

  public onGotoAdminPanel(): void {
    this.router.navigateByUrl('/admin');
  }

  public onLogin(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }

  public onLogout(): void {
    localStorage.removeItem('token');
    this.isUserAuthenticated = false;
    this.isAdminAuthenticated = false;
    this.router.navigate(['/home']);
  }

  public onProfileUser(): void {
    this.router.navigate(['/user-profile']);
  }

  public onCreateMotocycle(): void {
    this.router.navigateByUrl('/addmoto');
  }
}
