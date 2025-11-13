import { Component, OnInit, output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-abonne-clic-first-form',
  templateUrl: './abonne-clic-first-form.component.html',
  styleUrls: ['./abonne-clic-first-form.component.scss'],
})
export class AbonneClicFirstFormComponent implements OnInit {
  searchForm: FormGroup;
  firstFormChange = output<{
    fixNumber: string;
    cin: string;
  }>();
  constructor() {
    this.searchForm = new FormGroup({
      // fixNumber: new FormControl('', [Validators.required]),
      // cin: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.firstFormChange.emit({
      fixNumber: this.searchForm.value.fixNumber,
      cin: this.searchForm.value.cin,
    });
    // if (this.searchForm.valid) {
    // } else {
    //   console.log('Form is invalid');
    // }
  }
}
