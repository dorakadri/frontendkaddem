import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormStudentComponent } from './form-student/form-student.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { StudentsComponent } from './students.component';

const routes: Routes = [ 
  { path: '',      component: ListStudentComponent },
  { path:'ajouter',      component: FormStudentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
