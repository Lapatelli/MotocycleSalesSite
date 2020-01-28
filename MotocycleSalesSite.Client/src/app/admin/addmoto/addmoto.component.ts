import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MotocycleService} from 'src/app/shared/motocycle.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Motocycles } from 'src/app/motocycle/motocycle';

@Component({
  selector: 'app-addmoto',
  templateUrl: './addmoto.component.html',
  styles: []
})
export class AddmotoComponent implements OnInit {

  constructor(private router:Router, private service:MotocycleService, private toastr:ToastrService) { }

  ngOnInit() {
    this.service.formModel.reset();   
  }

  onCreate(){
    this.service.createMotoAdvert()
    .subscribe((res:any)=>{
        if(res.succeeded){
          console.log('ok');
        }
      },
      err=>{
        console.log(err);
      }
    );
    this.service.formModel.reset();
    this.toastr.success('New advert created!','Registration successful.');
  }

  onGotoAdminPanel(){
    this.router.navigateByUrl('/admin');
    }

  onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/home']); 
    }
}
