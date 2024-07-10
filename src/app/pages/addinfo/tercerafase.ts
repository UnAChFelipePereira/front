import { Component, AfterViewInit, OnInit, ViewEncapsulation } from '@angular/core';
import { Editor } from 'ngx-editor';
import Tagify from '@yaireo/tagify'
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'tercerafase',
  templateUrl: './tercerafase.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './tercerafase.css' ]
})

export class Tercerafase {
	editor: Editor;
  html: '';
  cursoData = { archivo_pt3: '', descripcionpt3: '', pregunta1pt3: '', respuesta1p1pt3: '', respuesta2p1pt3: '',
    respuesta3p1pt3:'', respuesta4p1pt3: '', respuestacorrectap1pt3:0, pregunta2pt3:'', respuesta1p2pt3:'', 
    respuesta2p2pt3:'', respuesta3p2pt3:'', respuesta4p2pt3:'', respuestacorrectap2pt3:'', pregunta3pt3:'',
    respuesta1p3pt3:'', respuesta2p3pt3:'', respuesta3p3pt3:'', respuesta4p3pt3:'', respuestacorrectap3pt3:'', 
    pregunta4pt3:'', respuesta1p4pt3:'', respuesta2p4pt3:'',respuesta3p4pt3:'', respuesta4p4pt3:'',
    respuestacorrectap4pt3:'', pregunta5pt3:'', respuesta1p5pt3:'', respuesta2p5pt3:'', respuesta3p5pt3:'',
    respuesta4p5pt3:'',respuestacorrectap5pt3:''};
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
