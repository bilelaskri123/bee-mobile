import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard-menu',
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./welcome/welcome.module').then((m) => m.WelcomePageModule),
  },
  {
    path: 'landing',
    loadChildren: () =>
      import('./landing/landing.module').then((m) => m.LandingPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterPageModule),
  },
  {
    path: 'send-message',
    loadChildren: () =>
      import('./send-message/send-message.module').then(
        (m) => m.SendMessagePageModule
      ),
  },
  {
    path: 'verification-code',
    loadChildren: () =>
      import('./verification-code/verification-code.module').then(
        (m) => m.VerificationCodePageModule
      ),
  },
  {
    path: 'dashboard-menu',
    loadChildren: () =>
      import('./dashboard-menu/dashboard-menu.module').then(
        (m) => m.DashboardMenuPageModule
      ),
  },
  {
    path: 'factures',
    loadChildren: () =>
      import('./factures/factures.module').then((m) => m.FacturesPageModule),
  },
  {
    path: 'paiement-express',
    loadChildren: () =>
      import('./paiement-express/paiement-express.module').then(
        (m) => m.PaiementExpressPageModule
      ),
  },
  {
    path: 'assistance',
    loadChildren: () =>
      import('./assistance/assistance.module').then(
        (m) => m.AssistancePageModule
      ),
  },
  {
    path: 'abonne-clic',
    loadChildren: () =>
      import('./abonne-clic/abonne-clic.module').then(
        (m) => m.AbonneClicPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
