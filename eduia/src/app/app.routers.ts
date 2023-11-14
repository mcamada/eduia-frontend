import { Component } from '@angular/core';
import { Routes } from "@angular/router"

import { HomeComponent } from "./home/home.component"
import { AiProjectsComponent } from './ai-projects/ai-projects.component';
import { AboutComponent } from './about/about.component'
import { ContactInfoComponent } from './contact-info/contact-info.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'aiproject', component: AiProjectsComponent},
  {path: 'about', component:AboutComponent},
  {path: 'contact', component:ContactInfoComponent},
]
