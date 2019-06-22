import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'people',
    component: PeopleComponent
  }, {
    path: 'profile',
    component: ProfileComponent
  }
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, PeopleComponent, ProfileComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }