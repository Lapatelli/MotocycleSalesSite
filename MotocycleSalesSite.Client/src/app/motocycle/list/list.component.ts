import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MotocycleService } from 'src/app/shared/motocycle.service';
import{Motocycles} from '../motocycle';
import { parse } from 'querystring';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {
  motoCycle:Motocycles;
  motolist$:Observable<Motocycles[]>
  
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

  onOpenDescription(){
    this.router.navigate(['/motocycle/description']);
  }
}

