import { Component, AfterViewInit, OnInit, ViewEncapsulation } from '@angular/core';
import { Editor } from 'ngx-editor';
import Tagify from '@yaireo/tagify'
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'cuartafase',
  templateUrl: './cuartafase.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './cuartafase.css' ]
})

export class Cuartafase {
	editor: Editor;
  html: '';
  cursoData = { archivo_pt4: '', descripcionpt4: '', pregunta1pt4: '', respuesta1p1pt4: '', respuesta2p1pt4: '',
    respuesta3p1pt4:'', respuesta4p1pt4: '', respuestacorrectap1pt4:0, pregunta2pt4:'', respuesta1p2pt4:'', 
    respuesta2p2pt4:'', respuesta3p2pt4:'', respuesta4p2pt4:'', respuestacorrectap2pt4:'', pregunta3pt4:'',
    respuesta1p3pt4:'', respuesta2p3pt4:'', respuesta3p3pt4:'', respuesta4p3pt4:'', respuestacorrectap3pt4:'', 
    pregunta4pt4:'', respuesta1p4pt4:'', respuesta2p4pt4:'',respuesta3p4pt4:'', respuesta4p4pt4:'',
    respuestacorrectap4pt4:'', pregunta5pt4:'', respuesta1p5pt4:'', respuesta2p5pt4:'', respuesta3p5pt4:'',
    respuesta4p5pt4:'',respuestacorrectap5pt4:''};
  courseForm: FormGroup;
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
    this.router.navigate(['/cuartafase']||['/segundafase']);
  }

  saveToLocalStorage() {
    localStorage.setItem('cursoData', JSON.stringify(this.cursoData));
  }
  
  scrollToTop() {
    window.scrollTo(0, 0);
  }

  
	ngAfterViewInit() {
    var tagsElm = [].slice.call(document.querySelectorAll('[data-render="tags"]'));
    
    tagsElm.map(function(tagElm) {
    	new Tagify(tagElm);
    });
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
