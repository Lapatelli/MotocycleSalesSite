import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Motocycles } from '../motocycle/motocycle';

@Injectable({
  providedIn: 'root'
})
export class MotocycleService {

  constructor(private fb:FormBuilder,private http:HttpClient) { }
readonly BaseURI='https://localhost:44372/api';

  getMotocyclesList():Observable<Motocycles[]>
  {
    return this.http.get<Motocycles[]>(this.BaseURI+'/motocycle');
  }
}