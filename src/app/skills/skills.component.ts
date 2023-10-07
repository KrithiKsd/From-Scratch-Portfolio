import { Component, OnInit } from '@angular/core';
import { Skill } from '../model/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'Java',
      level: 'Expert',
      rating: 95,
    },
    {
      name: 'JavaScript',
      level: 'Intermidiate',
      rating: 85,
    },
    {
      name: 'HTML, CSS, JS',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'Kotlin',
      level: 'Expert',
      rating: 80,
    },
    {
      name: 'Angular/React',
      level: 'Intermidiate',
      rating: 80,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
