import { Component, AfterViewInit, OnInit, ViewEncapsulation } from '@angular/core';
import { Editor } from 'ngx-editor';
import Tagify from '@yaireo/tagify'
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'quintafase',
  templateUrl: './quintafase.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './quintafase.css' ]
})

export class Quintafase {
	editor: Editor;
  html: '';
  cursoData = { archivo_pt5: '', descripcionpt5: '', pregunta1pt5: '', respuesta1p1pt5: '', respuesta2p1pt5: '',
    respuesta3p1pt5:'', respuesta4p1pt5: '', respuestacorrectap1pt5:0, pregunta2pt5:'', respuesta1p2pt5:'', 
    respuesta2p2pt5:'', respuesta3p2pt5:'', respuesta4p2pt5:'', respuestacorrectap2pt5:'', pregunta3pt5:'',
    respuesta1p3pt5:'', respuesta2p3pt5:'', respuesta3p3pt5:'', respuesta4p3pt5:'', respuestacorrectap3pt5:'', 
    pregunta4pt5:'', respuesta1p4pt5:'', respuesta2p4pt5:'',respuesta3p4pt5:'', respuesta4p4pt5:'',
    respuestacorrectap4pt5:'', pregunta5pt5:'', respuesta1p5pt5:'', respuesta2p5pt5:'', respuesta3p5pt5:'',
    respuesta4p5pt5:'',respuestacorrectap5pt5:''};
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
