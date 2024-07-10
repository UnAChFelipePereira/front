import { Component, AfterViewInit, OnInit, ViewEncapsulation } from "@angular/core";
import { Editor } from "ngx-editor";
import Tagify from "@yaireo/tagify";
import { FormBuilder, FormGroup, NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "primerafase",
  templateUrl: "./primerafase.html",
  encapsulation: ViewEncapsulation.None,
  styleUrls: ["./primerafase.css"],
})
export class Primerafase implements OnInit, AfterViewInit {
  editor: Editor;
  html: string = ''; // inicializar correctamente
  cursoData = {
    archivo_pt1: '',
    descripcionpt1: '',
    pregunta1pt1: '',
    respuesta1p1pt1: '',
    respuesta2p1pt1: '',
    respuesta3p1pt1: '',
    respuesta4p1pt1: '',
    respuestacorrectap1pt1:'', // inicializar como null
    pregunta2pt1: '',
    respuesta1p2pt1: '',
    respuesta2p2pt1: '',
    respuesta3p2pt1: '',
    respuesta4p2pt1: '',
    respuestacorrectap2pt1: '', // inicializar como null
    pregunta3pt1: '',
    respuesta1p3pt1: '',
    respuesta2p3pt1: '',
    respuesta3p3pt1: '',
    respuesta4p3pt1: '',
    respuestacorrectap3pt1: null, // inicializar como null
    pregunta4pt1: '',
    respuesta1p4pt1: '',
    respuesta2p4pt1: '',
    respuesta3p4pt1: '',
    respuesta4p4pt1: '',
    respuestacorrectap4pt1: null, // inicializar como null
    pregunta5pt1: '',
    respuesta1p5pt1: '',
    respuesta2p5pt1: '',
    respuesta3p5pt1: '',
    respuesta4p5pt1: '',
    respuestacorrectap5pt1: null, // inicializar como null
  };
  courseForm: FormGroup;
  showError = false;
  showSuccess = false;
  alertMessage = '';

  constructor(private router: Router) {}

  ngOnInit() {
    const savedCursoData = localStorage.getItem("cursoData");
    if (savedCursoData) {
      this.cursoData = JSON.parse(savedCursoData);
    }
  }

  ngAfterViewInit() {
    var tagsElm = [].slice.call(document.querySelectorAll('[data-render="tags"]'));
    tagsElm.map(function (tagElm) {
      new Tagify(tagElm);
    });
  }

  formSubmit(f: NgForm) {
    const formData = f.value;
    if (f.invalid) {
      this.showErrorAlert("Por favor, complete todos los campos.");
      console.log("no")
      return;
    }
    console.log("pasa")
    console.log(formData.respuesta1p1pt1)
    console.log(formData.respuesta2p1pt1)
    console.log(formData.respuesta3p1pt1)
    console.log(formData.respuesta4p1pt1)
    console.log("respuesta correcta: " + formData.respuestacorrectap1pt1)

    console.log(formData.respuesta1p2pt1)
    console.log(formData.respuesta2p2pt1)
    console.log(formData.respuesta3p2pt1)
    console.log(formData.respuesta4p2pt1)
    console.log("respuesta correcta: " + formData.respuestacorrectap2pt1)

    console.log(formData.respuesta1p3pt1)
    console.log(formData.respuesta2p3pt1)
    console.log(formData.respuesta3p3pt1)
    console.log(formData.respuesta4p3pt1)
    console.log("respuesta correcta: " + formData.respuestacorrectap3pt1)

    console.log(formData.respuesta1p4pt1)
    console.log(formData.respuesta2p4pt1)
    console.log(formData.respuesta3p4pt1)
    console.log(formData.respuesta4p4pt1)
    console.log("respuesta correcta: " + formData.respuestacorrectap4pt1)

    console.log(formData.respuesta1p5pt1)
    console.log(formData.respuesta2p5pt1)
    console.log(formData.respuesta3p5pt1)
    console.log(formData.respuesta4p5pt1)
    console.log("respuesta correcta: " + formData.respuestacorrectap5pt1)

    localStorage.setItem("cursoData", JSON.stringify(this.cursoData));
    this.router.navigate(["/segundafase"]);
  }

  saveToLocalStorage() {
    localStorage.setItem("cursoData", JSON.stringify(this.cursoData));
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

  limpiarRespuestaCorrecta(pregunta: number) {
    const key = `respuestacorrectap${pregunta}pt1`;
    this.cursoData[key] = null;
  }
}
