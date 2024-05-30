import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.page.html',
  styleUrls: ['./send-message.page.scss'],
})
export class SendMessagePage implements OnInit {
  phoneForm!: FormGroup;
  constructor() {}

  ngOnInit() {
    this.phoneForm = new FormGroup({
      phone: new FormControl(''),
    });
  }
}
