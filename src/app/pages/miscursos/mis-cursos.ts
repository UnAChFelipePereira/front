import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../components/auth/auth.service";

@Component({
  selector: "mis-cursos",
  templateUrl: "./mis-cursos.html",
})
export class MisCursosPage implements OnInit {
  user_Id: string;
  cursosInscritos: any[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.user_Id = localStorage.getItem("user_Id");
    this.getUserIdFromLocalStorage();
    if (this.user_Id) {
      this.getEnrolledCursos(this.user_Id);
    } else {
      console.error("No se encontró el ID del usuario en localStorage.");
    }
  }

  getUserIdFromLocalStorage() {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    this.user_Id = user._id;
  }

  enrollCurso(cursoId: string) {
    if (this.user_Id) {
      this.authService.enrollUserInCurso(this.user_Id, cursoId).subscribe(
        (response) => {
          console.log("Usuario inscrito en curso:", response);
          this.getEnrolledCursos(this.user_Id); // Actualizar la lista de cursos inscritos después de la inscripción
        },
        (error) => {
          console.error("Error al inscribir usuario en curso:", error);
        }
      );
    }
  }

  getEnrolledCursos(userId: string) {
    this.authService.getEnrolledCursos(userId).subscribe(
      (response) => {
        this.cursosInscritos = response.cursos;
        console.log("Cursos inscritos del usuario:", this.cursosInscritos);
      },
      (error) => {
        console.error("Error al obtener cursos inscritos:", error);
      }
    );
  }
}

// import { Component } from '@angular/core';

// @Component({
// 	selector: 'extra-search-results',
// 	templateUrl: './mis-cursos.html'
// })

// export class MisCursosPage {
// }
