import { Component , OnInit} from '@angular/core';
import { Education } from '../model/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: "University of ****",
      course: 'MS',
      duration: '2022-2023',
      gpa: '4',
    },
    {
      institute: '**** University',
      course: 'M.S in in Software Technology',
      duration: '***-***',
      gpa: '3.8',
    },
    {
      institute: '********',
      course: 'BS in Computer Science',
      duration: '****-****',
      gpa: '3.2',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

