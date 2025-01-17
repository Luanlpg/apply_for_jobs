import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PasswordComponent } from './views/password/password.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'password/:id', component: PasswordComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false, // desativa o uso do hash
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
