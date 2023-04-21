import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { ShareComponent } from './components/pages/share/share.component';
import { AboutComponent } from './components/pages/about/about.component';
import { DetailsComponent } from './components/functions/details/details.component';
import { EditComponent } from './components/functions/edit/edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'share', component: ShareComponent },
  { path: 'about', component: AboutComponent },
  { path: 'moment/:id', component: DetailsComponent },
  { path: 'edit/:id', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
