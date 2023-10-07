import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Krithika Kasaragod'],
    ['Work Exp', '5+ Years'],
    ['Education', 'M.S in Information Technology'],
    ['Interests', 'Reading books'],
  ];

  aboutMe: string[] = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officiis vel facere veritatis similique expedita iusto, ut laboriosam eius repudiandae error ad. Id inventore deleniti possimus nulla placeat consectetur magni.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officiis vel facere veritatis similique expedita iusto, ut laboriosam eius repudiandae error ad. Id inventore deleniti possimus nulla placeat consectetur magni.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officiis vel facere veritatis similique expedita iusto, ut laboriosam eius repudiandae error ad. Id inventore deleniti possimus nulla placeat consectetur magni.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officiis vel facere veritatis similique expedita iusto, ut laboriosam eius repudiandae error ad. Id inventore deleniti possimus nulla placeat consectetur magni.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officiis vel facere veritatis similique expedita iusto, ut laboriosam eius repudiandae error ad. Id inventore deleniti possimus nulla placeat consectetur magni.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officiis vel facere veritatis similique expedita iusto, ut laboriosam eius repudiandae error ad. Id inventore deleniti possimus nulla placeat consectetur magni.',
  ];

  constructor() {}

  ngOnInit(): void {}
}

