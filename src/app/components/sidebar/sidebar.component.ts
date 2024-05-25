import { Component } from '@angular/core';
import { Information } from 'src/app/types/information';
import { SocialNetwork } from 'src/app/types/social-network';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  socialNetworks: SocialNetwork[] = [
    {
      src: 'assets/svg/linkedin.svg',
      alt: 'LinkedIn Icon',
      href: 'https://www.linkedin.com/in/rodrigos-almeida/',
    },
    {
      src: 'assets/svg/github.svg',
      alt: 'Github Icon',
      href: 'https://github.com/RodrigoSADev',
    },
  ];

  informations: Information[] = [
    {
      src: 'assets/svg/telephone-fill.svg',
      alt: 'Telephone Icon',
      title: 'Telefone',
      description: '(21) 97623-6165',
    },
    {
      src: 'assets/svg/envelope-fill.svg',
      alt: 'Email Icon',
      title: 'E-mail',
      description: 'rodrigosalmeidadev@gmail.com',
    },
    {
      src: 'assets/svg/geo-alt-fill.svg',
      alt: 'Location Icon',
      title: 'Localização',
      description: 'Nova Iguaçu - RJ',
    },
  ];
}
