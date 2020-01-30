import { Component, OnInit, } from '@angular/core';
import { MotocycleService } from '../shared/motocycle.service';
import { Motocycles } from '../motocycle/motocycle';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styles: []
})

export class AdminComponent implements OnInit {

  public motoCycle: Motocycles;
  public motolist$: Observable<Motocycles[]>;
  public MotoCycleId: number;
  public show = false;

  public editMotoFormModel = this.fb.group({
    Id: [''],
    Name: [''],
    Year: [''],
    Volume: [''],
    Cost: [''],
    Type: ['']
  });

  constructor(private service: MotocycleService, private toastr: ToastrService, private fb: FormBuilder) { }

  ngOnInit() {
    this.motolist$ = this.service.getMotocyclesList();
  }

  public onEditMotoAdvert(id: number): void {
    this.MotoCycleId = id;
    console.log(this.MotoCycleId);
    if (this.show === false) {
      this.show = true;
    }
    else {
      this.show = false;
    }
  }

  public onDeleteMotoAdvert(id: number): void {
    this.service.deleteMotoitem(id).subscribe(res => {
      this.toastr.error('Advertisement deleted successfully!', 'Delete Moto Advert');
    },
    err => {
      console.log(err);
    });
  }

  public onUpdate(id: number): void {
    this.service.editMotoitem(id, this.editMotoFormModel.value).subscribe(
      (res: any) => {
        console.log(res);
        this.toastr.warning('Advertisement edited successfully!', 'Edit Moto Advert');
        this.motolist$ = this.service.getMotocyclesList();
      }
    );
  }
}
