import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../model/models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Senior System Engineer',
      company: 'Lorem',
      duration: 'Aug 2019 - Aug 2021',
      description: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      ],
    },
    {
      role: 'Senior Software Engineer',
      company: 'Lorem',
      duration: 'Apr 2018 - Aug 2019',
      description: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      ],
    },
    {
      role: 'Associate IT consultant',
      company: 'Lorem',
      duration: 'Jul 2015 - Mar 2018',
      description: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}