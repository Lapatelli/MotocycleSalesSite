import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MotocycleService} from 'src/app/shared/motocycle.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adding',
  templateUrl: './adding.component.html',
  styles: []
})
export class AddingComponent implements OnInit {

  constructor(private router:Router, private service:MotocycleService, private toastr:ToastrService) { }

  ngOnInit() {
    this.service.formModel.reset();    
  }
  
  onSubmit(){
    this.service.createMotoAdvert().subscribe(
      (res:any)=>{
        if(res.succeeded){
          this.service.formModel.reset();
          console.log('ok');
          this.toastr.success('New advert created!','Registration successful.');
        }
        else{
                //Registration is failed                        
        }
      },
      err=>{
        console.log(err);
      }
    );
  } 
}
