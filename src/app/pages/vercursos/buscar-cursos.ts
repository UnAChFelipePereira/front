import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../components/auth/auth.service';
import { Curso } from './curso.model';
import { Router } from '@angular/router';

@Component({
  selector: 'extra-search-results',
  templateUrl: './buscar-cursos.html',
})
export class BuscarCursosPage implements OnInit {
  cursos: Curso[] = [];

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.getCursos().subscribe(
      (response: any) => {
        if (Array.isArray(response.data)) {
          this.cursos = response.data;
        } else {
          console.error('La respuesta del servidor no contiene un arreglo válido de cursos:', response);
        }
      },
      (error) => {
        console.error('Error al obtener cursos:', error);
      }
    );
  }

  enrollUserInCurso(cursoId: string): void {
    const userId = localStorage.getItem('user_Id'); // Obtener el ID del usuario desde localStorage o donde se almacene

    if (userId) {
      this.authService.enrollUserInCurso(userId, cursoId).subscribe(
        (response) => {
          console.log('Usuario inscrito correctamente:', response);
          this.router.navigate(['/mis-cursos']); // Redirigir al usuario a la página de mis cursos
        },
        (error) => {
          console.error('Error al inscribir usuario:', error);
          // Manejar errores aquí
        }
      );
    } else {
      console.error('No se encontró el ID del usuario en localStorage.');
    }
  }
}


// // buscar-cursos.ts

// import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../../components/auth/auth.service';
// import { Curso } from './curso.model';
// import {  Router } from '@angular/router';

// @Component({
//   selector: 'extra-search-results',
//   templateUrl: './buscar-cursos.html',
// })
// export class BuscarCursosPage implements OnInit {
//   cursos: Curso[] = [];
//   cursoId = 'idDelCurso';

//   constructor(private authService: AuthService, private router: Router) {}

//   ngOnInit(): void {
//     this.authService.getCursos().subscribe(
//       (response: any) => { // Utiliza 'any' temporalmente para verificar la respuesta completa
//         console.log(response); // Verifica la respuesta completa del servidor en la consola

//         // Asegúrate de que 'response.data' sea un arreglo antes de asignarlo a 'this.cursos'
//         if (Array.isArray(response.data)) {
//           this.cursos = response.data; // Asigna directamente el arreglo de cursos
//         } else {
//           console.error('La respuesta del servidor no contiene un arreglo válido de cursos:', response);
//           // Puedes manejar el error adecuadamente aquí, por ejemplo, mostrando un mensaje al usuario
//         }
//       },
//       (error) => {
//         console.error('Error al obtener cursos:', error);
//         // Aquí puedes manejar el error adecuadamente (por ejemplo, mostrar un mensaje al usuario)
//       }
//     );
//   }

//   enrollUserInCurso(): void {
//     // Suponiendo que obtienes el ID del usuario desde algún lugar (por ejemplo, almacenado en localStorage o pasado como parámetro)
//     const userId = 'idDelUsuario';

//     this.authService.enrollUserInCurso(userId, this.cursoId)
//       .subscribe(
//         response => {
//           console.log('Usuario inscrito correctamente:', response);
//           this.router.navigate(['/mis-cursos']); // Redirige a la página de cursos inscritos
//         },
//         error => {
//           console.error('Error al inscribir usuario:', error);
//           // Manejar errores aquí
//         }
//       );
//   }


// }
