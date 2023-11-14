import { Component, Input , OnInit} from '@angular/core';
import { Project } from './project.model';

@Component({
  selector: 'gpesc-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  @Input() project: Project = {
    id: -1,
    description: '',
    title: '',
    imagePath: ''
  }

  constructor(){
  }

  ngOnInit(): void {
  }
}
