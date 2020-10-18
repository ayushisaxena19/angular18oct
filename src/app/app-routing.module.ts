import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent} from './register/register.component';
import { LoginComponent} from './login/login.component';
import { RegularComponent} from './regular/regular.component';
import { SpecialComponent} from './special/special.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'',
   redirectTo: '/regular',
    pathMatch:'full'},
  {path:'regular',component: RegularComponent},
  {path:'special',component: SpecialComponent,
canActivate: [AuthGuard]},
  {path:'register',component: RegisterComponent},
  {path:'login',component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
