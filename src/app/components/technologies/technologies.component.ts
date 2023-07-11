import { Component } from '@angular/core';
import { ImageData } from 'src/app/types/image';
import { Technologie } from 'src/app/types/technologie';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss'],
})
export class TechnologiesComponent {
  tooltipVisible = false;

  technologies: Technologie[] = [
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      alt: 'HTML Icon',
      tooltip: 'HTML',
      tooltipVisible: false,
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      alt: 'CSS Icon',
      tooltip: 'CSS',
      tooltipVisible: false,
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      alt: 'JavaScript Icon',
      tooltip: 'JavaScript',
      tooltipVisible: false,
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      alt: 'Bootstrap Icon',
      tooltip: 'Bootstrap',
      tooltipVisible: false,
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
      alt: 'Sass Icon',
      tooltip: 'Sass',
      tooltipVisible: false,
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      alt: 'TypeScript Icon',
      tooltip: 'TypeScript',
      tooltipVisible: false,
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      alt: 'Angular Icon',
      tooltip: 'Angular',
      tooltipVisible: false,
    },
    {
      src: 'assets/svg/rxjs.svg',
      alt: 'RxJS Icon',
      tooltip: 'RxJS',
      tooltipVisible: false,
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/karma/karma-original.svg',
      alt: 'Karma Icon',
      tooltip: 'Karma',
      tooltipVisible: false,
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jasmine/jasmine-plain.svg',
      alt: 'Jasmine Icon',
      tooltip: 'Jasmine',
      tooltipVisible: false,
    },
    {
      src: 'assets/svg/ngrx.svg',
      alt: 'NgRx Icon',
      tooltip: 'NgRx',
      tooltipVisible: false,
    },
  ];

  showTooltip(image: ImageData) {
    image.tooltipVisible = true;
  }

  hideTooltip(image: ImageData) {
    image.tooltipVisible = false;
  }
}
