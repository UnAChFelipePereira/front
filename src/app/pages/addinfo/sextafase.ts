import { Component, AfterViewInit, OnInit, ViewEncapsulation, Renderer2 } from '@angular/core';
import { Editor } from 'ngx-editor';
import Tagify from '@yaireo/tagify'
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppSettings } from '../../service/app-settings.service';
import { AuthService } from '../../components/auth/auth.service';

@Component({
  selector: 'sextafase',
  templateUrl: './sextafase.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './sextafase.css' ]
})

export class Sextafase {
	editor: Editor;
  html: '';
  cursoData= { 
    /*crear curso*/
      nombre_curso: '', nombre_profesor: '', descripcion: '', iconocurso: '', iconocursoNombre: '' ,
    /*pt1*/
    archivo_pt1: '', descripcionpt1: '', pregunta1pt1: '', respuesta1p1pt1: '', respuesta2p1pt1: '',
    respuesta3p1pt1:'', respuesta4p1pt1: '', respuestacorrectap1pt1:null, pregunta2pt1:'', respuesta1p2pt1:'', 
    respuesta2p2pt1:'', respuesta3p2pt1:'', respuesta4p2pt1:'', respuestacorrectap2pt1:null, pregunta3pt1:'',
    respuesta1p3pt1:'', respuesta2p3pt1:'', respuesta3p3pt1:'', respuesta4p3pt1:'', respuestacorrectap3pt1:null, 
    pregunta4pt1:'', respuesta1p4pt1:'', respuesta2p4pt1:'',respuesta3p4pt1:'', respuesta4p4pt1:'',
    respuestacorrectap4pt1:null, pregunta5pt1:'', respuesta1p5pt1:'', respuesta2p5pt1:'', respuesta3p5pt1:'',
    respuesta4p5pt1:'',respuestacorrectap5pt1:null,
    /*pt2*/
    archivo_pt2: '', descripcionpt2: '', pregunta1pt2: '', respuesta1p1pt2: '', respuesta2p1pt2: '',
    respuesta3p1pt2:'', respuesta4p1pt2: '', respuestacorrectap1pt2:0, pregunta2pt2:'', respuesta1p2pt2:'', 
    respuesta2p2pt2:'', respuesta3p2pt2:'', respuesta4p2pt2:'', respuestacorrectap2pt2:'', pregunta3pt2:'',
    respuesta1p3pt2:'', respuesta2p3pt2:'', respuesta3p3pt2:'', respuesta4p3pt2:'', respuestacorrectap3pt2:'', 
    pregunta4pt2:'', respuesta1p4pt2:'', respuesta2p4pt2:'',respuesta3p4pt2:'', respuesta4p4pt2:'',
    respuestacorrectap4pt2:'', pregunta5pt2:'', respuesta1p5pt2:'', respuesta2p5pt2:'', respuesta3p5pt2:'',
    respuesta4p5pt2:'',respuestacorrectap5pt2:'',
    /*pt3*/  
      archivo_pt3: '', descripcionpt3: '', pregunta1pt3: '', respuesta1p1pt3: '', respuesta2p1pt3: '',
      respuesta3p1pt3:'', respuesta4p1pt3: '', respuestacorrectap1pt3:0, pregunta2pt3:'', respuesta1p2pt3:'', 
      respuesta2p2pt3:'', respuesta3p2pt3:'', respuesta4p2pt3:'', respuestacorrectap2pt3:'', pregunta3pt3:'',
      respuesta1p3pt3:'', respuesta2p3pt3:'', respuesta3p3pt3:'', respuesta4p3pt3:'', respuestacorrectap3pt3:'', 
      pregunta4pt3:'', respuesta1p4pt3:'', respuesta2p4pt3:'',respuesta3p4pt3:'', respuesta4p4pt3:'',
      respuestacorrectap4pt3:'', pregunta5pt3:'', respuesta1p5pt3:'', respuesta2p5pt3:'', respuesta3p5pt3:'',
      respuesta4p5pt3:'',respuestacorrectap5pt3:'',
    /*pt4*/    
    archivo_pt4: '', descripcionpt4: '', pregunta1pt4: '', respuesta1p1pt4: '', respuesta2p1pt4: '',
    respuesta3p1pt4:'', respuesta4p1pt4: '', respuestacorrectap1pt4:0, pregunta2pt4:'', respuesta1p2pt4:'', 
    respuesta2p2pt4:'', respuesta3p2pt4:'', respuesta4p2pt4:'', respuestacorrectap2pt4:'', pregunta3pt4:'',
    respuesta1p3pt4:'', respuesta2p3pt4:'', respuesta3p3pt4:'', respuesta4p3pt4:'', respuestacorrectap3pt4:'', 
    pregunta4pt4:'', respuesta1p4pt4:'', respuesta2p4pt4:'',respuesta3p4pt4:'', respuesta4p4pt4:'',
    respuestacorrectap4pt4:'', pregunta5pt4:'', respuesta1p5pt4:'', respuesta2p5pt4:'', respuesta3p5pt4:'',
    respuesta4p5pt4:'',respuestacorrectap5pt4:'',
    /*pt5*/  
    archivo_pt5: '', descripcionpt5: '', pregunta1pt5: '', respuesta1p1pt5: '', respuesta2p1pt5: '',
    respuesta3p1pt5:'', respuesta4p1pt5: '', respuestacorrectap1pt5:0, pregunta2pt5:'', respuesta1p2pt5:'', 
    respuesta2p2pt5:'', respuesta3p2pt5:'', respuesta4p2pt5:'', respuestacorrectap2pt5:'', pregunta3pt5:'',
    respuesta1p3pt5:'', respuesta2p3pt5:'', respuesta3p3pt5:'', respuesta4p3pt5:'', respuestacorrectap3pt5:'', 
    pregunta4pt5:'', respuesta1p4pt5:'', respuesta2p4pt5:'',respuesta3p4pt5:'', respuesta4p4pt5:'',
    respuestacorrectap4pt5:'', pregunta5pt5:'', respuesta1p5pt5:'', respuesta2p5pt5:'', respuesta3p5pt5:'',
    respuesta4p5pt5:'',respuestacorrectap5pt5:''
    };
  courseForm: FormGroup;
  showError = false;
  showSuccess = false;
  alertMessage = '';
  constructor(private router: Router, public appSettings: AppSettings, private authService: AuthService) {}
  
  ngOnInit() {
    const savedCursoData = localStorage.getItem('cursoData');
    if (savedCursoData) {
      this.cursoData = JSON.parse(savedCursoData);
    }
  }
  
  formSubmit(f: NgForm) {
    const formData = f.value;
    



      if (f.valid) {
        this.authService.crearcurso(formData.nombre_curso,formData.nombre_profesor,formData.descripcion,formData.iconocurso,
          formData.iconocursoNombre,formData.archivo_pt1,formData.descripcionpt1,
          formData.pregunta1pt1,formData.respuesta1p1pt1,
          formData.respuesta2p1pt1,formData.respuesta3p1pt1,formData.respuesta4p1pt1,
          formData.respuestacorrectap1pt1,formData.pregunta2pt1,formData.respuesta1p2pt1,
          formData.respuesta2p2pt1,formData.respuesta3p2pt1,formData.respuesta4p2pt1,
          formData.respuestacorrectap2pt1,formData.pregunta3pt1,formData.respuesta1p3pt1,
          formData.respuesta2p3pt1,formData.respuesta3p3pt1,formData.respuesta4p3pt1,
          formData.respuestacorrectap3pt1,formData.pregunta4pt1,formData.respuesta1p4pt1,
          formData.respuesta2p4pt1,formData.respuesta3p4pt1,formData.respuesta4p4pt1,
          formData.respuestacorrectap4pt1,formData.pregunta5pt1,formData.respuesta1p5pt1,
          formData.respuesta2p5pt1,formData.respuesta3p5pt1,formData.respuesta4p5pt1,
          formData.respuestacorrectap5pt1, formData.archivo_pt2,formData.descripcionpt2,
          formData.pregunta1pt2,formData.respuesta1p1pt2,
          formData.respuesta2p1pt2,formData.respuesta3p1pt2,formData.respuesta4p1pt2,
          formData.respuestacorrectap1pt2,formData.pregunta2pt2,formData.respuesta1p2pt2,
          formData.respuesta2p2pt2,formData.respuesta3p2pt2,formData.respuesta4p2pt2,
          formData.respuestacorrectap2pt2,formData.pregunta3pt2,formData.respuesta1p3pt2,
          formData.respuesta2p3pt2,formData.respuesta3p3pt2,formData.respuesta4p3pt2,
          formData.respuestacorrectap3pt2,formData.pregunta4pt2,formData.respuesta1p4pt2,
          formData.respuesta2p4pt2,formData.respuesta3p4pt2,formData.respuesta4p4pt2,
          formData.respuestacorrectap4pt2,formData.pregunta5pt2,formData.respuesta1p5pt2,
          formData.respuesta2p5pt2,formData.respuesta3p5pt2,formData.respuesta4p5pt2,
          formData.respuestacorrectap5pt2,formData.archivo_pt3,formData.descripcionpt3,
          formData.pregunta1pt3,formData.respuesta1p1pt3,
          formData.respuesta2p1pt3,formData.respuesta3p1pt3,formData.respuesta4p1pt3,
          formData.respuestacorrectap1pt3,formData.pregunta2pt3,formData.respuesta1p2pt3,
          formData.respuesta2p2pt3,formData.respuesta3p2pt3,formData.respuesta4p2pt3,
          formData.respuestacorrectap2pt3,formData.pregunta3pt3,formData.respuesta1p3pt3,
          formData.respuesta2p3pt3,formData.respuesta3p3pt3,formData.respuesta4p3pt3,
          formData.respuestacorrectap3pt3,formData.pregunta4pt3,formData.respuesta1p4pt3,
          formData.respuesta2p4pt3,formData.respuesta3p4pt3,formData.respuesta4p4pt3,
          formData.respuestacorrectap4pt3,formData.pregunta5pt3,formData.respuesta1p5pt3,
          formData.respuesta2p5pt3,formData.respuesta3p5pt3,formData.respuesta4p5pt3,
          formData.respuestacorrectap5pt3,formData.archivo_pt4,formData.descripcionpt4,
          formData.pregunta1pt4,formData.respuesta1p1pt4,
          formData.respuesta2p1pt4,formData.respuesta3p1pt4,formData.respuesta4p1pt4,
          formData.respuestacorrectap1pt4,formData.pregunta2pt4,formData.respuesta1p2pt4,
          formData.respuesta2p2pt4,formData.respuesta3p2pt4,formData.respuesta4p2pt4,
          formData.respuestacorrectap2pt4,formData.pregunta3pt4,formData.respuesta1p3pt4,
          formData.respuesta2p3pt4,formData.respuesta3p3pt4,formData.respuesta4p3pt4,
          formData.respuestacorrectap3pt4,formData.pregunta4pt4,formData.respuesta1p4pt4,
          formData.respuesta2p4pt4,formData.respuesta3p4pt4,formData.respuesta4p4pt4,
          formData.respuestacorrectap4pt4,formData.pregunta5pt4,formData.respuesta1p5pt4,
          formData.respuesta2p5pt4,formData.respuesta3p5pt4,formData.respuesta4p5pt4,
          formData.respuestacorrectap5pt4,formData.archivo_pt5,formData.descripcionpt5,
          formData.pregunta1pt5,formData.respuesta1p1pt5,
          formData.respuesta2p1pt5,formData.respuesta3p1pt5,formData.respuesta4p1pt5,
          formData.respuestacorrectap1pt5,formData.pregunta2pt5,formData.respuesta1p2pt5,
          formData.respuesta2p2pt5,formData.respuesta3p2pt5,formData.respuesta4p2pt5,
          formData.respuestacorrectap2pt5,formData.pregunta3pt5,formData.respuesta1p3pt5,
          formData.respuesta2p3pt5,formData.respuesta3p3pt5,formData.respuesta4p3pt5,
          formData.respuestacorrectap3pt5,formData.pregunta4pt5,formData.respuesta1p4pt5,
          formData.respuesta2p4pt5,formData.respuesta3p4pt5,formData.respuesta4p4pt5,
          formData.respuestacorrectap4pt5,formData.pregunta5pt5,formData.respuesta1p5pt5,
          formData.respuesta2p5pt5,formData.respuesta3p5pt5,formData.respuesta4p5pt5,
          formData.respuestacorrectap5pt5).subscribe(
          response => {
            console.log("curso creado")
              this.showSuccessAlert('Curso creado con éxito');
              this.router.navigate(['/buscar-cursos']);
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

              console.log(formData.respuesta1p1pt2)
              console.log(formData.respuesta2p1pt2)
              console.log(formData.respuesta3p1pt2)
              console.log(formData.respuesta4p1pt2)
              console.log("respuesta correcta: " + formData.respuestacorrectap1pt2)
          
              console.log(formData.respuesta1p2pt2)
              console.log(formData.respuesta2p2pt2)
              console.log(formData.respuesta3p2pt2)
              console.log(formData.respuesta4p2pt2)
              console.log("respuesta correcta: " + formData.respuestacorrectap2pt2)
          
              console.log(formData.respuesta1p3pt2)
              console.log(formData.respuesta2p3pt2)
              console.log(formData.respuesta3p3pt2)
              console.log(formData.respuesta4p3pt2)
              console.log("respuesta correcta: " + formData.respuestacorrectap3pt2)
          
              console.log(formData.respuesta1p4pt2)
              console.log(formData.respuesta2p4pt2)
              console.log(formData.respuesta3p4pt2)
              console.log(formData.respuesta4p4pt2)
              console.log("respuesta correcta: " + formData.respuestacorrectap4pt2)
          
              console.log(formData.respuesta1p5pt2)
              console.log(formData.respuesta2p5pt2)
              console.log(formData.respuesta3p5pt2)
              console.log(formData.respuesta4p5pt2)
              console.log("respuesta correcta: " + formData.respuestacorrectap5pt2)

              console.log(formData.respuesta1p1pt3)
              console.log(formData.respuesta2p1pt3)
              console.log(formData.respuesta3p1pt3)
              console.log(formData.respuesta4p1pt3)
              console.log("respuesta correcta: " + formData.respuestacorrectap1pt3)
          
              console.log(formData.respuesta1p2pt3)
              console.log(formData.respuesta2p2pt3)
              console.log(formData.respuesta3p2pt3)
              console.log(formData.respuesta4p2pt3)
              console.log("respuesta correcta: " + formData.respuestacorrectap2pt3)
          
              console.log(formData.respuesta1p3pt3)
              console.log(formData.respuesta2p3pt3)
              console.log(formData.respuesta3p3pt3)
              console.log(formData.respuesta4p3pt3)
              console.log("respuesta correcta: " + formData.respuestacorrectap3pt3)
          
              console.log(formData.respuesta1p4pt3)
              console.log(formData.respuesta2p4pt3)
              console.log(formData.respuesta3p4pt3)
              console.log(formData.respuesta4p4pt3)
              console.log("respuesta correcta: " + formData.respuestacorrectap4pt3)
          
              console.log(formData.respuesta1p5pt3)
              console.log(formData.respuesta2p5pt3)
              console.log(formData.respuesta3p5pt3)
              console.log(formData.respuesta4p5pt3)
              console.log("respuesta correcta: " + formData.respuestacorrectap5pt3)

              console.log(formData.respuesta1p1pt4)
              console.log(formData.respuesta2p1pt4)
              console.log(formData.respuesta3p1pt4)
              console.log(formData.respuesta4p1pt4)
              console.log("respuesta correcta: " + formData.respuestacorrectap1pt4)
          
              console.log(formData.respuesta1p2pt4)
              console.log(formData.respuesta2p2pt4)
              console.log(formData.respuesta3p2pt4)
              console.log(formData.respuesta4p2pt4)
              console.log("respuesta correcta: " + formData.respuestacorrectap2pt4)
          
              console.log(formData.respuesta1p3pt4)
              console.log(formData.respuesta2p3pt4)
              console.log(formData.respuesta3p3pt4)
              console.log(formData.respuesta4p3pt4)
              console.log("respuesta correcta: " + formData.respuestacorrectap3pt4)
          
              console.log(formData.respuesta1p4pt4)
              console.log(formData.respuesta2p4pt4)
              console.log(formData.respuesta3p4pt4)
              console.log(formData.respuesta4p4pt4)
              console.log("respuesta correcta: " + formData.respuestacorrectap4pt4)
          
              console.log(formData.respuesta1p5pt4)
              console.log(formData.respuesta2p5pt4)
              console.log(formData.respuesta3p5pt4)
              console.log(formData.respuesta4p5pt4)
              console.log("respuesta correcta: " + formData.respuestacorrectap5pt4)

              console.log(formData.respuesta1p1pt5)
              console.log(formData.respuesta2p1pt5)
              console.log(formData.respuesta3p1pt5)
              console.log(formData.respuesta4p1pt5)
              console.log("respuesta correcta: " + formData.respuestacorrectap1pt5)
          
              console.log(formData.respuesta1p2pt5)
              console.log(formData.respuesta2p2pt5)
              console.log(formData.respuesta3p2pt5)
              console.log(formData.respuesta4p2pt5)
              console.log("respuesta correcta: " + formData.respuestacorrectap2pt5)
          
              console.log(formData.respuesta1p3pt5)
              console.log(formData.respuesta2p3pt5)
              console.log(formData.respuesta3p3pt5)
              console.log(formData.respuesta4p3pt5)
              console.log("respuesta correcta: " + formData.respuestacorrectap3pt5)
          
              console.log(formData.respuesta1p4pt5)
              console.log(formData.respuesta2p4pt5)
              console.log(formData.respuesta3p4pt5)
              console.log(formData.respuesta4p4pt5)
              console.log("respuesta correcta: " + formData.respuestacorrectap4pt5)
          
              console.log(formData.respuesta1p5pt5)
              console.log(formData.respuesta2p5pt5)
              console.log(formData.respuesta3p5pt5)
              console.log(formData.respuesta4p5pt5)
              console.log("respuesta correcta: " + formData.respuestacorrectap5pt5)
              localStorage.removeItem('cursoData');
          },
          error => {
            console.log("error al crear curso")
            console.error('Error al crear:', error);
            this.showErrorAlert('No se puede crear el curso en este momento.');
        }
        );
      }}

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
