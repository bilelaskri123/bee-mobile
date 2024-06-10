import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  isModalOpen: boolean = false;
  isLoading: boolean = true;
  constructor(private router: Router) { }

  ngOnInit() {
    console.log('ngOninit welcome page');
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  closeModal(isOpen: boolean) {
    this.setOpen(isOpen);
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 1000);
  }
}
