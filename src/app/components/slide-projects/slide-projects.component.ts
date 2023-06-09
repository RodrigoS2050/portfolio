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
      src: 'assets/images/building_car.jpg',
      alt: 'Project Building Car',
      title: 'Building Car',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/RodrigoS2050/Building_Car',
      link: 'https://peaceful-blini-aafa31.netlify.app',
    },
    {
      id: '2',
      src: 'assets/images/reserva_ambiental.jpg',
      alt: 'Project Environmental Reserve',
      title: 'Reserval Ambiental',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/RodrigoS2050/Reserva_Ambiental',
      link: 'https://lucent-croissant-1cd884.netlify.app',
    },
    {
      id: '3',
      src: 'assets/images/le_scone.jpg',
      alt: 'Project Le Scone',
      title: 'Le Scone',
      technologies: ['HTML', 'SCSS'],
      github: 'https://github.com/RodrigoS2050/Le_Scone',
      link: 'https://melodic-moonbeam-0df9fd.netlify.app',
    },
    {
      id: '4',
      src: 'assets/images/weather-app.jpg',
      alt: 'Project Weather App',
      title: 'Dados Climáticos',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Open Weather API'],
      github: 'https://github.com/RodrigoS2050/Weather-App',
      link: 'https://neon-brioche-b6359e.netlify.app',
    },
    {
      id: '5',
      src: 'assets/images/virtual_store.jpg',
      alt: 'Project Virtual Store',
      title: 'Loja Virtual',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Bootstrap'],
      github: 'https://github.com/RodrigoS2050/Virtual-Store',
      link: 'https://delicate-queijadas-bf2532.netlify.app',
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
