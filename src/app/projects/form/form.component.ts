import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { projet } from "../../Core/Modals/project";
import { Team } from "../../Core/Modals/Team";
import { ProjectsService } from "../../Core/Services/projects.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent implements OnInit {
  public projet: projet = new projet();
  public list: Team[];
  public listprojet: projet[];
  public selectedList: Team[];
  public idselected: number[] = [];
  public projectForm: FormGroup;
  public action: string;
  public idtodoc: number = 0;
  public idprojet: number = 0;

  constructor(
    private builder: FormBuilder,
    private projetserv: ProjectsService,
    private currentRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.projectForm = this.builder.group({
      nomProjet: ["", [Validators.required, Validators.minLength(3)]],
      client: ["", [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
      decription: ["", [Validators.required, Validators.minLength(10)]],
      deadline: ["", [Validators.required]],
      field: ["", [Validators.required]],
      etat: ["ENCOUR", []],
    });
    this.idprojet = this.currentRoute.snapshot.params["id"];

    if (this.idprojet != null) {
      this.action = "Modify";
      this.projetserv.getproject(this.idprojet).subscribe(
        (object: projet) => {
          this.projet = object;
        },

        () => {
          console.log("error");
        },
        () => {
          this.projetserv
            .getidequipe(this.idprojet)
            .subscribe((response: number) => {
              this.idselected = this.idselected.concat(response);
              console.log(this.idselected);
            });
        }
      );
      console.log(this.projet);
    } else {
      this.action = "ADD";
      this.projet = new projet();
    }

    this.projetserv.getallequipe().subscribe((response: Team[]) => {
      this.list = response;
      this.selectedList = response;
    });

  }

  save() {
    if (this.projectForm.valid) {
      if (this.action == "ADD") {
        this.projetserv.postproject(this.projectForm.value).subscribe(
          (response: number) => {
            this.idtodoc = response;
            if (this.idselected.length != 0) {
              this.projetserv
                .assignteamtoproject(this.idselected, response)
                .subscribe();
            }
          },
          () => {
            this.projetserv.Errormsg(this.action);
          },
          () => {
            this.projetserv.Successmsg(this.action);
          }
        );
      } else {
        this.projet = { ...this.projectForm.value };
        this.projet.idProjet = this.idprojet;
        console.log(this.projet.idProjet);
        console.log(this.action);
        let idprojet = this.currentRoute.snapshot.params["id"];
        this.projetserv.Updateprojet(this.projet, idprojet).subscribe(
          (response: projet) => {
            if (this.idselected.length != 0)
              this.projetserv
                .assignteamtoproject(this.idselected, this.projet.idProjet)
                .subscribe(
                  () => {},
                  () => {
                    console.log("errr");
                  },
                  () => {
                    console.log("complete");
                  }
                );
          },
          () => {
            this.projetserv.Errormsg(this.action);
            console.log("errr");
          },
          () => {
            console.log("complete");
            this.projetserv.Successmsg(this.action);
          }
        );
      }
    }
  }
  getvalue(e) {
    console.log(e.target.value);
    if (e.target.value === "ANY") this.selectedList = this.list;
    else this.selectedList = this.list.filter((d) => d.niv == e.target.value);
  }

  getid(e) {
    console.log(e);
    if (e.target.checked) {
      this.idselected.push(+e.target.value);
      console.log(this.idselected);
    } else {
      this.idselected = this.idselected.filter((id) => id !== +e.target.value);
      console.log(this.idselected);
    }
  }
}
