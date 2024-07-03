import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'crearcurso',
    templateUrl: './crearcurso.html',
    styleUrls: ['./crearcurso.css']
})
export class Crearcurso {
    courseForm: FormGroup;

    constructor(private fb: FormBuilder, private router: Router) {
        this.courseForm = this.fb.group({
            courseName: ['', Validators.required],
            professor: ['', Validators.required],
            Descripcioncurso: ['', Validators.required]
        });
    }

    onSubmit() {
        if (this.courseForm.valid) {
            // Simulación de proceso de guardado o validación antes de redireccionar
            console.log('Formulario válido. Redirigiendo...');
            this.router.navigate(['/primerafase']); // Redirige a la ruta /addinfo si el formulario es válido
        } else {
            console.error('Formulario inválido. No se puede enviar.');
            // Aquí podrías mostrar un mensaje de error o manejar el caso de formulario inválido
        }
    }
}
