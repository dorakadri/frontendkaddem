import { Component, OnInit } from "@angular/core";
import { ChartDataSets, ChartType, RadialChartOptions } from "chart.js";
import * as Chartist from "chartist";
import { MultiDataSet, Label } from "ng2-charts";
import { Enseignant } from "../Core/Modals/enseignant";
import { Student } from "../Core/Modals/Student";
import { Team } from "../Core/Modals/Team";
import { University } from "../Core/Modals/university";
import { EnseignantService } from "../Core/Services/enseignant.service";
import { ProjectsService } from "../Core/Services/projects.service";
import { StudentService } from "../Core/Services/student.service";
import { TeamService } from "../Core/Services/team.service";
import { UniversityService } from "../Core/Services/university.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  public lineBigDashboardChartType;
  public gradientStroke;
  public chartColor;
  public canvas: any;
  public ctx;
  public gradientFill;
  public expert: number = 0;
  public senior: number = 0;
  public junior: number = 0;
  public studentnb: number = 0;
  public profnb: number = 0;
  public univnb: number = 0;

  doughnutChartLabels: Label[] = ["Student", "Professors", "Universities"];
  doughnutChartData: MultiDataSet = [[0, 0, 0]];
  doughnutChartType: ChartType = "doughnut";
  public chartClicked(e: any): void {
    console.log(e);
  }

  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ["Seniors", "Juniors", "Expert"];
  public radarChartData: ChartDataSets[] = [];
  public radarChartType: ChartType = "radar";

  public chartHovered(e: any): void {
    console.log(e);
  }
  public hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
      return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
      return "rgb(" + r + ", " + g + ", " + b + ")";
    }
  }
  constructor(
    private univserv: UniversityService,
    private studerv: StudentService,
    private ensserv: EnseignantService,
    private teamserv: TeamService
  ) {}

  ngOnInit() {
    this.teamserv.getAllTeam().subscribe(
      (res: Team[]) => {
        this.expert = res.filter((e) => e.niv == "EXPERT").length;
        this.senior = res.filter((e) => e.niv == "SENIOR").length;
        this.junior = res.filter((e) => e.niv == "JUNIOR").length;
      },
      () => {
        console.log("error");
      },
      () => {
        this.radarChartData = [
          {
            data: [this.senior, this.junior, this.expert],
            label: "Teams Skill Analysis",
          },
        ];
      }
    );

    this.studerv.getStudents().subscribe(
      (res: Student[]) => {
        this.studentnb = res.length;
      },
      () => {
        console.log("error");
      },
      () => {
        this.univserv.getAllUniversity().subscribe(
          (res: University[]) => {
            this.univnb = res.length;
          },
          () => {
            console.log("error");
          },
          () => {
            this.ensserv.getAllEnseignant().subscribe(
              (res: Enseignant[]) => {
                this.profnb = res.length;
              },
              () => {
                console.log("error");
              },
              () => {
                this.doughnutChartData = [
                  [this.studentnb, this.profnb, this.univnb],
                ];
              }
            );
          }
        );
      }
    );
  }

  removenotif(e, id: string) {
    const notif = document.getElementById(id);
    notif.remove();
  }
}
