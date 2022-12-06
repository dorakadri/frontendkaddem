
const contracts= "http://localhost:8081/SpringMVC/ContratApi/"
const students= "http://localhost:8081/SpringMVC/controllerEtudiant/"
export const environment = {
  production: false,
  url:'http://localhost:8081/SpringMVC/',
  urldep:'http://localhost:8081/SpringMVC/DepartmentController/',
  endpoints:{
    contracts:{
      getAll:contracts+"getAll",
      post:contracts+"post",
      delete: contracts+"delete/",
      get: contracts+"get/",
      update: contracts+"update",
      affectContractToStudent: contracts+"affectContratToEtudiant",
    },
    students:{
      getAll:students+"DisplayStudents"
    }
  }
};
