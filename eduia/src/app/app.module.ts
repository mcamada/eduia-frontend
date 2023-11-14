import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ROUTES } from './app.routers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { AiProjectsComponent } from './ai-projects/ai-projects.component';
import { AiProjectsService } from './ai-projects/ai-projects.service';
import { AiProjectDatailComponent } from './ai-project-datail/ai-project-datail.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactInfoComponent,
    ProjectComponent,
    AiProjectsComponent,
    AiProjectDatailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AiProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
