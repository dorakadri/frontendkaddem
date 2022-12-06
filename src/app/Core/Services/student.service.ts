import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../Modals/Department';
import { Team } from '../Modals/Team';
import { Student } from '../Modals/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  API = 'http://localhost:8081/SpringMVC/controllerEtudiant';

  public registerStudent(studentData: any) {
    return this.http.post<Student>(this.API + '/ajouterEtudiant', studentData);
  }

  public getStudents() {
    return this.http.get(this.API + '/DisplayStudents');
  }

  public deleteStudent(idEtudiant: any) {
    return this.http.delete(this.API + '/deletestudent/?id=' + idEtudiant);
  }

  public updateStudents(student: any) {
    return this.http.put(this.API + '/updateStudentById', student);
  }
  
  public assignStudent(idEtudiant:any,idDepart:any){

        return this.http.post<number>(`${this.API}/assignetudianttodepartment/${idEtudiant}/${idDepart}`,{});

  }

   public getDepartements(){

        return this.http.get<Department[]>('http://localhost:8081/SpringMVC/DepartmentController/displayalldepartment' );
  }

 public getallequipe() {
    return this.http.get<Team[]>('http://localhost:8081/SpringMVC/EquipeController/displayEquipes' );
  }
  
  public assignstudenttoequipe(idEtudiant:any,ideq:any){


    return this.http.post(`${this.API}/assignEtudiantEquipe/${ideq}/${idEtudiant}`,{});

  }


 
}
