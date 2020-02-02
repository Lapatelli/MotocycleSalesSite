import { Component, OnInit, } from '@angular/core';
import { MotocycleService } from '../shared/motocycle.service';
import { Motocycle } from '../motocycle/motocycle';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styles: []
})
export class AdminComponent implements OnInit {

  public motoCycle: Motocycle;
  public motolist$: Observable<Motocycle[]>;
  public MotoCycleId: number;
  public show = false;
  public editMotoFormModel: any;

  constructor(private service: MotocycleService, private toastr: ToastrService, private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.editMotoFormModel = this.fb.group({
      Id: [''],
      Name: [''],
      Year: [''],
      Volume: [''],
      Cost: [''],
      Type: ['']
    });

    this.motolist$ = this.service.getMotocyclesList();
  }

  public onEditMotoAdvert(id: number): void {
    this.MotoCycleId = id;

    this.show = this.show === false;
  }

  public onDeleteMotoAdvert(id: number): void {
    this.service.deleteMotoitem(id).subscribe(res =>
      this.toastr.error('Advertisement deleted successfully!', 'Delete Moto Advert'),
    err =>
      console.log(err)
    );
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
