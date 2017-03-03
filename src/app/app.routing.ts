import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';

const APP_ROUTES: Routes = [
  { path: 'profile', component: ProfileComponent},
  { path: '', component: HomeComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);