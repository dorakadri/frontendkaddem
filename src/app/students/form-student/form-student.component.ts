import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../Core/Services/student.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Department } from '../../core/Modals/department';
import { Student } from '../../core/Modals/Student';
import { Team } from '../../core/Modals/Team';


@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.component.html',
  styleUrls: ['./form-student.component.css']
})
export class FormStudentComponent implements OnInit {
//studentDetails = null as any;

public depart: Department[]=[];
 public selectedList:Team[];
  public idselected:number[]=[];
   public list :Team[];

  studentToUpdate = {
        option:"",
    idEtudiant:"",
    nomE:"",
    prenomE:"",
    date_naissance:"",
    departements:""

  }

  constructor(private studentService: StudentService,private router:Router) {
    
   }

  ngOnInit(): void {

this.studentService.getDepartements().subscribe(
      (response:Department[])=>{
       this.depart=response;
       console.log(typeof(this.depart));
       console.log("/////////////////////////////");
      }, 
      () => { console.log('error') },
   
    )


     this.studentService.getallequipe().subscribe(
      (response:Team[])=>{

       this.selectedList=response;
    console.log(response);
      }
    )
  }

   displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  register(registerForm: NgForm) {

   // etud={departement:...registerForm.value};

   
  
// delete registerForm.value.departement;
       const {departement:_,...etud}=registerForm.value;


        var i =+registerForm.value.departement;
    

    this.studentService.registerStudent(etud).subscribe(
      
      (resp:Student) => { 
        
    if(this.idselected.length !== 0 )
        this.idselected.forEach((e)=> this.studentService.assignstudenttoequipe(resp.idEtudiant,e).subscribe( ));

    if (i!==0){
   this.studentService.assignStudent(resp.idEtudiant,i).subscribe();
    console.log("lalaal")}else console.log("hello ");

      },(err) => {
        console.log(err);
      
      },  
      () => {
        setTimeout(()=>{                         
      this.router.navigate(['/students'])
 }, 500);
         
      }

       
    );

  
   
  }  

  getid(e){

 console.log(e)
 if(e.target.checked){
  this.idselected.push(+e.target.value);
  console.log(this.idselected);
 }else{
  this.idselected=this.idselected.filter((id)=>id !== +e.target.value);
  console.log(this.idselected);
 }

}


}



