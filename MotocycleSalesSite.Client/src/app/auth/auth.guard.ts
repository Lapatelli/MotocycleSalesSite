import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private service: UserService) { }

  canActivate(next: ActivatedRouteSnapshot): boolean {
    if (localStorage.getItem('token') != null) {
      const roles = next.data['permittedRoles'] as Array<string>;
      if (roles) {
        if (this.service.roleMatch(roles)) {
          return true;
        }
        else {
          this.router.navigate(['/forbidden']);
          return false;
        }
      }
      else {
        return true;
      }
    }
    else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
