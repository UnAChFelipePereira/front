import { Component, AfterViewInit, OnInit, ViewEncapsulation } from '@angular/core';
import { Editor } from 'ngx-editor';
import Tagify from '@yaireo/tagify'
import { Router } from '@angular/router';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'segundafase',
  templateUrl: './segundafase.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './segundafase.css' ]
})

export class Segundafase {
	editor: Editor;
  html: '';
  cursoData = { archivo_pt2: '', descripcionpt2: '', pregunta1pt2: '', respuesta1p1pt2: '', respuesta2p1pt2: '',
    respuesta3p1pt2:'', respuesta4p1pt2: '', respuestacorrectap1pt2:0, pregunta2pt2:'', respuesta1p2pt2:'', 
    respuesta2p2pt2:'', respuesta3p2pt2:'', respuesta4p2pt2:'', respuestacorrectap2pt2:'', pregunta3pt2:'',
    respuesta1p3pt2:'', respuesta2p3pt2:'', respuesta3p3pt2:'', respuesta4p3pt2:'', respuestacorrectap3pt2:'', 
    pregunta4pt2:'', respuesta1p4pt2:'', respuesta2p4pt2:'',respuesta3p4pt2:'', respuesta4p4pt2:'',
    respuestacorrectap4pt2:'', pregunta5pt2:'', respuesta1p5pt2:'', respuesta2p5pt2:'', respuesta3p5pt2:'',
    respuesta4p5pt2:'',respuestacorrectap5pt2:''};
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
    this.router.navigate(['/tercerafase']);
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
