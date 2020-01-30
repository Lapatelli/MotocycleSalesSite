import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Motocycles } from '../motocycle/motocycle';
import { URLs } from './URLs';

@Injectable({
  providedIn: 'root'
})
export class MotocycleService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  public createMotoAdvert(newMoto: Motocycles): Observable<Motocycles> {
    console.log(newMoto);
    return this.http.post<Motocycles>(URLs.MotoCycleUrl + '/Create', newMoto);
  }

  public getMotocyclesList(): Observable<Motocycles[]> {
    return this.http.get<Motocycles[]>(URLs.MotoCycleUrl);
  }

  public getMotocycleDescription(id: number): Observable<Motocycles> {
    return this.http.get<Motocycles>(URLs.MotoCycleUrl + '/' + id);
  }

  public deleteMotoitem(id: number): Observable<any> {
    console.log(id);
    return  this.http.delete(URLs.MotoCycleUrl + '/' + id);
  }

  public editMotoitem(id: number, editMoto: Motocycles): Observable<Motocycles> {
    return this.http.put<Motocycles>(URLs.MotoCycleUrl + '/' + id, editMoto);
  }
}
