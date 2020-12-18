import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404Component } from './application/error404/error404.component';
import { NavbarComponent } from './application/navbar/navbar.component';
import { FooterComponent } from './application/footer/footer.component';
import { HomeComponent } from './application/home/home.component';
import { TutorielsComponent } from './application/tutoriels/tutoriels.component';
import { CrudComponent } from './application/crud/crud.component';
import { FunComponent } from './application/fun/fun.component';
import { ModifierComponent } from './application/modifier/modifier.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveComponent } from './application/reactive/reactive.component';
import { AfficherComponent } from './application/afficher/afficher.component';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    TutorielsComponent,
    CrudComponent,
    FunComponent,
    ModifierComponent,
    ReactiveComponent,
    AfficherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
