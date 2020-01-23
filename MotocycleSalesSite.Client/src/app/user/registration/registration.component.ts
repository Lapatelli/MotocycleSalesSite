import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: []
})
export class RegistrationComponent implements OnInit {

  constructor(public service:UserService,private toastr:ToastrService) { }

  ngOnInit() {
    this.service.formModel.reset();
  }

  onSubmit(){
    this.service.register().subscribe(
      (res:any)=>{
        if(res.succeeded){
          this.service.formModel.reset();
          console.log('ok');
          this.toastr.success('New user created!','Registration successful.');
        }
        else{
          res.errors.forEach(element => {         
            switch (element.code){
              case 'DuplicateUserName':
                this.toastr.error('User is already taken','Registration failed!');
                //Username is already taken
                break;

              default:
                this.toastr.error(element.description,'Registration failed!');
                //Registration is failed
                break;
            }    
          });
        }
      },
      err=>{
        console.log(err);
      }
    );
  }
}
