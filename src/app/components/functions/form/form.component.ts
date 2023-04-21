import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Moment } from 'src/app/Moment';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input() inputValue!: string;

  @Output() onSubmit = new EventEmitter<Moment>();

  @Input() momentData: Moment | null = null;

  formGroup!: FormGroup;

  selectedFile: string = '';

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      id: new FormControl(this.momentData ? this.momentData.id : ''),
      title: new FormControl(this.momentData ? this.momentData.title : '', [
        Validators.required,
      ]),
      description: new FormControl(
        this.momentData ? this.momentData.description : '',
        [Validators.required]
      ),
      image: new FormControl(this.momentData ? this.momentData.image : '', [
        Validators.required,
      ]),
    });
  }

  onFileSelected(event: any) {
    const file: string = event.target.files[0];
    this.formGroup.patchValue({ image: file });
  }

  submit() {
    if (this.formGroup.invalid) {
      return;
    }

    this.onSubmit.emit(this.formGroup.value);
  }
}
