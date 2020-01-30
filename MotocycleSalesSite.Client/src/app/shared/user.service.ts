import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserProfile } from '../user-profile/user-profile';
import { URLs } from './URLs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  public register(newUser): Observable<any> {
    return this.http.post(URLs.UserUrl + 'Register', newUser);
  }

  public login(loginUser): Observable<any> {
    return  this.http.post(URLs.UserUrl + 'Login', loginUser);
  }

  public getUserProfile(): Observable<UserProfile> {
    return this.http.get<UserProfile>(URLs.UserUrl + 'UserProfile');
  }

  public roleMatch(allowedRoles: Array<string>): boolean {
    let isMatch = false;
    const payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    const userRole = payLoad.role;
    allowedRoles.forEach(element => {
      if (userRole === element) {
        isMatch = true;
        return false;
      }
    });
    return isMatch;
  }
}
