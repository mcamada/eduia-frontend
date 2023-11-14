import { Injectable } from '@angular/core';
import { Project } from '../project/project.model';

@Injectable({
  providedIn: 'root'
})
export class AiProjectsService {
  projects: Project[] = [
    {
      id: 1,
      title: "Rede Neurais",
      description: "bla bla bla rede neural",
      imagePath: "assets/img/neuralnetwork.png"
    },
    {
      id: 2,
      title: "CNN",
      description: "bla bla bla convolutional network",
      imagePath: "assets/img/cn.png"
    },
    {
      id: 3,
      title: "HMM",
      description: "bla bla bla hhmm",
      imagePath: "assets/img/hmm.png"
    },
    {
      id: 4,
      title: "SVM",
      description: "bla bla bla SVM",
      imagePath: "assets/img/svm.png"
    },
    {
      id: 1,
      title: "LTSM",
      description: "bla bla bla ltsm",
      imagePath: "assets/img/ltsm.png"
    }
  ]

  constructor() { }
}
