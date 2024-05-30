import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-verification-code',
  templateUrl: './verification-code.page.html',
  styleUrls: ['./verification-code.page.scss'],
})
export class VerificationCodePage implements OnInit {
  verificationForm!: FormGroup;
  constructor() {}

  ngOnInit() {
    this.verificationForm = new FormGroup({
      code: new FormControl(''),
    });
  }
}
