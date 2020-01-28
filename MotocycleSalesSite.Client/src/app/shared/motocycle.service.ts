import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Motocycles } from '../motocycle/motocycle';

@Injectable({
  providedIn: 'root'
})
export class MotocycleService {
MotocycleList:Motocycles[];


  constructor(private fb:FormBuilder,private http:HttpClient) { }
readonly BaseURI='https://localhost:44372/api';


formModel=this.fb.group({
  Id: [''],
  Name:[''],
  Description:[''],
  Year:[''],
  Volume:[''],
  Cost:[''],
  Type:[''] 
});

  createMotoAdvert():Observable<object>{
    var body={
      Id:0,
      Name: this.formModel.value.Name,
      Description: this.formModel.value.Description,
      Year: this.formModel.value.Year,
      Volume: this.formModel.value.Volume,
      Cost: this.formModel.value.Cost,
      Type: this.formModel.value.Type,
      };
      console.log(body);
  return  this.http.post<object>(this.BaseURI+'/motocycle/Create',body);
  }

  getMotocyclesList():Observable<Motocycles[]>
  {
    return this.http.get<Motocycles[]>(this.BaseURI+'/motocycle');
  }

  getMotocycleDescription(id):Observable<Motocycles>
  {
    return this.http.get<Motocycles>(this.BaseURI+'/motocycle/'+id);
  }

  deleteMotoitem(id:number)
  {
    console.log(id);
    return  this.http.delete(this.BaseURI+'/motocycle/'+id);
  }

  editMotoitem(id):Observable<object>
  {
    var body={
      Id:this.formModel.value.Id,
      Name: this.formModel.value.Name,
      Description:"Good",
      Year: this.formModel.value.Year,
      Volume: this.formModel.value.Volume,
      Cost: this.formModel.value.Cost,
      Type: this.formModel.value.Type,
      };

    return this.http.put<object>(this.BaseURI + '/motocycle/'+ id, body);
  }

  // refreshList(){
  //   this.http.get(this.BaseURI+'/motocycle')
  //   .toPromise()
  //   .then(res => this.MotocycleList = res as Motocycles[]);      
  // }
}