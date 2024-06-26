import { Component, AfterViewInit, OnInit, ViewEncapsulation } from '@angular/core';
import { Editor } from 'ngx-editor';
import Tagify from '@yaireo/tagify'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'addpage',
  templateUrl: './addpage.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './addpage.css' ]
})

export class AddPage {
	editor: Editor;
  html: '';
  courseForm: FormGroup;

  constructor(private fb: FormBuilder,private router: Router) {}
  
  ngOnInit() {
    this.editor = new Editor();
    this.courseForm = this.fb.group({
      courseName: ['', Validators.required],
      professor: ['', Validators.required],
      courseIcon: [null, Validators.required]
    });

  }
  
  ngOnDestroy() {
    this.editor.destroy();
  }
  
	ngAfterViewInit() {
    var tagsElm = [].slice.call(document.querySelectorAll('[data-render="tags"]'));
    
    tagsElm.map(function(tagElm) {
    	new Tagify(tagElm);
    });
  }

  onSubmit() {
    if (this.courseForm.valid) {
      this.router.navigate(['/addinfo']);
    }
  }

}
