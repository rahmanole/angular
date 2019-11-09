import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-book-info-form',
  templateUrl: './book-info-form.component.html',
  styleUrls: ['./book-info-form.component.css']
})
export class BookInfoFormComponent implements OnInit {
  bookInfoForm: FormGroup;

  constructor() { }

  onSubmit (){
    console.log(this.bookInfoForm);
  }

  ngOnInit() {
    this.bookInfoForm = new FormGroup({
      'title': new FormControl(null),
      'author': new FormControl(null),
      'isbn': new FormControl(null),
      'copyrightYear': new FormControl(null),
      'availablity': new FormControl(null),
      'listPrice': new FormControl(null),
      'discount': new FormControl(null),
      'publisher': new FormControl(null),
      'imprint': new FormControl(null),
      'format': new FormControl(null),
      'eidtion': new FormControl(null),
      'pages': new FormControl(null),
      'printOrigin': new FormControl(null),
      'publicationDate': new FormControl(null),
      'dimention': new FormControl(null),
      'weight': new FormControl(null),
      'department': new FormControl(null),
      'courses': new FormControl(null),
      'mktRestriction': new FormControl(null),
      'overview': new FormControl(null),   
    });
  }
}
