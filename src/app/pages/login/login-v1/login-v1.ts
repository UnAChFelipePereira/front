import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AppSettings } from '../../../service/app-settings.service';
import { AuthService } from '../../../components/auth/auth.service';

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
          

          localStorage.setItem('access_token', response.access_token);
          localStorage.setItem('refresh_token', response.refresh_token);

          console.log(response.access_token)
          console.log(response.refresh_token)
          
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
