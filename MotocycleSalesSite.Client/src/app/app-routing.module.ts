import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { MotocycleComponent } from './motocycle/motocycle.component';
import { ListComponent } from './motocycle/list/list.component';
import { AddingComponent } from './motocycle/adding/adding.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'user',component:UserComponent, 
children: [
  {path: 'registration',component:RegistrationComponent},
  {path: 'login',component:LoginComponent}
  ]
},
{path:'user-profile',component: UserProfileComponent, canActivate:[AuthGuard]},
{path:'motocycle',component: MotocycleComponent, 
children:[
  {path: 'adding',component:AddingComponent, canActivate:[AuthGuard],data: {permittedRoles:['Admin']}},
  {path: 'list',component:ListComponent}
  ]
},
{path:'forbidden',component:ForbiddenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
