import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MotocycleService} from 'src/app/shared/motocycle.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-addmoto',
  templateUrl: './addmoto.component.html',
  styles: []
})
export class AddmotoComponent implements OnInit {

  public newMotoFormModel: any;

  constructor(private router: Router, private service: MotocycleService, private toastr: ToastrService, private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.newMotoFormModel = this.fb.group({
      Name: [''],
      Description: [''],
      Year: [''],
      Volume: [''],
      Cost: [''],
      Type: ['']
    });

    this.newMotoFormModel.reset();
  }

  public onCreate(): void {
    this.service.createMotoAdvert(this.newMotoFormModel.value)
      .subscribe((res: any) => {
        if (res.succeeded) {
          console.log('ok');
        }
      },
      err =>
        console.log(err)
      );
    this.newMotoFormModel.reset();
    this.toastr.success('New advert created!', 'Registration successful.');
  }
}
