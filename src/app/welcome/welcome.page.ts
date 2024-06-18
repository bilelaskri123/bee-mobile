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
    setTimeout(() => {
      this.setOpen(true);
    }, 1500);
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
    console.log();
    
  }

  closeModal(isOpen: boolean) {
    this.setOpen(isOpen);
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 1000);
  }
}
