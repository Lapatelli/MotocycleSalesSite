import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserProfile } from '../user-profile/user-profile';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb:FormBuilder,private http:HttpClient) { }
readonly BaseURI='https://localhost:44372/api';


  formModel=this.fb.group({
    UserName:['',Validators.required],
    Email:['',Validators.email],
    FullName:[''],
    Passwords: this.fb.group({
      Password:['',[Validators.required, Validators.minLength(4)]],
      ConfirmPassword:['',Validators.required],
    },{validator : this.comparePasswords })
  });

  comparePasswords(fb:FormGroup){
    let confirmPswrdCtrl=fb.get('ConfirmPassword');
    //passwordMismatch
    //confirmPswrdCtrl.errors={passwordMismatch:true}  
    if(confirmPswrdCtrl.errors==null || 'passwordMissmatch' in confirmPswrdCtrl.errors){
      if(fb.get('Password').value!=confirmPswrdCtrl.value)
      confirmPswrdCtrl.setErrors({passwordMismatch:true});
      else 
      confirmPswrdCtrl.setErrors(null);
    }
  }

  register(){
    var body={
      UserName: this.formModel.value.UserName,
      Email: this.formModel.value.Email,
      FullName: this.formModel.value.FullName,
      Password: this.formModel.value.Passwords.Password,
      };
      console.log(body);
  return  this.http.post(this.BaseURI+'/account/Register',body);
  }

  login(formData){
    return  this.http.post(this.BaseURI+'/account/Login',formData);
  }

  getUserProfile():Observable<UserProfile>
  {
    return this.http.get<UserProfile>(this.BaseURI+'/account/UserProfile');
  } 

  roleMatch(allowedRoles): boolean {
    var isMatch = false;
    var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    var userRole = payLoad.role;
    console.log(payLoad.role); //log for searching Role
    allowedRoles.forEach(element => {
      if (userRole == element) {
        isMatch = true;
        return false;
      }
    });
    return isMatch;
  }
}
