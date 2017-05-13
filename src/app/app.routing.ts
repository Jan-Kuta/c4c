import { ArticleComponent } from './components/article/article.component';
import { GuidebookComponent } from './components/guidebook/guidebook.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';

const APP_ROUTES: Routes = [
  { path: 'profile', component: ProfileComponent},
  { path: '', component: HomeComponent },
  { path: 'guide', component: GuidebookComponent },
  { path: 'article', component: ArticleComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
