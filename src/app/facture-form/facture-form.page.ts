import { Component, OnInit, output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-facture-form',
  templateUrl: './facture-form.page.html',
  styleUrls: ['./facture-form.page.scss'],
})
export class FactureFormPage implements OnInit {
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
