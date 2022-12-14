const contracts = "http://localhost:8081/ContratApi/";
const students =
  "http://localhost:8081/controllerEtudiant/";
export const environment = {
  production: true,
  url: "https://backendspring-production.up.railway.app/",
  urldep:
    "https://backendspring-production.up.railway.app/DepartmentController/",
  endpoints: {
    contracts: {
      getAll: contracts + "getAll",
      post: contracts + "post",
      delete: contracts + "delete/",
      get: contracts + "get/",
      update: contracts + "update",
      affectContractToStudent: contracts + "affectContratToEtudiant",
    },
    students: {
      getAll: students + "DisplayStudents",
    },
  },
};
