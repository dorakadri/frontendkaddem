import { Department } from "./department";
import { Team } from "./Team";

export class Student{
    idEtudiant:number;
    prenomE:string;
    nomE:string;
    date_naissance:Date;
    op:string;
    departement:Department;
    equipes:Team[] | string[];
}