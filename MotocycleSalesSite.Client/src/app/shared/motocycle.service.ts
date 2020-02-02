import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Motocycle } from '../motocycle/motocycle';
import { URLs } from './URLs';

@Injectable({
  providedIn: 'root'
})
export class MotocycleService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  public createMotoAdvert(newMoto: Motocycle): Observable<Motocycle> {
    return this.http.post<Motocycle>(URLs.MotoCycleUrl + '/Create', newMoto);
  }

  public getMotocyclesList(): Observable<Motocycle[]> {
    return this.http.get<Motocycle[]>(URLs.MotoCycleUrl);
  }

  public getMotocycleDescription(id: number): Observable<Motocycle> {
    return this.http.get<Motocycle>(URLs.MotoCycleUrl + '/' + id);
  }

  public deleteMotoitem(id: number): Observable<any> {
    return  this.http.delete(URLs.MotoCycleUrl + '/' + id);
  }

  public editMotoitem(id: number, editMoto: Motocycle): Observable<Motocycle> {
    return this.http.put<Motocycle>(URLs.MotoCycleUrl + '/' + id, editMoto);
  }
}
