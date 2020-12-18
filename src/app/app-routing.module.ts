import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AfficherComponent } from './application/afficher/afficher.component';
import { CrudComponent } from './application/crud/crud.component';
import { Error404Component } from './application/error404/error404.component';
import { FunComponent } from './application/fun/fun.component';
import { HomeComponent } from './application/home/home.component';
import { ModifierComponent } from './application/modifier/modifier.component';
import { ReactiveComponent } from './application/reactive/reactive.component';
import { TutorielsComponent } from './application/tutoriels/tutoriels.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'updateForm/:id', component: ModifierComponent },
  { path: 'showForm/:id', component: AfficherComponent },
  { path: 'home', component: HomeComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'formulaire', component: ReactiveComponent },
  { path: 'fun', component: FunComponent },
  {
    path: 'tutoriels',
    children: [
      { path: ':id', component: TutorielsComponent }
    ]
  },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
