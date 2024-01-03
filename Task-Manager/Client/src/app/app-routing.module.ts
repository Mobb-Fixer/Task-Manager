import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { TaskComponent } from './Component/task/task.component';
import { AuthGuard } from './Guard/auth.guard';
import { ProjectComponent } from './Component/project/project.component';
import { NotfoundComponent } from './Component/notfound/notfound.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path : 'task', component : TaskComponent},
  { path: 'project/:id', component: ProjectComponent },
  { path: '**',component : NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
