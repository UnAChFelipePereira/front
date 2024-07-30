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
  formSubmit(f: NgForm) {
    if (f.valid) {
      const formData = f.value;
      this.authService.login(formData.email, formData.password).subscribe(
        response => {
          console.log('Respuesta del inicio de sesión:', response);
          localStorage.setItem('user_Id', response.user._id);
          this.router.navigate(['inicio']);
        },
        error => {
          const errorMessage = error.error.message;
          if (errorMessage.includes('Cuenta no activada')) {
            this.showErrorAlert('Cuenta no activada. Por favor, verifica tu correo electrónico.');
          } else if (errorMessage.includes('Contraseña incorrecta')) {
            this.showErrorAlert('Contraseña incorrecta.');
          } else if (errorMessage.includes('Usuario no encontrado')) {
            this.showErrorAlert('Usuario no encontrado.');
          } else {
            this.showErrorAlert('Correo o contraseña incorrecta.');
          }
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
