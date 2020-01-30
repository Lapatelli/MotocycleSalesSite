import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  public isAuthenticated: boolean;
  public isAdminAuthenticated: boolean;

  constructor(private router: Router, private service: UserService) { }

  ngOnInit() {
    if (localStorage.getItem('token') != null) {
      if (this.service.roleMatch(['Admin'])) {
        return this.isAdminAuthenticated = true;
      }
      else {
        return this.isAuthenticated = true;
      }
    }
    else {
      return this.isAuthenticated = false;
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
    this.isAuthenticated = false;
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
