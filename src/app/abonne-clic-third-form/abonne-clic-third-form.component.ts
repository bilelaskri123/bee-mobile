import { Component, OnInit, output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-abonne-clic-third-form',
  templateUrl: './abonne-clic-third-form.component.html',
  styleUrls: ['./abonne-clic-third-form.component.scss'],
})
export class AbonneClicThirdFormComponent implements OnInit {
  searchForm: FormGroup;
  formChange = output<{
    fixNumber: string;
    cin: string;
  }>();
  constructor() {
    this.searchForm = new FormGroup({
      fixNumber: new FormControl('', [Validators.required]),
      cin: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.searchForm.valid) {
      this.formChange.emit({
        fixNumber: this.searchForm.value.fixNumber,
        cin: this.searchForm.value.cin,
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
