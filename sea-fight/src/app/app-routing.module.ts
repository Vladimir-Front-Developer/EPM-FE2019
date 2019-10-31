import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { SeaBattlefieldComponent } from "./sea-battlefield/sea-battlefield.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'sea-battlefield', component: SeaBattlefieldComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  // получить id из localstorage? перейти на sea-battlefield: login.
  // Если будет время поставить гвард на sea-battlefield.
}
