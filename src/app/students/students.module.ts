import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormStudentComponent } from './form-student/form-student.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { StudentsComponent } from './students.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormStudentComponent,
    ListStudentComponent,
    StudentsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StudentsRoutingModule,
    Ng2SearchPipeModule
  ]
})
export class StudentsModule { }
