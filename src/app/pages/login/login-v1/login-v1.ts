import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AppSettings } from '../../../service/app-settings.service';
import { AuthService } from '../../../components/auth/auth.service';
// import { profile } from 'console';

@Component({
  selector: 'login-v1',
  templateUrl: './login-v1.html'
})

export class LoginV1Page implements OnDestroy {
  userData = { email: '', password: '' };
  showPassword = false;
  showError = false;
  showSuccess = false;
  alertMessage = '';
  userProfile: any;


  constructor(private authService: AuthService, private router: Router, public appSettings: AppSettings) {
    this.appSettings.appEmpty = true;
  }

  ngOnDestroy() {
    this.appSettings.appEmpty = false;
  }
/*
  formSubmit(f: NgForm) {
    if (f.valid) {
      const formData = f.value;
      
      this.authService.login(formData.email, formData.password).subscribe(
        response => {
          console.log('Respuesta del inicio de sesión:', response);
          
          // Almacena el nombre y el apellido del usuario en el servicio de autenticación
          this.authService.perfil(response.user.email, response.user.name, response.user.lastname);

          console.log(response.user.name);
          console.log(response.user.lastname);
  
          // Navega al dashboard
          this.router.navigate(['dashboard']);
          return true;
        },
        error => {
          this.showErrorAlert('Correo o contraseña incorrecta.');
          console.error('Error al iniciar sesión:', error);
        }
      );
    }
  }
*/

// formSubmit(f: NgForm) {
//   if (f.valid) {
//       const formData = f.value;

//       this.authService.login(formData.email, formData.password).subscribe(
//           response => {
//               console.log('Respuesta del inicio de sesión:', response);

//               // Almacena el nombre y el apellido del usuario en el servicio de autenticación
//               this.authService.perfil(response.user.email, response.user.name, response.user.lastname, response.user.profilePic);
//               this.userProfile = response;

//               // Guardar en localStorage
//               localStorage.setItem('userEmail', response.user.email);
//               localStorage.setItem('userName', response.user.name);
//               localStorage.setItem('userLastName', response.user.lastname);
//               localStorage.setItem('userProfilePic', response.user.profilePic);

//               //console.log(response.user.name);
//               //console.log(response.user.lastname);
//               console.log(response.user.profilePic);

//               // Navega al dashboard
//               this.router.navigate(['dashboard']);
//               return true;
//           },
//           error => {
//               this.showErrorAlert('Correo o contraseña incorrecta.');
//               console.error('Error al iniciar sesión:', error);
//           }
//       );
//   }
// }

formSubmit(f: NgForm) {
  if (f.valid) {
    const formData = f.value;
    this.authService.login(formData.email, formData.password).subscribe(
      response => {
        console.log('Respuesta del inicio de sesión:', response);
        localStorage.setItem('user_Id', response.user._id);
        // localStorage.setItem('_id', response._id);
        // console.log(response._id)
        // Navegar al dashboard u otra página según la lógica de tu aplicación
        this.router.navigate(['inicio']);
      },
      error => {
        this.showErrorAlert('Correo o contraseña incorrecta.');
        console.error('Error al iniciar sesión:', error);
      }
    );
  }
}


  showErrorAlert(message: string) {
    this.alertMessage = message;
    this.showError = true;
    setTimeout(() => {
        this.hideAlerts();
    }, 20000);
  }

  showSuccessAlert(message: string) {
    this.alertMessage = message;
    this.showSuccess = true;
    setTimeout(() => {
        this.hideAlerts();
    }, 20000);
  }

  hideAlerts() {
    this.showError = false;
    this.showSuccess = false;
    this.alertMessage = '';
  }

}
