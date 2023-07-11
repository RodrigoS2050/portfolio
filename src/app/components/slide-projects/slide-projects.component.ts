import { Component, AfterViewInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Project } from 'src/app/types/project';

@Component({
  selector: 'app-slide-projects',
  templateUrl: './slide-projects.component.html',
  styleUrls: ['./slide-projects.component.scss'],
})
export class SlideProjectsComponent implements AfterViewInit {
  projectAppears: boolean = false;

  ngAfterViewInit() {
    setTimeout(() => {
      this.projectAppears = true;
    }, 100);
  }

  slidesProjects: Project[] = [
    {
      id: '1',
      src: 'assets/images/building-car.jpg',
      alt: 'Project Building Car',
      title: 'Building Car',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/RodrigoS2050/Building_Car',
      link: 'https://building-car-rs.netlify.app/',
    },
    {
      id: '2',
      src: 'assets/images/reserva-ambiental.jpg',
      alt: 'Project Environmental Reserve',
      title: 'Reserval Ambiental',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/RodrigoS2050/Reserva_Ambiental',
      link: 'https://reserval-ambiental-rs.netlify.app/',
    },
    {
      id: '3',
      src: 'assets/images/serenatto.jpg',
      alt: 'Project Serenatto',
      title: 'Serenatto',
      technologies: [
        'Angular',
        'TypeScript',
        'Bootstrap',
        'Sass',
        'Karma',
        'Jasmine',
      ],
      github: 'https://github.com/RodrigoS2050/Serenatto',
      link: 'https://serenatto-rs.netlify.app/',
    },
    {
      id: '4',
      src: 'assets/images/virtual-store.jpg',
      alt: 'Project Virtual Store',
      title: 'Virtual Store',
      technologies: [
        'Angular',
        'TypeScript',
        'Bootstrap',
        'Sass',
        'RxJS',
        'NgRx',
      ],
      github: 'https://github.com/RodrigoS2050/Virtual-Store',
      link: 'https://virtual-store-rs.netlify.app',
    },
    {
      id: '5',
      src: 'assets/images/buscante.jpg',
      alt: 'Project Buscante',
      title: 'Buscante',
      technologies: [
        'Angular',
        'TypeScript',
        'Bootstrap',
        'RxJS',
        'Karma',
        'Jasmine',
        'Infinite Scroll',
      ],
      github: 'https://github.com/RodrigoS2050/Buscante',
      link: 'https://buscante-rs.netlify.app',
    },
    {
      id: '6',
      src: 'assets/images/meteora.jpg',
      alt: 'Project Meteora',
      title: 'Meteora',
      technologies: [
        'Angular',
        'TypeScript',
        'Bootstrap',
        'Karma',
        'Jasmine',
        'NgRx',
      ],
      github: 'https://github.com/RodrigoS2050/Meteora',
      link: 'https://meteora-rs.netlify.app',
    },
  ];

  customOptions: OwlOptions = {
    loop: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: true,
    autoplaySpeed: 900,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      200: {
        items: 1,
      },
      750: {
        items: 2,
      },
    },
    nav: true,
  };
}
