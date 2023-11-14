import { Component, OnInit} from '@angular/core';
import { Project } from '../project/project.model';
import { AiProjectsService } from './ai-projects.service';

@Component({
  selector: 'gpesc-ai-projects',
  templateUrl: './ai-projects.component.html',
  styleUrls: ['./ai-projects.component.css']
})
export class AiProjectsComponent {
  aiprojects: Project[] = [];

  constructor(private aiProjectService:AiProjectsService){}

  ngOnInit(){
    this.aiprojects = this.aiProjectService.projects;

  }
}
