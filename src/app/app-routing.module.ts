import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StudentComponent } from './pages/student/student.component';
import { BackComponent } from './pages/back/back.component';
const routes: Routes = [
{
	path:'home'
	component:HomeComponent
}
{
	path:'student'
	component:StudentComponent
}
{
	path:'back'
	component:backComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
