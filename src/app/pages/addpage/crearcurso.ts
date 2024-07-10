import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'crearcurso',
  templateUrl: './crearcurso.html',
  styleUrls: ['./crearcurso.css']
})
export class Crearcurso implements OnInit {
  cursoData = { nombre_curso: '', nombre_profesor: '', descripcion: '', iconocurso: '', iconocursoNombre: '' };
  showError = false;
  showSuccess = false;
  alertMessage = '';

  constructor(private router: Router) {}

  ngOnInit() {
    const savedCursoData = localStorage.getItem('cursoData');
    if (savedCursoData) {
      this.cursoData = JSON.parse(savedCursoData);
    }
  }

  formSubmit(form: NgForm) {
    if (form.invalid) {
      this.showErrorAlert('Por favor, complete todos los campos.');
      return;
    }

    localStorage.setItem('cursoData', JSON.stringify(this.cursoData));
    this.router.navigate(['/addinfo']);
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.cursoData.iconocurso = reader.result as string;
        this.cursoData.iconocursoNombre = file.name;
        this.saveToLocalStorage();
      };
      reader.readAsDataURL(file);
    }
  }

  saveToLocalStorage() {
    localStorage.setItem('cursoData', JSON.stringify(this.cursoData));
  }

  scrollToTop() {
    window.scrollTo(0, 0);
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
