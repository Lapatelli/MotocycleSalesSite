import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MotocycleService {

  constructor(private fb:FormBuilder,private http:HttpClient) { }
readonly BaseURI='https://localhost:44372/api';

//   getUserProfile()
//   {
//     return this.http.get(this.BaseURI+'/account/UserProfile');
//   }
}