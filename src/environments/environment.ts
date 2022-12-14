const contracts = "https://backendspring-production.up.railway.app/ContratApi/";
const students =
  "https://backendspring-production.up.railway.app/controllerEtudiant/";
const users = "https://backendspring-production.up.railway.app/";
export const environment = {
  production: true,
  url: "https://backendspring-production.up.railway.app/",
  urldep:
    "https://backendspring-production.up.railway.app/DepartmentController/",
  endpoints: {
    users: {
      getAll: users + "getAll",
      post: users + "post",
      delete: users + "delete",
      get: users + "get/",
      update: users + "update",
      login: users + "authenticate",
    },
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
