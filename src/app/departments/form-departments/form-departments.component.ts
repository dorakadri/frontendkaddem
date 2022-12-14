import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Department } from "./../../Core/Modals/department";
import { DepartementService } from "./../../Core/Services/department.service";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: "app-form-departments",
  templateUrl: "./form-departments.component.html",
  styleUrls: ["./form-departments.component.css"],
})
export class FormDepartmentsComponent implements OnInit {
  public department: Department = new Department();
  public action: string;
  public departmentForm: FormGroup;
  constructor(
    private builder: FormBuilder,
    private departementService: DepartementService,
    private router: Router,
    private currentRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = this.currentRoute.snapshot.params["idDepart"];
    if (id != null) {
      //update
      this.action = "update";

      this.departementService
        .getDepartmentByID(id)
        .subscribe((object: Department) => (this.department = object));
    } else {
      this.action = "Add";
      this.department = new Department();
    }
    this.departmentForm = this.builder.group({
      nomDepart: new FormControl("", Validators.minLength(3)),
      adresse: new FormControl("", Validators.minLength(5)),
    });
  }
  saveDepartment() {
    if (this.departmentForm.valid) {
      if (this.action == "Add") {
        this.departementService.addDepartment(this.department).subscribe(() => {
          this.router.navigate(["/departments"]);
          Swal.fire({
            icon: "success",
            title: "Department Saved successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        });
      } else {
        this.departementService
          .updateDepartment(this.department)
          .subscribe(() => {
            this.router.navigate(["/departments"]);
            Swal.fire({
              icon: "success",
              title: "Department Updated successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill the required fields !",
        timer: 2000,
      });
    }
  }

  get nomDepart() {
    return this.nomDepart.get("nomDepart");
  }
  get adresse() {
    return this.adresse.get("adresse");
  }
}
