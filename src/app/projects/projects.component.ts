import { Component, OnInit } from '@angular/core';
import { Project } from '../model/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      technologies: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      description: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      ],
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      technologies: 'C, C++',
      description: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      ],
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      technologies: 'HTML, CSS, JS, C#',
      description: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}