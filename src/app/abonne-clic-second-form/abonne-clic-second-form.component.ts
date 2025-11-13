import { Component, OnInit, output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-abonne-clic-second-form',
  templateUrl: './abonne-clic-second-form.component.html',
  styleUrls: ['./abonne-clic-second-form.component.scss'],
})
export class AbonneClicSecondFormComponent implements OnInit {
  searchForm: FormGroup;
  secondFormChange = output<{
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
    this.secondFormChange.emit({
      fixNumber: this.searchForm.value.fixNumber,
      cin: this.searchForm.value.cin,
    });
    // if (this.searchForm.valid) {
    // } else {
    //   console.log('Form is invalid');
    // }
  }
}
