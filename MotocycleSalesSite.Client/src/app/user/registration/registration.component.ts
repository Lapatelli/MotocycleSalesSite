import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: []
})
export class RegistrationComponent implements OnInit {

  public newUserFormModel: any;

  constructor(public service: UserService, private toastr: ToastrService, private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.newUserFormModel = this.fb.group({
      UserName: ['', Validators.required],
      Email: ['', Validators.email],
      FullName: [''],
      Passwords: this.fb.group({
        Password: ['', [Validators.required, Validators.minLength(4)]],
        ConfirmPassword: ['', Validators.required],
      },
        {validator : this.comparePasswords }
      )
    });

    this.newUserFormModel.reset();
  }

  public comparePasswords(fb: FormGroup): void {
    const confirmPswrdCtrl = fb.get('ConfirmPassword');
    if (confirmPswrdCtrl.errors == null || 'passwordMissmatch' in confirmPswrdCtrl.errors) {
      const error = fb.get('Password').value === confirmPswrdCtrl.value ? null : {passwordMismatch: true};
      confirmPswrdCtrl.setErrors(error);
    }
  }

  public onSubmit(): void {

    const newUser = {
      UserName: this.newUserFormModel.value.UserName,
      Email: this.newUserFormModel.value.Email,
      FullName: this.newUserFormModel.value.FullName,
      Password: this.newUserFormModel.value.Passwords.Password,
    };

    this.service.register(newUser).subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.newUserFormModel.reset();
          this.toastr.success('New user created!', 'Registration successful.');
        }
        else {
          res.errors.forEach(element => {
            switch (element.code) {
              case 'DuplicateUserName': {
                this.toastr.error('User is already taken', 'Registration failed!');
                break;
              }
              default: {
                this.toastr.error(element.description, 'Registration failed!');
                break;
              }
            }
          });
        }
      },
      err => console.log(err)
    );
  }
}
