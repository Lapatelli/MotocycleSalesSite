import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MotocycleService } from 'src/app/shared/motocycle.service';
import{Motocycles} from '../motocycle';
import { Observable } from 'rxjs';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {
  motoCycle:Motocycles;
  motolist$:Observable<Motocycles[]>;
  @Output() onMotoCycleToDescribe=new EventEmitter<Motocycles>();
  
  constructor(private router:Router, private service:MotocycleService) {}

  ngOnInit() {
    this.motolist$=this.service.getMotocyclesList();
    
      // res=>{
      //   this.listMotocycles=res;

      //     console.log(res);

    //     // this.listMotocycles=res;
    //     // console.log(this.listMotocycles);                                      
    //   },
    //   err=>{
    //     console.log(err);
    //   }
    // );
  }
  
  onDescribe(id)
  {
    this.onMotoCycleToDescribe.emit(id);
    // console.log(motocycle);
  }
}

