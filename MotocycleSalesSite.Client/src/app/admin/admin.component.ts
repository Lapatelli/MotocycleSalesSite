import { Component, OnInit, EventEmitter } from '@angular/core';
import { MotocycleService } from '../shared/motocycle.service';
import { Router } from '@angular/router';
import { Motocycles } from '../motocycle/motocycle';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styles: []
})
export class AdminComponent implements OnInit {
  motoCycle:Motocycles;
  motolist$:Observable<Motocycles[]>;
  refreshlist$:Observable<Motocycles[]>;
  deleteMotoItem$:Observable<object>;
  editMotoADvert$:Observable<object>;
  MotoCycleId:number=0;
  show:boolean=false;
  
  constructor(private router:Router, private service:MotocycleService, private toastr:ToastrService) { }


  ngOnInit() {  
    this.motolist$=this.service.getMotocyclesList();
  }

  onCreateMotocycle(){
    this.router.navigateByUrl('/addmoto'); 
    }


    onEditMotoAdvert(id)
    {
      this.MotoCycleId=id;
      console.log(this.MotoCycleId);
      if(this.show==false){
        this.show=true;
      }
      else{
        this.show=false;
    }
    }
    
    onDeleteMotoAdvert(id){
      this.service.deleteMotoitem(id).subscribe(res=>{
        this.toastr.error('Advertisement deleted successfully!','Delete Moto Advert');
      },err=>{
        console.log(err);
      });
    }

    onUpdate(id){
      this.service.editMotoitem(id).subscribe(
        (res:any)=>{
          this.toastr.warning('Advertisement edited successfully!','Edit Moto Advert');
          this.motolist$=this.service.getMotocyclesList();
          });
    }

    onGotoAdminPanel(){
      this.router.navigateByUrl('/admin');
      }

    
    onLogout(){
      localStorage.removeItem('token');
      this.router.navigate(['/home']); 
      }

}
