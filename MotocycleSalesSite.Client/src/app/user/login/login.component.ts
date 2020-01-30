import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  public loginUserFormModel = this.fb.group({
    Username: [''],
    Password: [''],
    });

  constructor(private service: UserService, private router: Router, private toastr: ToastrService, private fb: FormBuilder) { }

  ngOnInit() {
    if (localStorage.getItem('token') != null) {
    this.router.navigateByUrl('/home');
    }
  }

  public onSubmit(): void {
    this.service.login(this.loginUserFormModel.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/home');
      },
      err => {
        if (err.status === 400) {
          this.toastr.error('Incorrect username or password!', 'Authentication failed.');
        }
        else {
          console.log(err);
        }
      }
    );
  }
}
