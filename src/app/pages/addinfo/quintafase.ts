import { Component, AfterViewInit, OnInit, ViewEncapsulation } from '@angular/core';
import { Editor } from 'ngx-editor';
import Tagify from '@yaireo/tagify'

@Component({
  selector: 'quintafase',
  templateUrl: './quintafase.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './quintafase.css' ]
})

export class Quintafase {
	editor: Editor;
  html: '';
  
  ngOnInit() {
    this.editor = new Editor();
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
  scrollToTop() {
    window.scrollTo(0, 0);
  }

}
