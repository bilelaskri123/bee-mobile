import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      cin: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(8)]],
    });
  }

  login() {
    if (!this.loginForm.value.cin || this.loginForm.value.password) {
      
    }
  }
}
